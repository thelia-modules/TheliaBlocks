<?php

declare(strict_types=1);

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaBlocks\Controller\Front;

use Propel\Runtime\ActiveQuery\Criteria;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Model\Lang;
use TheliaBlocks\Controller\Admin\Support\LegacyBlockGroupSerializer;
use TheliaBlocks\Model\BlockGroup;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\BlockGroupQuery;

/**
 * Backwards-compatibility shim for the legacy `/open_api/block_group` GET
 * endpoints (front, public) still consumed by integrations relying on the
 * pre-AP4 contract.
 *
 * The canonical API lives under `/api/front/block_groups` (AP 4.3).
 */
#[Route('/open_api/block_group', name: 'theliablocks_legacy_block_group_front')]
final class BlockGroupController extends BaseFrontController
{
    #[Route('', name: '_get', methods: ['GET'])]
    public function getBlockGroup(Request $request): JsonResponse
    {
        $blockGroupQuery = BlockGroupQuery::create();

        if (null !== $id = $request->get('id')) {
            $blockGroupQuery->filterById((int) $id);
        }

        if (null !== $slug = $request->get('slug')) {
            $blockGroupQuery->filterBySlug($slug);
        }

        $visibleParam = $request->get('visible');
        if (null !== $visibleParam) {
            $blockGroupQuery->filterByVisible((bool) json_decode(strtolower((string) $visibleParam)));
        }

        $blockGroup = $blockGroupQuery->findOne();

        if (null === $blockGroup) {
            return $this->legacyJson(null, 404);
        }

        $locale = $request->get('locale');
        $payload = LegacyBlockGroupSerializer::toArray($blockGroup, $locale);

        if (empty($payload['jsonContent'])) {
            $fallbackLocale = $this->resolveFallbackLocale($payload['locales'] ?? [], $locale);

            if (null !== $fallbackLocale) {
                $fallbackI18n = BlockGroupI18nQuery::create()
                    ->filterById($blockGroup->getId())
                    ->filterByLocale($fallbackLocale)
                    ->findOne();

                if (null !== $fallbackI18n) {
                    $payload['jsonContent'] = $fallbackI18n->getJsonContent();
                }
            }
        }

        return $this->legacyJson($payload);
    }

    #[Route('/list', name: '_list', methods: ['GET'])]
    public function getBlockGroups(Request $request): JsonResponse
    {
        $blockGroupQuery = BlockGroupQuery::create();

        if (null !== $limit = $request->get('limit')) {
            $blockGroupQuery->limit((int) $limit);
        }

        if (null !== $offset = $request->get('offset')) {
            $blockGroupQuery->offset((int) $offset);
        }

        if (null !== $title = $request->get('title')) {
            $blockGroupQuery
                ->useBlockGroupI18nQuery()
                ->filterByTitle('%'.$title.'%', Criteria::LIKE)
                ->endUse();
        }

        if (null !== $itemType = $request->get('itemType')) {
            $itemBlockGroupQuery = $blockGroupQuery->useItemBlockGroupQuery()
                ->filterByItemType($itemType);

            if (null !== $itemId = $request->get('itemId')) {
                $itemBlockGroupQuery->filterByItemId((int) $itemId);
            }

            $itemBlockGroupQuery->endUse();
        }

        $visibleParam = $request->get('visible');
        if (null !== $visibleParam) {
            $blockGroupQuery->filterByVisible((bool) json_decode(strtolower((string) $visibleParam)));
        }

        $order = $request->get('order');
        $blockGroupQuery->orderById('id' === $order ? Criteria::ASC : Criteria::DESC);

        $blockGroups = $blockGroupQuery->find();

        if (0 === \count($blockGroups)) {
            return $this->legacyJson([], 404);
        }

        $locale = $request->get('locale');
        $payload = array_map(
            static fn (BlockGroup $blockGroup): array => LegacyBlockGroupSerializer::toArray($blockGroup, $locale),
            iterator_to_array($blockGroups),
        );

        return $this->legacyJson($payload);
    }

    /**
     * @param array<int, string> $availableLocales
     */
    private function resolveFallbackLocale(array $availableLocales, ?string $requestLocale): ?string
    {
        if ([] === $availableLocales) {
            return null;
        }

        if (null !== $requestLocale && \in_array($requestLocale, $availableLocales, true)) {
            return null;
        }

        $defaultLocale = Lang::getDefaultLanguage()->getLocale();

        if (\in_array($defaultLocale, $availableLocales, true)) {
            return $defaultLocale;
        }

        return $availableLocales[0];
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
