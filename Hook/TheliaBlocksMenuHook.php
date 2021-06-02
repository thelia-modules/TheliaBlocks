<?php

namespace TheliaBlocks\Hook;

use Thelia\Core\Event\Hook\HookRenderBlockEvent;
use Thelia\Core\Hook\BaseHook;
use Thelia\Tools\URL;
use TheliaBlocks\TheliaBlocks;

class TheliaBlocksMenuHook extends BaseHook
{
    public function onMainTopMenuTools(HookRenderBlockEvent $event): void
    {
        $event->add([
            'url' => URL::getInstance()->absoluteUrl('/admin/TheliaBlocks'),
            'title' => $this->trans('Thelia Blocks', [], TheliaBlocks::DOMAIN_NAME),
        ]);
    }
}
