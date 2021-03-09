<?php


namespace TheliaBlocks\EventListeners;


use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use TheliaBlocks\TheliaBlocks;

class ShortCodeListener implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            TheliaBlocks::THELIA_BLOCKS_SHORT_CODE => [['theliaBlocks']]
        ];
    }
}
