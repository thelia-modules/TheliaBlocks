<?php

namespace TheliaBlocks\Controller;

use OpenApi\Controller\Admin\BaseAdminOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Annotations as OA;
use OpenApi\Service\OpenApiService;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\JsonResponse;
use Thelia\Core\HttpFoundation\Request;
use TheliaBlocks\Model\BlockGroup;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\Model\BlockGroupI18n;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\ItemBlockGroup;
use TheliaBlocks\Model\ItemBlockGroupQuery;

/**
 * @Route("/open_api/item_block_group", name="item_block_group")
 */
class ItemBlockGroupController extends BaseAdminOpenApiController
{
    /**
     * @Route("/{itemBlockGroupId}", name="delete_item_block_group", methods="DELETE", requirements={"itemBlockGroupId"="\d+"})
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

        return new JsonResponse("Success", 204);
    }
}
