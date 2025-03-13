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

use Thelia\Core\Template\Parser\ParserResolver;
use Thelia\Core\Template\TemplateHelperInterface;
use Thelia\Log\Tlog;
use TwigEngine\Template\TwigParser;

class JsonBlockService
{
    public function __construct(
        private ParserResolver $parserResolver,
        private TemplateHelperInterface $templateHelper,
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
                $parser = $this->parserResolver->getParser($templateDefintion->getAbsolutePath().DS.'blocks', $block['type']['id']);
                $parser->setTemplateDefinition($templateDefintion, true);
                try {
                    if ($parser instanceof TwigParser) {
                        return $parser->renderString('blocks'.DS.$block['type']['id'].'.'.$parser->getFileExtension(), $block);
                    }

                    return $parser->render('blocks'.DS.$block['type']['id'].'.'.$parser->getFileExtension(), $block);
                } catch (\Throwable $th) {
                    Tlog::getInstance()->warning('Block template at path : blocks'.DS.$block['type']['id'].'.html not found');

                    return '';
                }
            }, json_decode($json, true, 512, \JSON_THROW_ON_ERROR));
        } catch (\JsonException $e) {
            Tlog::getInstance()->error('Error while decoding json : '.$e->getMessage());

            return '';
        }

        return implode(' ', $blockRenders);
    }
}
