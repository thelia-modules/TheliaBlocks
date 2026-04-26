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
use ApiPlatform\State\ProcessorInterface;
use Thelia\Api\Bridge\Propel\State\PropelPersistProcessor;
use TheliaBlocks\Api\Resource\ItemBlockGroup;
use TheliaBlocks\Model\ItemBlockGroupQuery;

/**
 * Upserts an ItemBlockGroup: ensures only one row exists per (itemType, itemId)
 * by removing any prior association before delegating persistence to the standard
 * Propel processor.
 *
 * Endpoint: POST /api/admin/item_block_groups
 */
final readonly class ItemBlockGroupUpsertProcessor implements ProcessorInterface
{
    public function __construct(
        private PropelPersistProcessor $propelPersistProcessor,
    ) {
    }

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = []): ItemBlockGroup
    {
        if (!$data instanceof ItemBlockGroup) {
            throw new \InvalidArgumentException(\sprintf('Expected %s, got %s.', ItemBlockGroup::class, get_debug_type($data)));
        }

        if (null !== $data->getItemType() && null !== $data->getItemId()) {
            $existing = ItemBlockGroupQuery::create()
                ->filterByItemType($data->getItemType())
                ->filterByItemId($data->getItemId())
                ->findOne();

            $existing?->delete();
        }

        return $this->propelPersistProcessor->process($data, $operation, $uriVariables, $context);
    }
}
