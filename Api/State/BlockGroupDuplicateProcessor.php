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

namespace TheliaBlocks\Api\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\Metadata\Post;
use ApiPlatform\State\ProcessorInterface;
use Propel\Runtime\Propel;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Thelia\Api\Bridge\Propel\Service\ApiResourcePropelTransformerService;
use Thelia\Config\DatabaseConfiguration;
use TheliaBlocks\Api\Resource\BlockGroup;
use TheliaBlocks\Model\BlockGroupI18n;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\BlockGroupQuery;

/**
 * Duplicates an existing BlockGroup, including all its i18n rows.
 *
 * Endpoint: POST /api/admin/block_groups/{id}/duplicate
 */
final readonly class BlockGroupDuplicateProcessor implements ProcessorInterface
{
    public function __construct(
        private ApiResourcePropelTransformerService $apiResourcePropelTransformerService,
    ) {
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): BlockGroup
    {
        $sourceId = isset($uriVariables['id']) ? (int) $uriVariables['id'] : null;

        if (null === $sourceId) {
            throw new NotFoundHttpException('Missing block group id.');
        }

        $sourceBlockGroup = BlockGroupQuery::create()->findPk($sourceId);

        if (null === $sourceBlockGroup) {
            throw new NotFoundHttpException(\sprintf('BlockGroup #%d not found.', $sourceId));
        }

        $connection = Propel::getWriteConnection(DatabaseConfiguration::THELIA_CONNECTION_NAME);
        $connection->beginTransaction();

        try {
            $newBlockGroup = $sourceBlockGroup->copy();
            $newBlockGroup->save($connection);
            $newBlockGroupId = $newBlockGroup->getId();

            $sourceI18ns = BlockGroupI18nQuery::create()
                ->filterById($sourceId)
                ->find($connection);

            /** @var BlockGroupI18n $sourceI18n */
            foreach ($sourceI18ns as $sourceI18n) {
                $newI18n = $sourceI18n->copy();
                $newI18n->setId($newBlockGroupId);
                $newI18n->save($connection);
            }

            $connection->commit();
        } catch (\Throwable $exception) {
            $connection->rollBack();
            throw $exception;
        }

        $newBlockGroup->reload();

        $postOperation = $context['operation'] ?? $operation;
        $normalizationContext = $postOperation instanceof Post
            ? $postOperation->getNormalizationContext() ?? []
            : [];

        return $this->apiResourcePropelTransformerService->modelToResource(
            resourceClass: BlockGroup::class,
            propelModel: $newBlockGroup,
            context: $normalizationContext,
            withAddon: false,
        );
    }
}
