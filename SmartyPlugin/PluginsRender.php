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

namespace TheliaBlocks\SmartyPlugin;

use Smarty_Internal_Template;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use TheliaBlocks\Event\TheliaBlocksPluginsListEvent;
use TheliaSmarty\Template\AbstractSmartyPlugin;
use TheliaSmarty\Template\SmartyPluginDescriptor;

class PluginsRender extends AbstractSmartyPlugin
{
    public function __construct(private EventDispatcherInterface $dispatcher)
    {}

    public function getPluginDescriptors(): array
    {
        return [
            new SmartyPluginDescriptor('function', 'plugins_render', $this, 'renderPlugins'),
        ];
    }

    public function renderPlugins(array $params, Smarty_Internal_Template $template): void
    {
        $tbEvent = new TheliaBlocksPluginsListEvent();

        $this->dispatcher->dispatch(
            $tbEvent,
            TheliaBlocksPluginsListEvent::THELIA_BLOCKS_PLUGINS);

        $template->assign('plugins', $tbEvent->getPlugins());
    }
}
