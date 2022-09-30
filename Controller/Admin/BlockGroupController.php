<?php

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

use OpenApi\Annotations as OA;
use OpenApi\Controller\Admin\BaseAdminOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\JsonResponse;
use Thelia\Core\HttpFoundation\Request;
use TheliaBlocks\Model\BlockGroup;
use TheliaBlocks\Model\BlockGroupI18n;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\Model\ItemBlockGroup;
use TheliaBlocks\Model\ItemBlockGroupQuery;

/**
 * @Route("/open_api/block_group", name="block_group")
 */
class BlockGroupController extends BaseAdminOpenApiController
{
    /**
     * @Route("", name="add_block_group", methods="POST")
     *
     * @OA\Post(
     *     path="/block_group",
     *     tags={"block group"},
     *     summary="Add a new group of block",
     *     @OA\RequestBody(
     *          required=true,
     *             @OA\JsonContent(
     *                  @OA\Property(
     *                      property="blockGroup",
     *                      ref="#/components/schemas/BlockGroup"
     *                  ),
     *                  @OA\Property(
     *                      property="itemBlockGroup",
     *                      ref="#/components/schemas/ItemBlockGroup"
     *                  ),
     *                 @OA\Property(
     *                     property="locale",
     *                     default="en_US",
     *                     type="string"
     *                 ),
     *             )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/BlockGroup")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function createBlockGroup(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $data = json_decode($request->getContent(), true);
        /** @var \TheliaBlocks\Model\Api\BlockGroup $openApiBlockGroup */
        $openApiBlockGroup = $modelFactory->buildModel('BlockGroup', $data['blockGroup']);
        $openApiBlockGroup->validate(self::GROUP_CREATE);

        if (!isset($data['locale'])) {
            $data['locale'] = $request->getSession()->getAdminLang()->getLocale();
        }

        /** @var BlockGroup $blockGroup */
        $blockGroup = $openApiBlockGroup->toTheliaModel($data['locale']);
        $blockGroup->save();

        if (isset($data['itemBlockGroup'])) {
            $this->assignBlockGroupToItem($modelFactory, $data['itemBlockGroup'], $blockGroup->getId());
        }

        $blockGroup->clearItemBlockGroups();

        return OpenApiService::jsonResponse(
            $modelFactory->buildModel('BlockGroup', $blockGroup)
        );
    }

    /**
     * @Route("", name="update_block_group", methods="PATCH")
     *
     * @OA\Patch(
     *     path="/block_group",
     *     tags={"block group"},
     *     summary="Update a block group",
     *     @OA\RequestBody(
     *          required=true,
     *             @OA\JsonContent(
     *                  @OA\Property(
     *                      property="blockGroup",
     *                      ref="#/components/schemas/BlockGroup"
     *                  ),
     *                  @OA\Property(
     *                      property="itemBlockGroup",
     *                      ref="#/components/schemas/ItemBlockGroup"
     *                  ),
     *                 @OA\Property(
     *                     property="locale",
     *                     type="string",
     *                     default="en_US"
     *                 ),
     *             )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/BlockGroup")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function updateBlockGroup(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $data = json_decode($request->getContent(), true);
        /** @var \TheliaBlocks\Model\Api\BlockGroup $openApiBlockGroup */
        $openApiBlockGroup = $modelFactory->buildModel('BlockGroup', $data['blockGroup']);
        $openApiBlockGroup->validate(self::GROUP_UPDATE);

        if (!isset($data['locale'])) {
            $data['locale'] = $request->getSession()->getAdminLang()->getLocale();
        }

        /** @var BlockGroup $blockGroup */
        $blockGroup = $openApiBlockGroup->toTheliaModel($data['locale']);
        $blockGroup->save();

        if (isset($data['itemBlockGroup'])) {
            $this->assignBlockGroupToItem($modelFactory, $data['itemBlockGroup'], $blockGroup->getId());
        }
        $blockGroup->clearItemBlockGroups();

        return OpenApiService::jsonResponse($modelFactory->buildModel('BlockGroup', $blockGroup));
    }

    /**
     * @Route("/{blockGroupId}", name="delete_block_group", methods="DELETE", requirements={"blockGroupId"="\d+"})
     *
     * @OA\Delete(
     *     path="/block_group/{blockGroupId}",
     *     tags={"block group"},
     *     summary="Delete a block group",
     *     @OA\Parameter(
     *          name="blockGroupId",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Response(
     *          response="204",
     *          description="Success"
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function deleteBlockGroup(
        $blockGroupId
    ) {
        $blockGroup = BlockGroupQuery::create()
            ->filterById($blockGroupId)
            ->findOne();

        $blockGroup->delete();

        return new JsonResponse('Success', 204);
    }

    /**
     * @Route("/duplicate/{blockGroupId}", name="duplicate_block_group", methods="POST", requirements={"blockGroupId"="\d+"})
     *
     * @OA\Post(
     *     path="/block_group/duplicate/{blockGroupId}",
     *     tags={"block group"},
     *     summary="Duplicate a group of block",
     *     @OA\Parameter(
     *          name="blockGroupId",
     *          in="path",
     *          required=true,
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Response(
     *          response="200",
     *          description="Success",
     *          @OA\JsonContent(ref="#/components/schemas/BlockGroup")
     *     ),
     *     @OA\Response(
     *          response="400",
     *          description="Bad request",
     *          @OA\JsonContent(ref="#/components/schemas/Error")
     *     )
     * )
     */
    public function duplicateBlockGroup(
        $blockGroupId
    ) {
        $propelBlockGroup = BlockGroupQuery::create()->filterById($blockGroupId)->findOne();

        if (null === $propelBlockGroup) {
            return OpenApiService::jsonResponse(null, 404);
        }

        $newBlockGroup = $propelBlockGroup->copy();
        $newBlockGroup->save();
        $newBlockId = $newBlockGroup->getId();

        $blockGroupI18ns = BlockGroupI18nQuery::create()->filterById($blockGroupId)->find();

        array_map(function (BlockGroupI18n $blockI18n) use ($newBlockId): void {
            $newBlockI18n = $blockI18n->copy();
            $newBlockI18n->setId($newBlockId)->save();
        }, iterator_to_array($blockGroupI18ns));

        return OpenApiService::jsonResponse($newBlockGroup->getId());
    }

    protected function assignBlockGroupToItem(ModelFactory $modelFactory, $itemBlockGroup, $blockGroupId)
    {
        $openApiItemBlockGroup = $modelFactory->buildModel('ItemBlockGroup', $itemBlockGroup);
        /** @var ItemBlockGroup $itemBlockGroup */
        $itemBlockGroup = $openApiItemBlockGroup->toTheliaModel();
        $itemBlockGroup->setBlockGroupId($blockGroupId);

        // todo allow multiple block for an item
        $oldItemBlockGroup = ItemBlockGroupQuery::create()
            ->filterByItemType($itemBlockGroup->getItemType())
            ->filterByItemId($itemBlockGroup->getItemId())
            ->findOne();
        if (null !== $oldItemBlockGroup) {
            $oldItemBlockGroup->delete();
        }

        $itemBlockGroup->save();

        return $itemBlockGroup;
    }
}
