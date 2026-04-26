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

namespace TheliaBlocks\Controller\Admin;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Admin\BaseAdminController;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Model\LangQuery;
use TheliaBlocks\Controller\Admin\Support\LegacyBlockGroupSerializer;
use TheliaBlocks\Model\BlockGroup;
use TheliaBlocks\Model\BlockGroupI18n;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\Model\ItemBlockGroup;
use TheliaBlocks\Model\ItemBlockGroupQuery;

/**
 * Backwards-compatibility shim for the legacy `/open_api/block_group` endpoints
 * still consumed by the bundled `@thelia/blocks-editor` admin UI.
 *
 * The canonical API for new integrations lives under `/api/admin/block_groups`
 * (API Platform 4.3 resources). This controller exposes the same Propel logic
 * but returns the legacy JSON shape expected by the npm bundle.
 */
#[Route('/open_api/block_group', name: 'theliablocks_legacy_block_group_admin')]
final class BlockGroupController extends BaseAdminController
{
    #[Route('', name: '_create', methods: ['POST'])]
    public function createBlockGroup(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $payload = $data['blockGroup'] ?? [];
        $locale = $data['locale'] ?? $request->getSession()->getAdminLang()->getLocale();

        $blockGroup = (new BlockGroup())
            ->setVisible((int) (bool) ($payload['visible'] ?? false));

        if (\array_key_exists('slug', $payload) && null !== $payload['slug']) {
            $blockGroup->setSlug($payload['slug']);
        }

        $blockGroup
            ->setLocale($locale)
            ->setTitle($payload['title'] ?? '')
            ->setJsonContent($payload['jsonContent'] ?? null);

        $blockGroup->save();

        if (isset($data['itemBlockGroup'])) {
            $this->upsertItemBlockGroup($data['itemBlockGroup'], $blockGroup->getId());
        }

        $blockGroup->clearItemBlockGroups();

        return $this->legacyJson(LegacyBlockGroupSerializer::toArray($blockGroup, $locale));
    }

    #[Route('', name: '_update', methods: ['PATCH'])]
    public function updateBlockGroup(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $payload = $data['blockGroup'] ?? [];
        $locale = $data['locale'] ?? $request->getSession()->getAdminLang()->getLocale();
        $id = $payload['id'] ?? null;

        if (null === $id) {
            return $this->legacyJson(['error' => 'Missing id'], 400);
        }

        $blockGroup = BlockGroupQuery::create()->findPk((int) $id);

        if (null === $blockGroup) {
            return $this->legacyJson(['error' => 'Not found'], 404);
        }

        if (\array_key_exists('visible', $payload)) {
            $blockGroup->setVisible((int) (bool) $payload['visible']);
        }

        if (\array_key_exists('slug', $payload) && null !== $payload['slug']) {
            $blockGroup->setSlug($payload['slug']);
        }

        $blockGroup->setLocale($locale);

        if (\array_key_exists('title', $payload)) {
            $blockGroup->setTitle((string) $payload['title']);
        }

        if (\array_key_exists('jsonContent', $payload)) {
            $blockGroup->setJsonContent($payload['jsonContent']);
        }

        $blockGroup->save();

        if (isset($data['itemBlockGroup'])) {
            $this->upsertItemBlockGroup($data['itemBlockGroup'], $blockGroup->getId());
        }

        $blockGroup->clearItemBlockGroups();

        return $this->legacyJson(LegacyBlockGroupSerializer::toArray($blockGroup, $locale));
    }

    #[Route('/{blockGroupId}', name: '_delete', methods: ['DELETE'], requirements: ['blockGroupId' => '\d+'])]
    public function deleteBlockGroup(int $blockGroupId): JsonResponse
    {
        $blockGroup = BlockGroupQuery::create()->findPk($blockGroupId);

        $blockGroup?->delete();

        return $this->legacyJson('Success', 204);
    }

    #[Route('/duplicate/{blockGroupId}', name: '_duplicate', methods: ['POST'], requirements: ['blockGroupId' => '\d+'])]
    public function duplicateBlockGroup(int $blockGroupId): JsonResponse
    {
        $sourceBlockGroup = BlockGroupQuery::create()->findPk($blockGroupId);

        if (null === $sourceBlockGroup) {
            return $this->legacyJson(null, 404);
        }

        $newBlockGroup = $sourceBlockGroup->copy();
        $newBlockGroup->save();
        $newBlockGroupId = $newBlockGroup->getId();

        $sourceI18ns = BlockGroupI18nQuery::create()
            ->filterById($blockGroupId)
            ->find();

        /** @var BlockGroupI18n $sourceI18n */
        foreach ($sourceI18ns as $sourceI18n) {
            $newI18n = $sourceI18n->copy();
            $newI18n->setId($newBlockGroupId);
            $newI18n->save();
        }

        return $this->legacyJson($newBlockGroupId);
    }

    private function upsertItemBlockGroup(array $payload, int $blockGroupId): void
    {
        $itemBlockGroup = (new ItemBlockGroup())
            ->setItemType($payload['itemType'] ?? '')
            ->setItemId((int) ($payload['itemId'] ?? 0))
            ->setBlockGroupId($blockGroupId);

        $existing = ItemBlockGroupQuery::create()
            ->filterByItemType($itemBlockGroup->getItemType())
            ->filterByItemId($itemBlockGroup->getItemId())
            ->findOne();

        $existing?->delete();

        $itemBlockGroup->save();
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
