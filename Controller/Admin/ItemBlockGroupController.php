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
use TheliaBlocks\Controller\Admin\Support\LegacyBlockGroupSerializer;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\Model\ItemBlockGroup;
use TheliaBlocks\Model\ItemBlockGroupQuery;

/**
 * Backwards-compatibility shim for the legacy `/open_api/item_block_group`
 * endpoints still consumed by the `@thelia/blocks-editor` admin bundle.
 *
 * The canonical API lives under `/api/admin/item_block_groups` (AP 4.3).
 */
#[Route('/open_api/item_block_group', name: 'theliablocks_legacy_item_block_group_admin')]
final class ItemBlockGroupController extends BaseAdminController
{
    #[Route('', name: '_create', methods: ['POST'])]
    public function createItemBlockGroup(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true) ?? [];
        $payload = $data['itemBlockGroup'] ?? [];
        $locale = $request->get('locale') ?? $request->getSession()->getAdminLang()->getLocale();

        $itemBlockGroup = (new ItemBlockGroup())
            ->setItemType((string) ($payload['itemType'] ?? ''))
            ->setItemId((int) ($payload['itemId'] ?? 0))
            ->setBlockGroupId((int) ($payload['blockGroupId'] ?? 0));

        $existing = ItemBlockGroupQuery::create()
            ->filterByItemType($itemBlockGroup->getItemType())
            ->filterByItemId($itemBlockGroup->getItemId())
            ->findOne();

        $existing?->delete();

        $itemBlockGroup->save();

        $blockGroup = BlockGroupQuery::create()->findPk($itemBlockGroup->getBlockGroupId());

        if (null === $blockGroup) {
            return $this->legacyJson(null, 404);
        }

        return $this->legacyJson(LegacyBlockGroupSerializer::toArray($blockGroup, $locale));
    }

    #[Route('/{itemBlockGroupId}', name: '_delete', methods: ['DELETE'], requirements: ['itemBlockGroupId' => '\d+'])]
    public function deleteItemBlockGroup(int $itemBlockGroupId): JsonResponse
    {
        $itemBlockGroup = ItemBlockGroupQuery::create()->findPk($itemBlockGroupId);

        $itemBlockGroup?->delete();

        return $this->legacyJson('Success', 204);
    }

    private function legacyJson(mixed $data, int $status = 200): JsonResponse
    {
        $response = (new JsonResponse())->setContent(json_encode($data));
        $response->headers->set('Access-Control-Allow-Origin', '*');
        $response->setStatusCode($status);

        return $response;
    }
}
