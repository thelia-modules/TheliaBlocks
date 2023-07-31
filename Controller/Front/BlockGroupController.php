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

namespace TheliaBlocks\Controller\Front;

use OpenApi\Annotations as OA;
use OpenApi\Controller\Front\BaseFrontOpenApiController;
use OpenApi\Model\Api\ModelFactory;
use OpenApi\Service\OpenApiService;
use Propel\Runtime\ActiveQuery\Criteria;
use Symfony\Component\Routing\Annotation\Route;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Model\Base\LangQuery;
use Thelia\Model\Lang;
use TheliaBlocks\Model\Api\BlockGroup;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\BlockGroupQuery;

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

        /** @var BlockGroup $blockGroup */
        $blockGroup = $modelFactory->buildModel('BlockGroup', $propelBlockGroup, $request->get('locale'));

        if (null !== $blockGroup && empty($blockGroup->getJsonContent())) {
            $requestLocale = $request->get('locale');

            if (! in_array($requestLocale, $blockGroup->getLocales())) {
                // Copy default locale JSON content
                $defaultLocale = Lang::getDefaultLanguage()->getLocale();

                $copyLocale = $blockGroup->getLocales()[0];

                if (in_array($defaultLocale, $blockGroup->getLocales())) {
                    $copyLocale = $defaultLocale;
                }

                if (null !== $copyGroup = BlockGroupI18nQuery::create()
                    ->filterById($blockGroup->getId())
                    ->filterByLocale($copyLocale)
                    ->findOne()
                ) {
                    $blockGroup->setJsonContent($copyGroup->getJsonContent());
                }
            }
        }

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
     *          name="title",
     *          description="the name of the block group",
     *          in="query",
     *          @OA\Schema(
     *              type="string"
     *          )
     *     ),
     *     @OA\Parameter(
     *          name="order",
     *          description="slug use to sort block groups",
     *          in="query",
     *          @OA\Schema(
     *              type="string",
     *              enum={"id", "id_reverse", "title", "title_reverse", "updated_at", "updated_at_reverse"}
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
     *          @OA\JsonContent(
     *              @OA\Items(
     *                  type="object",
     *                  @OA\Property(
     *                      property="items",
     *                      type="array",
     *                      @OA\Items(
     *                          ref="#/components/schemas/BlockGroup"
     *                      )
     *                  ),
     *                  @OA\Property(
     *                      property="pagination_info",
     *                      type="object",
     *                      @OA\Property(
     *                          property="countAllItems",
     *                          type="integer"
     *                      ),
     *                      @OA\Property(
     *                          property="limit",
     *                          type="integer"
     *                      ),
     *                      @OA\Property(
     *                          property="offset",
     *                          type="integer"
     *                      ),
     *                      @OA\Property(
     *                          property="currentPage",
     *                          type="integer"
     *                      ),
     *                      @OA\Property(
     *                          property="nbPages",
     *                          type="integer"
     *                      )
     *                  )
     *              )
     *          )
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

        if (null !== $title = $request->get('title')) {
            $locale = $request->get('locale') ?? LangQuery::create()
                ->filterByByDefault(1)
                ->findOne()
                ?->getLocale();

            $blockGroupQuery->useBlockGroupI18nQuery()
                ->filterByLocale($locale)
                ->filterByTitle('%'.$title.'%', Criteria::LIKE)
                ->endUse()
            ;
        }

        $order = $request->get('order');

        switch ($order) {
            case 'id':
                $blockGroupQuery->orderById(Criteria::ASC);
                break;
            case 'id_reverse':
                $blockGroupQuery->orderById(Criteria::DESC);
                break;
            case 'title':
                $blockGroupQuery
                    ->useBlockGroupI18nQuery()
                    ->orderByTitle(Criteria::ASC)
                    ->endUse();
                break;
            case 'title_reverse':
                $blockGroupQuery
                    ->useBlockGroupI18nQuery()
                    ->orderByTitle(Criteria::DESC)
                    ->endUse();
                break;
            case 'updated_at':
                $blockGroupQuery->orderByUpdatedAt(Criteria::ASC);
                break;
            case 'updated_at_reverse':
                $blockGroupQuery->orderByUpdatedAt(Criteria::DESC);
                break;
            default:
                $blockGroupQuery->orderById(Criteria::DESC);
        }

        $countPropelTheliaBlocks = $blockGroupQuery->count();

        if (null !== $limit = $request->get('limit')) {
            $blockGroupQuery->limit($limit);
        }

        if (null !== $offset = $request->get('offset')) {
            $blockGroupQuery->offset($offset);
        }

        $propelTheliaBlocks = $blockGroupQuery->find();


        if (empty($propelTheliaBlocks)) {
            return OpenApiService::jsonResponse([], 404);
        }

        $theliaBlocks = array_map(
            fn ($propelBlockGroup) => $modelFactory->buildModel('BlockGroup', $propelBlockGroup, $request->get('locale')),
            iterator_to_array($propelTheliaBlocks)
        );
        $paginationInfo = [];
        if (null !== $limit && null !== $offset) {
            $paginationInfo = [
                "countAllItems" => $countPropelTheliaBlocks,
                "limit" => (int)$limit,
                "offset" => (int)$offset,
                "currentPage" => ((int)($offset/$limit))+1,
                "nbPages" => ((int)($countPropelTheliaBlocks/$limit))+1
            ];
        }

        return OpenApiService::jsonResponse([
            "items" => $theliaBlocks,
            "pagination_info" => $paginationInfo
        ]);
    }
}
