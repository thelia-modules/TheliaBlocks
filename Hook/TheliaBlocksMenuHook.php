<?php

namespace TheliaBlocks\Hook;

use Thelia\Core\Event\Hook\HookRenderEvent;
use Thelia\Core\Hook\BaseHook;

class TheliaBlocksMenuHook extends BaseHook
{
    public function onMainInTopMenuItems(HookRenderEvent $event)
    {
        $event->add(
            $this->render('in-top-menu-items-page.html', [])
        );
    }
}
