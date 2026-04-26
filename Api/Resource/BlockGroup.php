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
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use Propel\Runtime\Map\TableMap;
use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Bridge\Propel\Filter\BooleanFilter;
use Thelia\Api\Bridge\Propel\Filter\OrderFilter;
use Thelia\Api\Bridge\Propel\Filter\SearchFilter;
use Thelia\Api\Resource\AbstractTranslatableResource;
use Thelia\Api\Resource\I18nCollection;
use TheliaBlocks\Api\State\BlockGroupDuplicateProcessor;
use TheliaBlocks\Model\Map\BlockGroupTableMap;

#[ApiResource(
    operations: [
        new Post(uriTemplate: '/admin/block_groups'),
        new GetCollection(uriTemplate: '/admin/block_groups'),
        new Get(
            uriTemplate: '/admin/block_groups/{id}',
            normalizationContext: ['groups' => [self::GROUP_ADMIN_READ, self::GROUP_ADMIN_READ_SINGLE]],
        ),
        new Patch(uriTemplate: '/admin/block_groups/{id}'),
        new Delete(uriTemplate: '/admin/block_groups/{id}'),
        new Post(
            uriTemplate: '/admin/block_groups/{id}/duplicate',
            processor: BlockGroupDuplicateProcessor::class,
            read: false,
            validate: false,
        ),
    ],
    normalizationContext: ['groups' => [self::GROUP_ADMIN_READ]],
    denormalizationContext: ['groups' => [self::GROUP_ADMIN_WRITE]],
)]
#[ApiResource(
    operations: [
        new GetCollection(uriTemplate: '/front/block_groups'),
        new Get(
            uriTemplate: '/front/block_groups/{id}',
            normalizationContext: ['groups' => [self::GROUP_FRONT_READ, self::GROUP_FRONT_READ_SINGLE]],
        ),
    ],
    normalizationContext: ['groups' => [self::GROUP_FRONT_READ]],
)]
#[ApiFilter(
    filterClass: SearchFilter::class,
    properties: [
        'id',
        'slug',
        'title',
    ],
)]
#[ApiFilter(
    filterClass: BooleanFilter::class,
    properties: [
        'visible',
    ],
)]
#[ApiFilter(
    filterClass: OrderFilter::class,
    properties: [
        'id',
    ],
)]
class BlockGroup extends AbstractTranslatableResource
{
    public const GROUP_ADMIN_READ = 'admin:block_group:read';
    public const GROUP_ADMIN_READ_SINGLE = 'admin:block_group:read:single';
    public const GROUP_ADMIN_WRITE = 'admin:block_group:write';
    public const GROUP_FRONT_READ = 'front:block_group:read';
    public const GROUP_FRONT_READ_SINGLE = 'front:block_group:read:single';

    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_FRONT_READ])]
    public ?int $id = null;

    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE, self::GROUP_FRONT_READ])]
    public bool $visible = false;

    #[Groups([self::GROUP_ADMIN_READ, self::GROUP_ADMIN_WRITE, self::GROUP_FRONT_READ])]
    public ?string $slug = null;

    #[Groups([
        self::GROUP_ADMIN_READ,
        self::GROUP_ADMIN_WRITE,
        self::GROUP_FRONT_READ,
    ])]
    public I18nCollection $i18ns;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function isVisible(): bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    public function getSlug(): ?string
    {
        return $this->slug;
    }

    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    public static function getPropelRelatedTableMap(): ?TableMap
    {
        return new BlockGroupTableMap();
    }

    public static function getI18nResourceClass(): string
    {
        return BlockGroupI18n::class;
    }
}
