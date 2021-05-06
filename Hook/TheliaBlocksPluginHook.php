<?php

namespace TheliaBlocks\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;

class TheliaBlocksPluginHook extends BaseHook
{
    public function onPlugins(HookRenderEvent $event)
    {
        $event->add(
            $this->render('import-plugins.html', [])
        );
    }
}
