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

namespace TheliaBlocks\EventListeners;

use ShortCode\Event\ShortCodeEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Core\Template\ParserInterface;
use Thelia\Core\Template\TheliaTemplateHelper;
use Thelia\Log\Tlog;
use Thelia\Model\CategoryQuery;
use Thelia\Model\ContentQuery;
use Thelia\Model\FolderQuery;
use Thelia\Model\ProductQuery;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\TheliaBlocks;

class ShortCodeListener implements EventSubscriberInterface
{
    /** @var ParserInterface */
    protected $parser;

    /** @var Request */
    protected $request;

    /** @var TheliaTemplateHelper */
    private $templateHelper;

    public function __construct(RequestStack $requestStack, ParserInterface $parser, TheliaTemplateHelper $templateHelper)
    {
        $this->request = $requestStack->getCurrentRequest();
        $this->parser = $parser;
        $this->templateHelper = $templateHelper;
    }

    public static function getSubscribedEvents()
    {
        return [
            TheliaBlocks::BLOCK_GROUP_SHORT_CODE => [['blockGroupShortCode']],
            TheliaBlocks::ADMIN_CSS_SHORTCODE => [['addBlockGroupCss']],
            TheliaBlocks::ADMIN_JS_SHORTCODE => [['addBlockGroupJs']],
            TheliaBlocks::PRODUCT_LINK => [['renderProductLink']],
            TheliaBlocks::CATEGORY_LINK => [['renderCategoryLink']],
            TheliaBlocks::FOLDER_LINK => [['renderFolderLink']],
            TheliaBlocks::CONTENT_LINK => [['renderContentLink']],
        ];
    }

    public function addBlockGroupCss(ShortCodeEvent $event): void
    {
        if (TheliaBlocks::$pageNeedTheliaBlockAssets) {
            $event->setResult(
                $this->parser->render('thelia-blocks-css.html')
            );
        }
    }

    public function addBlockGroupJs(ShortCodeEvent $event): void
    {
        if (TheliaBlocks::$pageNeedTheliaBlockAssets) {
            $event->setResult(
                $this->parser->render('thelia-blocks-js.html')
            );
        }
    }

    public function blockGroupShortCode(ShortCodeEvent $event): void
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

        if (!\is_array($blocks)) {
            return;
        }

        // Todo return the raw value of block group
        $raw = isset($attributes['raw']) && (bool) json_decode(strtolower($attributes['raw'])) === true;

        if ($raw) {
            $event->setResult($this->parser->render('blocks/rawBlockGroup.html', compact('blocks')));

            return;
        }

        $blockRenders = [];
        foreach ($blocks as $block) {
            $blockRenders[] = $this->parser->render('blocks'.DS.$block['type']['id'].'.html', $block);
        }

        $event->setResult(implode(' ', $blockRenders));
    }

    public function renderProductLink(ShortCodeEvent $event): void
    {
        $attributes = $event->getAttributes();
        $id = $attributes['id'];
        $locale = $this->request->getSession()->getLang()->getLocale();

        $item = ProductQuery::create()
        ->filterById($id)
        ->findOne();

        $url = $item->getUrl($locale);
        $title = $attributes['title'] ?? $item->getTitle();
        $link = $this->renderLink($url, $title);

        $event->setResult($link);
    }

    public function renderCategoryLink(ShortCodeEvent $event): void
    {
        $attributes = $event->getAttributes();
        $id = $attributes['id'];
        $locale = $this->request->getSession()->getLang()->getLocale();

        $item = CategoryQuery::create()
        ->filterById($id)
        ->findOne();

        $url = $item->getUrl($locale);
        $title = $attributes['title'] ?? $item->getTitle();
        $link = $this->renderLink($url, $title);

        $event->setResult($link, $title);
    }

    public function renderContentLink(ShortCodeEvent $event): void
    {
        $attributes = $event->getAttributes();
        $id = $attributes['id'];
        $locale = $this->request->getSession()->getLang()->getLocale();

        $item = ContentQuery::create()
        ->filterById($id)
        ->findOne();

        $url = $item->getUrl($locale);
        $title = $attributes['title'] ?? $item->getTitle();
        $link = $this->renderLink($url, $title);

        $event->setResult($link);
    }

    public function renderFolderLink(ShortCodeEvent $event): void
    {
        $attributes = $event->getAttributes();
        $id = $attributes['id'];
        $locale = $this->request->getSession()->getLang()->getLocale();

        $item = FolderQuery::create()
        ->filterById($id)
        ->findOne();

        $url = $item->getUrl($locale);
        $title = $attributes['title'] ?? $item->getTitle();
        $link = $this->renderLink($url, $title);

        $event->setResult($link);
    }

    private function renderLink(string $url, string $title)
    {
        return '<a href="'.$url.'">'.$title.'</a>';
    }
}
