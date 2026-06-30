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
use Thelia\Core\Template\Parser\ParserResolver;
use Thelia\Core\Template\ParserInterface;
use Thelia\Core\Template\TemplateDefinition;
use Thelia\Core\Template\TheliaTemplateHelper;
use Thelia\Log\Tlog;
use Thelia\Model\CategoryQuery;
use Thelia\Model\ContentQuery;
use Thelia\Model\FolderQuery;
use Thelia\Model\Lang;
use Thelia\Model\ProductQuery;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\TheliaBlocks;

class ShortCodeListener implements EventSubscriberInterface
{
    protected ?Request $request = null;
    protected ?ParserInterface $parser = null;

    /**
     * @throws \Exception
     */
    public function __construct(
        protected RequestStack $requestStack,
        protected ParserResolver $parserResolver
    ) {
        $this->request = $requestStack->getCurrentRequest();
        $this->parser = $this->parserResolver->getCurrentParser();
    }

    public static function getSubscribedEvents(): array
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
        if (TheliaBlocks::$pageNeedTheliaBlockAssets && null !== ($parser = $this->resolveBackOfficeParser())) {
            $event->setResult(
                $parser->render('thelia-blocks-css.html')
            );
        }
    }

    public function addBlockGroupJs(ShortCodeEvent $event): void
    {
        if (TheliaBlocks::$pageNeedTheliaBlockAssets && null !== ($parser = $this->resolveBackOfficeParser())) {
            $event->setResult(
                $parser->render('thelia-blocks-js.html')
            );
        }
    }

    /**
     * Resolve a parser able to render the module's Smarty back-office asset
     * templates (thelia-blocks-css.html / thelia-blocks-js.html).
     *
     * In an all-Smarty back-office the current parser already is a configured
     * Smarty parser. In a Twig back-office no Thelia parser is "current"
     * (controllers render through the native Twig environment), so fall back to
     * the Smarty parser pointed at the default back-office template, where the
     * module templates are registered.
     */
    private function resolveBackOfficeParser(): ?ParserInterface
    {
        if ($this->parser instanceof ParserInterface && 'html' === $this->parser->getFileExtension()) {
            return $this->parser;
        }

        foreach ($this->parserResolver->getParsers() as $parser) {
            if ('html' === $parser->getFileExtension()) {
                $parser->setTemplateDefinition(
                    new TemplateDefinition('default', TemplateDefinition::BACK_OFFICE),
                    true
                );

                return $parser;
            }
        }

        return null;
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

        $lang = (null !== $this->request && $this->request->hasSession())
            ? $this->request->getSession()->getLang()
            : Lang::getDefaultLanguage();
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
            $blockRenders[] = $this->parser->render('blocks' . DS . $block['type']['id'] . '.html', $block);
        }

        $event->setResult(implode(' ', $blockRenders));
    }

    public function renderProductLink(ShortCodeEvent $event): void
    {
        $event->setResult($this->generateLink(ProductQuery::create(), $event));
    }

    public function renderCategoryLink(ShortCodeEvent $event): void
    {
        $event->setResult($this->generateLink(CategoryQuery::create(), $event));
    }

    public function renderContentLink(ShortCodeEvent $event): void
    {
        $event->setResult($this->generateLink(ContentQuery::create(), $event));
    }

    public function renderFolderLink(ShortCodeEvent $event): void
    {
        $event->setResult($this->generateLink(FolderQuery::create(), $event));
    }

    public function generateLink(CategoryQuery|ProductQuery|ContentQuery|FolderQuery $query, ShortCodeEvent $event)
    {
        $attributes = $event->getAttributes();
        $id = $attributes['id'];
        $locale = (null !== $this->request && $this->request->hasSession())
            ? $this->request->getSession()->getLang()->getLocale()
            : Lang::getDefaultLanguage()->getLocale();

        $item = $query
            ->filterById($id)
            ->findOne();

        $url = $item->getUrl($locale);
        $title = $attributes['title'] ?? $item->getTitle();
        $link = $this->renderLinkTemplate($url, $title);

        return $link;
    }

    private function renderLinkTemplate(string $url, string $title)
    {
        return '<a href="' . $url . '">' . $title . '</a>';
    }
}
