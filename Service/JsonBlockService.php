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

use TheliaSmarty\Template\SmartyParser;
use Thelia\Log\Tlog;

class JsonBlockService
{
    /** @var SmartyParser */
    private $parser;

    public function __construct(SmartyParser $parser)
    {
        $this->parser = $parser;
    }

    public function renderJsonBlocks($json): string
    {
        $blockRenders = array_map(function ($block) {

            
            try {
                return $this->parser->render('blocks'.DS.$block['type']['id'].'.html', $block);
            } catch (\Throwable $th) {
                Tlog::getInstance()->warning("Block template at path : " . 'blocks'.DS.$block['type']['id'].'.html' . " not found");
                return "";
            }
            
        }, json_decode($json, true));

        return implode(' ', $blockRenders);
    }
}
