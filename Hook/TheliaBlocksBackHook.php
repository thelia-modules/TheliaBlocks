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

namespace TheliaBlocks\Hook;

use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;
use Thelia\Tools\URL;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\TheliaBlocks;

class TheliaBlocksBackHook extends BaseHook
{
    protected $requestStack;

    public function onProductTab(HookRenderBlockEvent $event): void
    {
        $formRedirectUrl = URL::getInstance()
            ->absoluteUrl(
                '/admin/products/update',
                [
                    'product_id' => $event->getArgument('id'),
                    'current_tab' => 'theliablocks_item_details',
                ]
            );
        $this->addTheliaBlocksConfigurationTab($event, 'product', $formRedirectUrl);
    }

    public function onCategoryTab(HookRenderBlockEvent $event): void
    {
        $formRedirectUrl = URL::getInstance()
            ->absoluteUrl(
                '/admin/categories/update',
                [
                    'category_id' => $event->getArgument('id'),
                    'current_tab' => 'theliablocks_item_details',
                ]
            );
        $this->addTheliaBlocksConfigurationTab($event, 'category', $formRedirectUrl);
    }

    public function onContentTab(HookRenderBlockEvent $event): void
    {
        $formRedirectUrl = URL::getInstance()
            ->absoluteUrl(
                '/admin/content/update/'.$event->getArgument('id'),
                [
                    'current_tab' => 'theliablocks_item_details',
                ]
            );
        $this->addTheliaBlocksConfigurationTab($event, 'content', $formRedirectUrl);
    }

    public function onFolderTab(HookRenderBlockEvent $event): void
    {
        $formRedirectUrl = URL::getInstance()
            ->absoluteUrl(
                '/admin/folders/update/'.$event->getArgument('id'),
                [
                    'current_tab' => 'theliablocks_item_details',
                ]
            );
        $this->addTheliaBlocksConfigurationTab($event, 'folder', $formRedirectUrl);
    }

    public function onBlockItemConfiguration(HookRenderEvent $event): void
    {
        $itemId = $event->getArgument('itemId');
        $itemType = $event->getArgument('itemType');
        $groupId = $event->getArgument('groupId');

        $event->add($this->getConfigurationRender($itemType, $itemId, $groupId));
    }

    public function onMainCss(HookRenderEvent $event): void
    {
        $event->add('[block_group_admin_css]');
    }

    public function onMainJs(HookRenderEvent $event): void
    {
        $event->add('[block_group_admin_js]');
    }

    protected function addTheliaBlocksConfigurationTab(HookRenderBlockEvent $event, $itemType, $formRedirectUrl): void
    {
        $itemId = $event->getArgument('id');
        $groupId = $event->getArgument('groupId');

        $event->add(
            [
                'id' => 'theliablocks_item_details',
                'title' => $this->trans('Thelia Blocks', [], TheliaBlocks::DOMAIN_NAME),
                'content' => $this->getConfigurationRender($itemType, $itemId, $groupId),
            ]
        );
    }

    private function getConfigurationRender($itemType, $itemId, $groupId = null)
    {
        TheliaBlocks::$pageNeedTheliaBlockAssets = true;

        $search = BlockGroupQuery::create();
        $search->useItemBlockGroupQuery()
            ->filterByItemType($itemType)
            ->filterByItemId($itemId)
            ->endUse();

        if ($groupId) {
            $search->filterById($groupId);
        }

        $group = $search->findOne();
        dump($group->getId());

        return $this->render(
            'item-configuration.html',
            [
                'itemId' => $itemId,
                'itemType' => $itemType,
                'groupId' => $group->getId() ?? null,
            ]
        );
    }
}
