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
use TheliaBlocks\Model\ItemBlockGroup;
use TheliaBlocks\Model\ItemBlockGroupQuery;

/**
 * @Route("/open_api/item_block_group", name="item_block_group")
 */
class ItemBlockGroupController extends BaseAdminOpenApiController
{
    /**
     * @Route("", name="_create", methods="POST")
     *
     * @OA\Post(
     *     path="/item_block_group",
     *     tags={"item block group", "block group"},
     *     summary="Add a relation between an item and a block group",
     *     @OA\RequestBody(
     *          required=true,
     *             @OA\JsonContent(
     *                  @OA\Property(
     *                      property="itemBlockGroup",
     *                      ref="#/components/schemas/ItemBlockGroup"
     *                  )
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
    public function createItemBlockGroup(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $data = json_decode($request->getContent(), true);
        $openApiItemBlockGroup = $modelFactory->buildModel('ItemBlockGroup', $data['itemBlockGroup']);
        /** @var ItemBlockGroup $itemBlockGroup */
        $itemBlockGroup = $openApiItemBlockGroup->toTheliaModel();

        // todo allow multiple block for an item
        $oldItemBlockGroup = ItemBlockGroupQuery::create()
            ->filterByItemType($itemBlockGroup->getItemType())
            ->filterByItemId($itemBlockGroup->getItemId())
            ->findOne();
        if (null !== $oldItemBlockGroup) {
            $oldItemBlockGroup->delete();
        }

        $itemBlockGroup->save();

        $theliaBlock = $modelFactory->buildModel('BlockGroup', $itemBlockGroup->getBlockGroup(), $request->get('locale'));

        return OpenApiService::jsonResponse($theliaBlock, 200);
    }

    /**
     * @Route("/{itemBlockGroupId}", name="_delete", methods="DELETE", requirements={"itemBlockGroupId"="\d+"})
     *
     * @OA\Delete(
     *     path="/item_block_group/{itemBlockGroupId}",
     *     tags={"item block group", "block group"},
     *     summary="Delete a relation between an item and a block group",
     *     @OA\Parameter(
     *          name="itemBlockGroupId",
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
    public function deleteItemBlockGroup(
        $itemBlockGroupId
    ) {
        $itemBlockGroup = ItemBlockGroupQuery::create()
            ->filterById($itemBlockGroupId)
            ->findOne();

        if (null !== $itemBlockGroup) {
            $itemBlockGroup->delete();
        }

        return new JsonResponse('Success', 204);
    }
}
