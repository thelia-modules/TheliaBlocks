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

use Thelia\Core\Template\TheliaTemplateHelper;
use TheliaSmarty\Template\SmartyParser;

class JsonBlockService
{
    /** @var SmartyParser */
    private $parser;

    /** @var TheliaTemplateHelper */
    private $templateHelper;

    public function __construct(SmartyParser $parser, TheliaTemplateHelper $templateHelper)
    {
        $this->parser = $parser;
        $this->templateHelper = $templateHelper;
    }

    public function renderJsonBlocks($json): string
    {
        $currentTemplateDefinition = $this->parser->getTemplateDefinition();
        $this->parser->setTemplateDefinition($this->templateHelper->getActiveFrontTemplate());
        $blockRenders = array_map(function ($block) {
            return $this->parser->render('blocks'.DS.$block['type']['id'].'.html', $block);
        }, json_decode($json, true));

        $this->parser->setTemplateDefinition($currentTemplateDefinition);

        return implode(' ', $blockRenders);
    }
}
