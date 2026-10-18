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

use Psr\Log\LoggerInterface;
use ShortCode\Event\ShortCodeEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Thelia\Core\HttpFoundation\Request;
use Thelia\Model\CategoryQuery;
use Thelia\Model\ContentQuery;
use Thelia\Model\FolderQuery;
use Thelia\Model\Lang;
use Thelia\Model\ProductQuery;
use TheliaBlocks\Model\BlockGroupQuery;
use TheliaBlocks\Service\JsonBlockService;
use TheliaBlocks\TheliaBlocks;

class ShortCodeListener implements EventSubscriberInterface
{
    protected ?Request $request = null;

    /**
     * @throws \Exception
     */
    public function __construct(
        protected RequestStack $requestStack,
        protected JsonBlockService $jsonBlockService,
        protected LoggerInterface $logger,
    ) {
        $this->request = $requestStack->getCurrentRequest();
    }

    public static function getSubscribedEvents(): array
    {
        return [
            TheliaBlocks::BLOCK_GROUP_SHORT_CODE => [['blockGroupShortCode']],
            TheliaBlocks::PRODUCT_LINK => [['renderProductLink']],
            TheliaBlocks::CATEGORY_LINK => [['renderCategoryLink']],
            TheliaBlocks::FOLDER_LINK => [['renderFolderLink']],
            TheliaBlocks::CONTENT_LINK => [['renderContentLink']],
        ];
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
            $this->logger->warning("Block group with slug $blockGroupSlug not found");

            return;
        }

        $lang = (null !== $this->request && $this->request->hasSession())
            ? $this->request->getSession()->getLang()
            : Lang::getDefaultLanguage();
        $blockGroup->setLocale($lang->getLocale());

        if (!\is_array(json_decode($blockGroup->getJsonContent(), true))) {
            return;
        }

        $event->setResult($this->jsonBlockService->renderJsonBlocks($blockGroup->getJsonContent()));
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
