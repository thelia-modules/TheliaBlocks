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

namespace TheliaBlocks\Controller\Front;

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Symfony\Component\Routing\Annotation\Route;
use Thelia\Controller\Front\BaseFrontController;
use Thelia\Core\HttpFoundation\Request;

/**
 * @Route("/TheliaBlocks", name="thelia_blocks_front")
 */
class PreviewGroupController extends BaseFrontController
{
    /**
     * @Route("/preview", name="_preview", methods="POST")
     */
    public function previewBlockGroup(Request $request)
    {
        return $this->render('thelia-blocks-preview', [
            'json' => $request->get('json'),
        ]);
    }
}
