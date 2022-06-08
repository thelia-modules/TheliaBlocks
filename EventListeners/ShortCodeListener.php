<?php

namespace TheliaBlocks\EventListeners;

use ShortCode\Event\ShortCodeEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Core\Template\ParserInterface;
use Thelia\Log\Tlog;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\TheliaBlocks;

class ShortCodeListener implements EventSubscriberInterface
{
    /** @var ParserInterface */
    protected $parser;

    /** @var Request */
    protected $request;

    public function __construct(RequestStack $requestStack, ParserInterface $parser)
    {
        $this->request = $requestStack->getCurrentRequest();
        $this->parser = $parser;
    }

    public static function getSubscribedEvents()
    {
        return [
            TheliaBlocks::BLOCK_GROUP_SHORT_CODE => [['blockGroupShortCode']],
            TheliaBlocks::ADMIN_CSS_SHORTCODE => [['addBlockGroupCss']],
            TheliaBlocks::ADMIN_JS_SHORTCODE => [['addBlockGroupJs']]
        ];
    }

    public function addBlockGroupCss(ShortCodeEvent $event)
    {
        if (TheliaBlocks::$pageNeedTheliaBlockAssets) {
            $event->setResult(
                $this->parser->render("thelia-blocks-css.html")
            );
        }
    }

    public function addBlockGroupJs(ShortCodeEvent $event)
    {
        if (TheliaBlocks::$pageNeedTheliaBlockAssets) {
            $event->setResult(
                $this->parser->render("thelia-blocks-js.html")
            );
        }
    }

    public function blockGroupShortCode(ShortCodeEvent $event)
    {
        $attributes = $event->getAttributes();

        if (!isset($attributes['slug'])) {
            return;
        }

        $blockGroupSlug = $attributes['slug'];
        $blockGroup = BlockGroupQuery::create()
            ->filterBySlug($blockGroupSlug)
            ->findOne();

        if (null === $blockGroup) {
            Tlog::getInstance()->warning("Block group with slug $blockGroupSlug not found");
            return;
        }

        $lang = $this->request->getSession()->getLang();
        $blockGroup->setLocale($lang->getLocale());

        $blocks = json_decode($blockGroup->getJsonContent(), true);

        if (!is_array($blocks)) {
            return;
        }

        // Todo return the raw value of block group
        $raw = isset($attributes['raw']) && (boolean)json_decode(strtolower($attributes['raw'])) === true;

        if ($raw) {
            $event->setResult($this->parser->render("blocks/rawBlockGroup.html", compact('blocks')));
            return;
        }

        $blockRenders = [];
        foreach ($blocks as $block) {
            $blockRenders[] = $this->parser->render("blocks".DS.$block['type']['id'].".html", $block);
        }

        $event->setResult(implode(' ', $blockRenders));
    }
}
