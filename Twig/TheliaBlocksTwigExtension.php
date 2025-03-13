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

namespace TheliaBlocks\Twig;

use TheliaBlocks\Service\JsonBlockService;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TheliaBlocksTwigExtension extends AbstractExtension
{
    public function __construct(
        private JsonBlockService $jsonBlockService,
    ) {
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('getTheliaBLocksRenderedContent', [$this, 'getTheliaBLocksRenderedContent']),
        ];
    }

    public function getTheliaBLocksRenderedContent(string $content)
    {
        if ($content) {
            $htmlRender = $this->jsonBlockService->renderJsonBlocks($content);

            return $htmlRender;
        }
    }
}
