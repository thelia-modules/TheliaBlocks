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

namespace TheliaBlocks\Api\Resource;

use ApiPlatform\Metadata\ApiFilter;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use Propel\Runtime\Map\TableMap;
use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Bridge\Propel\Attribute\Column;
use Thelia\Api\Bridge\Propel\Attribute\Relation;
use Thelia\Api\Bridge\Propel\Filter\SearchFilter;
use Thelia\Api\Resource\PropelResourceInterface;
use Thelia\Api\Resource\PropelResourceTrait;
use TheliaBlocks\Api\State\ItemBlockGroupUpsertProcessor;
use TheliaBlocks\Model\Map\ItemBlockGroupTableMap;

#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/admin/item_block_groups'),
        new Get(uriTemplate: '/admin/item_block_groups/{id}'),
        new Post(
            uriTemplate: '/admin/item_block_groups',
            processor: ItemBlockGroupUpsertProcessor::class,
        ),
        new Delete(uriTemplate: '/admin/item_block_groups/{id}'),
    ],
    normalizationContext: ['groups' => [self::GROUP_ADMIN_READ]],
    denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
)]
#[ApiFilter(
    filterClass: SearchFilter::class,
    properties: [
        'id',
        'itemType',
        'itemId',
        'blockGroup.id',
    ],
)]
class ItemBlockGroup implements PropelResourceInterface
{
    use PropelResourceTrait;

    public const GROUP_ADMIN_READ = 'admin:item_block_group:read';
    public const GROUP_ADMIN_WRITE = 'admin:item_block_group:write';

    #[Groups([self::GROUP_ADMIN_READ])]
    public ?int $id = null;

    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE])]
    public ?string $itemType = null;

    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE])]
    public ?int $itemId = null;

    #[Relation(targetResource: BlockGroup::class)]
    #[Column(propelSetter: 'setBlockGroupId')]
    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE])]
    public ?BlockGroup $blockGroup = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getItemType(): ?string
    {
        return $this->itemType;
    }

    public function setItemType(?string $itemType): self
    {
        $this->itemType = $itemType;

        return $this;
    }

    public function getItemId(): ?int
    {
        return $this->itemId;
    }

    public function setItemId(?int $itemId): self
    {
        $this->itemId = $itemId;

        return $this;
    }

    public function getBlockGroup(): ?BlockGroup
    {
        return $this->blockGroup;
    }

    public function setBlockGroup(?BlockGroup $blockGroup): self
    {
        $this->blockGroup = $blockGroup;

        return $this;
    }

    public static function getPropelRelatedTableMap(): ?TableMap
    {
        return new ItemBlockGroupTableMap();
    }
}
