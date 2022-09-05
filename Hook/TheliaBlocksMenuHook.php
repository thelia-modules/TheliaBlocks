<?php

namespace TheliaBlocks\Hook;

use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;
use Thelia\Tools\URL;
use TheliaBlocks\TheliaBlocks;

class TheliaBlocksMenuHook extends BaseHook
{
    public function onMainInTopMenuItems(HookRenderEvent $event): void
    {
        $event->add(
            $this->render('hook-in-top-menu-item.html', $event->getTemplateVars())
        );
    }
}
