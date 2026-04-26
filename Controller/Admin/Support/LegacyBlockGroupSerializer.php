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

namespace TheliaBlocks\Controller\Admin\Support;

use TheliaBlocks\Model\BlockGroup;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\ItemBlockGroup;

/**
 * Reproduces the legacy OpenApi JSON shape for BlockGroup so that the
 * `@thelia/blocks-editor` admin bundle keeps working while consumers migrate
 * to the AP4 endpoints.
 */
final class LegacyBlockGroupSerializer
{
    /**
     * @return array<string, mixed>
     */
    public static function toArray(BlockGroup $blockGroup, ?string $locale = null): array
    {
        if (null !== $locale) {
            $blockGroup->setLocale($locale);
        }

        $itemBlockGroups = array_map(
            static fn (ItemBlockGroup $item): array => [
                'id' => $item->getId(),
                'itemType' => $item->getItemType(),
                'itemId' => $item->getItemId(),
                'blockGroupId' => $item->getBlockGroupId(),
            ],
            iterator_to_array($blockGroup->getItemBlockGroups()),
        );

        $locales = array_map(
            static fn (array $row): string => (string) $row['Locale'],
            BlockGroupI18nQuery::create()->filterById($blockGroup->getId())->find()->toArray(),
        );

        return [
            'id' => $blockGroup->getId(),
            'visible' => (bool) $blockGroup->getVisible(),
            'title' => $blockGroup->getTitle(),
            'slug' => $blockGroup->getSlug(),
            'jsonContent' => $blockGroup->getJsonContent(),
            'itemBlockGroups' => $itemBlockGroups,
            'locales' => $locales,
        ];
    }
}
