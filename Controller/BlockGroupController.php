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

        /** @var BlockGroup $blockGroup */
        $blockGroup = $openApiBlockGroup->toTheliaModel($data['locale']);
        $blockGroup->save();

        return OpenApiService::jsonResponse($openApiBlockGroup->setId($blockGroup->getId()));
    }

    /**
     * @Route("", name="get_block_group", methods="GET")
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
            $visible = (boolean)json_decode(strtolower($request->get('visible')));
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
     * @Route("/list", name="list_block_group", methods="GET")
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

        if ($request->get('visible') !== null) {
            $visible = (boolean)json_decode(strtolower($request->get('visible')));
            $blockGroupQuery->filterByVisible($visible);
        }

        $propelTheliaBlocks = $blockGroupQuery->find();

        if (empty($propelTheliaBlocks)) {
            return OpenApiService::jsonResponse([], 404);
        }

        $TheliaBlocks = array_map(
            function ($propelBlockGroup) use ($modelFactory, $request) {
             return $modelFactory->buildModel('BlockGroup', $propelBlockGroup, $request->get('locale'));
            },
            iterator_to_array($propelTheliaBlocks)
        );

        return OpenApiService::jsonResponse($TheliaBlocks);
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

        /** @var BlockGroup $blockGroup */
        $blockGroup = $openApiBlockGroup->toTheliaModel($data['locale']);
        $blockGroup->save();

        return OpenApiService::jsonResponse($openApiBlockGroup->setId($blockGroup->getId()));
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

        return new JsonResponse("Success", 204);
    }
}
