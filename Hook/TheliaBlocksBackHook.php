<?php

namespace TheliaBlocks\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use TheliaBlocks\TheliaBlocks;
use Thelia\Core\Hook\BaseHook;
use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Tools\URL;
use TheliaBlocks\Model\BlockGroupQuery;

class TheliaBlocksBackHook extends BaseHook
{
    protected $requestStack;
    protected $productDataImageService;

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

    public function onBlockItemConfiguration(HookRenderEvent $event)
    {
        $itemId = $event->getArgument('itemId');
        $itemType = $event->getArgument('itemType');

        $event->add($this->getConfigurationRender($itemType, $itemId));
    }

    protected function addTheliaBlocksConfigurationTab(HookRenderBlockEvent $event, $itemType, $formRedirectUrl): void
    {
        $itemId = $event->getArgument('id');

        $event->add(
            [
                'id' => 'theliablocks_item_details',
                'title' => $this->trans('Thelia Blocks', [], TheliaBlocks::DOMAIN_NAME),
                'content' => $this->getConfigurationRender($itemType, $itemId)
            ]
        );
    }

    private function getConfigurationRender($itemType, $itemId)
    {
        $search = BlockGroupQuery::create();
        $search->useItemBlockGroupQuery()
            ->filterByItemType($itemType)
            ->filterByItemId($itemId)
            ->endUse();

        $group = $search->findOne();

        return $this->render(
            'thelia-blocks-item-configuration.html',
            [
                'itemId' => $itemId,
                'itemType' => $itemType,
                'groupId' => $group ? $group->getId() : null
            ]
        );
    }
}
