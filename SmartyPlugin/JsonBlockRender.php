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

namespace TheliaBlocks\SmartyPlugin;

use TheliaBlocks\Service\JsonBlockService;
use TheliaSmarty\Template\AbstractSmartyPlugin;
use TheliaSmarty\Template\SmartyPluginDescriptor;

class JsonBlockRender extends AbstractSmartyPlugin
{
    /** @var JsonBlockService */
    private $jsonBlockService;

    public function __construct(JsonBlockService $jsonBlockService)
    {
        $this->jsonBlockService = $jsonBlockService;
    }

    public function getPluginDescriptors()
    {
        return [
            new SmartyPluginDescriptor('function', 'json_block_render', $this, 'renderJsonBlock'),
        ];
    }

    public function renderJsonBlock($params, $smarty): string
    {
        if (!isset($params['json'])) {
            return '';
        }

        return $this->jsonBlockService->renderJsonBlocks($params['json']);
    }
}
