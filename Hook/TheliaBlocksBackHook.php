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
use Thelia\Model\LangQuery;
use Thelia\Tools\URL;
use TheliaBlocks\Event\TheliaBlocksPluginsListEvent;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\TheliaBlocks;

class TheliaBlocksBackHook extends BaseHook
{
    private bool $editorCssRendered = false;

    public static function getSubscribedHooks(): array
    {
        return [
            'thelia.blocks.item.configuration' => [
                ['type' => 'back', 'method' => 'onBlockItemConfiguration'],
            ],
            'product.tab' => [
                ['type' => 'back', 'method' => 'onProductTab'],
            ],
            'category.tab' => [
                ['type' => 'back', 'method' => 'onCategoryTab'],
            ],
            'content.tab' => [
                ['type' => 'back', 'method' => 'onContentTab'],
            ],
            'brand.tab' => [
                ['type' => 'back', 'method' => 'onBrandTab'],
            ],
            'folder.tab' => [
                ['type' => 'back', 'method' => 'onFolderTab'],
            ],
            // Not "dealer.tab": the Dealer module named its own tab hook `dealer.additional`,
            // and it has carried that name since the module shipped.
            'dealer.additional' => [
                ['type' => 'back', 'method' => 'onDealerTab'],
            ],
            'main.head-css' => [
                ['type' => 'back', 'method' => 'onMainCss'],
            ],
            'main.footer-js' => [
                ['type' => 'back', 'method' => 'onMainJs'],
            ],
        ];
    }

    public function onProductTab(HookRenderBlockEvent $event): void
    {
        $this->addTheliaBlocksConfigurationTab($event, 'product');
    }

    public function onCategoryTab(HookRenderBlockEvent $event): void
    {
        $this->addTheliaBlocksConfigurationTab($event, 'category');
    }

    public function onBrandTab(HookRenderBlockEvent $event): void
    {
        $this->addTheliaBlocksConfigurationTab($event, 'brand', $event->getArgument('brand_id'));
    }

    public function onContentTab(HookRenderBlockEvent $event): void
    {
        $this->addTheliaBlocksConfigurationTab($event, 'content');
    }

    public function onFolderTab(HookRenderBlockEvent $event): void
    {
        $this->addTheliaBlocksConfigurationTab($event, 'folder');
    }

    /**
     * The Dealer edit page names the store `dealer`, not `id` — its Smarty template passes that
     * one alone — so the item id is read from it rather than left to the `id` fallback.
     */
    public function onDealerTab(HookRenderBlockEvent $event): void
    {
        $this->addTheliaBlocksConfigurationTab($event, 'dealer', $event->getArgument('dealer'));
    }

    public function onBlockItemConfiguration(HookRenderEvent $event): void
    {
        $itemId = $event->getArgument('itemId');
        $itemType = $event->getArgument('itemType');
        $groupId = $event->getArgument('groupId');

        $event->add($this->getConfigurationRender($itemType, $itemId, $groupId));
    }

    /**
     * The editor assets are only worth loading on the pages that mount it. A page mounting it
     * from a tab hook raises the flag while its body renders, hence after this hook: its
     * stylesheets are then added along with the footer assets.
     */
    public function onMainCss(HookRenderEvent $event): void
    {
        if (!TheliaBlocks::$pageNeedTheliaBlockAssets) {
            return;
        }

        $event->add($this->renderEditorCss());
    }

    public function onMainJs(HookRenderEvent $event): void
    {
        if (!TheliaBlocks::$pageNeedTheliaBlockAssets) {
            return;
        }

        $event->add($this->renderEditorCss());
        $event->add(
            $this->render(
                'thelia-blocks-js.html.twig',
                [
                    'apiRoot' => URL::getInstance()->absoluteUrl('/open_api'),
                    'locales' => $this->getEditorLocales(),
                    'plugins' => $this->getEditorPlugins(),
                ]
            )
        );
    }

    private function renderEditorCss(): string
    {
        if ($this->editorCssRendered) {
            return '';
        }

        $this->editorCssRendered = true;

        return $this->render('thelia-blocks-css.html.twig', ['plugins' => $this->getEditorPlugins()]);
    }

    /**
     * Languages the editor offers to translate a block group into, in the shape its bundle expects.
     *
     * @return list<array{id: int, title: string, code: string, active: bool}>
     */
    private function getEditorLocales(): array
    {
        $locales = [];

        foreach (LangQuery::create()->filterByActive(true)->orderByPosition()->find() as $lang) {
            $locales[] = [
                'id' => $lang->getId(),
                'title' => $lang->getTitle(),
                'code' => $lang->getLocale(),
                'active' => (bool) $lang->getByDefault(),
            ];
        }

        return $locales;
    }

    /**
     * Assets of the modules extending the editor, keyed by module code.
     *
     * @return array<string, array<string, string>>
     */
    private function getEditorPlugins(): array
    {
        $event = new TheliaBlocksPluginsListEvent();

        $this->dispatcher?->dispatch($event, TheliaBlocksPluginsListEvent::THELIA_BLOCKS_PLUGINS);

        return $event->getPlugins() ?? [];
    }

    protected function addTheliaBlocksConfigurationTab(HookRenderBlockEvent $event, $itemType, $itemId = null): void
    {
        if (null === $itemId) {
            $itemId = $event->getArgument('id');
        }
        $groupId = $event->getArgument('groupId');

        $event->add(
            [
                'id' => 'theliablocks_item_details',
                'title' => $this->trans('Blocs de contenus', [], TheliaBlocks::DOMAIN_NAME),
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

        return $this->render(
            'item-configuration.html.twig',
            [
                'itemId' => $itemId,
                'itemType' => $itemType,
                'groupId' => $group?->getId(),
            ]
        );
    }
}
