<?php

namespace TheliaBlocks\Controller\Front;

use OpenApi\Controller\Front\BaseFrontOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Propel\Runtime\ActiveQuery\Criteria;
use Thelia\Core\HttpFoundation\Request;
use TheliaBlocks\Model\BlockGroupQuery;
use OpenApi\Annotations as OA;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/open_api/block_group", name="block_group")
 */
class BlockGroupController extends BaseFrontOpenApiController
{
    /**
     * @Route("", name="_get", methods="GET")
     *
     * @OA\Get(
     *     path="/block_group",
     *     tags={"block group"},
     *     summary="Get a block group",
     *     @OA\Parameter(
     *          name="id",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="slug",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="visible",
     *          in="query",
     *          @OA\Schema(
     *              type="boolean",
     *              default="true"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="locale",
     *          in="query",
     *          description="Current locale by default",
     *          @OA\Schema(
     *              type="string"
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
    public function getBlockGroup(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $blockGroupQuery = BlockGroupQuery::create();

        if (null !== $id = $request->get('id')) {
            $blockGroupQuery->filterById($id);
        }

        if (null !== $slug = $request->get('slug')) {
            $blockGroupQuery->filterBySlug($slug);
        }

        if ($request->get('visible') !== null) {
            $visible = (bool) json_decode(strtolower($request->get('visible')));
            $blockGroupQuery->filterByVisible($visible);
        }

        $propelBlockGroup = $blockGroupQuery->findOne();

        if (null === $propelBlockGroup) {
            return OpenApiService::jsonResponse(null, 404);
        }

        $blockGroup = $modelFactory->buildModel('BlockGroup', $propelBlockGroup, $request->get('locale'));

        return OpenApiService::jsonResponse($blockGroup);
    }

    /**
     * @Route("/list", name="_get_list", methods="GET")
     *
     * @OA\Get(
     *     path="/block_group/list",
     *     tags={"block group"},
     *     summary="Get list of block groups",
     *     @OA\Parameter(
     *          name="limit",
     *          in="query",
     *          @OA\Schema(
     *              type="integer"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="offset",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="itemType",
     *          description="the type of an item linked to the block group",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="itemId",
     *          description="the id of an item linked to the block group (itemType has too be defined too)",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="visible",
     *          in="query",
     *          @OA\Schema(
     *              type="boolean",
     *              default="true"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="locale",
     *          in="query",
     *          description="Current locale by default",
     *          @OA\Schema(
     *              type="string"
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
    public function getBlockGroups(
        Request $request,
        ModelFactory $modelFactory
    ) {
        $blockGroupQuery = BlockGroupQuery::create();

        if (null !== $limit = $request->get('limit')) {
            $blockGroupQuery->limit($limit);
        }

        if (null !== $offset = $request->get('offset')) {
            $blockGroupQuery->offset($offset);
        }

        if (null !== $itemType = $request->get('itemType')) {
            $itemBlockGroupQuery = $blockGroupQuery->useItemBlockGroupQuery()
                ->filterByItemType($itemType);

            if (null !== $itemId = $request->get('itemId')) {
                $itemBlockGroupQuery->filterByItemId($itemId);
            }

            $itemBlockGroupQuery->endUse();
        }

        if ($request->get('visible') !== null) {
            $visible = (bool) json_decode(strtolower($request->get('visible')));
            $blockGroupQuery->filterByVisible($visible);
        }

        $order = $request->get('order');

        switch ($order) {
            case 'id':
                $blockGroupQuery->orderById(Criteria::ASC);
                break;
            case 'id_reverse':
                $blockGroupQuery->orderById(Criteria::DESC);
                break;
            default:
                $blockGroupQuery->orderById(Criteria::DESC);
        }

        $propelTheliaBlocks = $blockGroupQuery->find();

        if (empty($propelTheliaBlocks)) {
            return OpenApiService::jsonResponse([], 404);
        }

        $theliaBlocks = array_map(
            fn ($propelBlockGroup) => $modelFactory->buildModel('BlockGroup', $propelBlockGroup, $request->get('locale')),
            iterator_to_array($propelTheliaBlocks)
        );

        return OpenApiService::jsonResponse($theliaBlocks);
    }
}
