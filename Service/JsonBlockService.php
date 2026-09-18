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

namespace TheliaBlocks\Service;

use Propel\Runtime\ActiveQuery\Criteria;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsAlias;
use Thelia\Core\Content\BlockRendererInterface;
use Thelia\Core\Template\Parser\ParserResolver;
use Thelia\Core\Template\TemplateHelperInterface;
use Thelia\Type\BooleanOrBothType;
use TheliaBlocks\Model\BlockGroupQuery;

#[AsAlias(id: BlockRendererInterface::class, public: true)]
class JsonBlockService implements BlockRendererInterface
{
    public function __construct(
        private ParserResolver $parserResolver,
        private TemplateHelperInterface $templateHelper,
        private LoggerInterface $logger,
    ) {
    }

    /**
     * @throws \Exception
     */
    public function renderJsonBlocks($json): string
    {
        $templateDefintion = $this->templateHelper->getActiveFrontTemplate();
        try {
            $blockRenders = array_map(function ($block) use ($templateDefintion) {
                $templateName = 'blocks'.DS.$block['type']['id'];

                try {
                    // The template path is the theme, not its blocks directory: a parser reads the
                    // template type off the parent directory of the path it is given, and only then
                    // looks at the directories modules contribute. Passing `<theme>/blocks` hides
                    // that type behind the theme name, and the block templates this module ships
                    // for the default theme are never reached.
                    $parser = $this->parserResolver->getParser($templateDefintion->getAbsolutePath(), $templateName);
                    $parser->setTemplateDefinition($templateDefintion, true);

                    return $parser->render($templateName.'.'.$parser->getFileExtension(), $block);
                } catch (\Throwable $th) {
                    // Resolution and rendering are both inside: a block type no template answers
                    // used to escape this block from getParser() and take the whole page down with
                    // it, rather than dropping the one block that cannot be drawn.
                    $this->logger->warning('Block template not found: '.$templateName);

                    return '';
                }
            }, json_decode($json, true, 512, \JSON_THROW_ON_ERROR));
        } catch (\JsonException $e) {
            $this->logger->error('Error while decoding json: '.$e->getMessage());

            return '';
        }

        return implode(' ', $blockRenders);
    }

    public function findAndRenderBlocks(array $filters): array
    {
        $search = BlockGroupQuery::create();

        if (!empty($filters['id'])) {
            $search->filterById($filters['id'], Criteria::IN);
        }

        if (!empty($filters['slug'])) {
            $search->filterBySlug($filters['slug'], Criteria::IN);
        }

        if (!empty($filters['item_id']) && !empty($filters['item_type'])) {
            $search->useItemBlockGroupQuery()
                ->filterByItemType($filters['item_type'])
                ->filterByItemId($filters['item_id'])
                ->endUse();
        }

        $visible = $filters['visible'] ?? 1;
        if ($visible !== BooleanOrBothType::ANY) {
            $search->filterByVisible($visible ? 1 : 0);
        }

        $locale = $filters['locale'] ?? null;
        $rendered = [];

        foreach ($search->find() as $block) {
            if ($locale !== null) {
                $block->setLocale($locale);
            }

            $rendered[] = $this->renderJsonBlocks($block->getJsonContent());
        }

        return $rendered;
    }
}
