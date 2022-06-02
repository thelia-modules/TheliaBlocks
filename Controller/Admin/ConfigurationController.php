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

namespace TheliaBlocks\Controller\Admin;

use Symfony\Component\Routing\Annotation\Route;
use Thelia\Controller\Admin\BaseAdminController;

/**
 * Class ConfigurationController.
 *
 * @author Damien Foulhoux <dfoulhoux@openstudio.fr>
 */

/**
 * @Route("/admin/TheliaBlocks", name="thelia_blocks")
 */
class ConfigurationController extends BaseAdminController
{
    /**
     * @Route("", name="_list", methods="GET")
     */
    public function reactAppListingAction()
    {
        return $this->render('thelia-blocks-configuration');
    }

    /**
     * @Route("/new", name="_new", methods="GET")
     */
    public function reactAppNewAction()
    {
        return $this->render('thelia-blocks-new-configuration');
    }

    /**
     * @Route("/{blockGroupId}", name="_edit", methods="GET", requirements={"blockGroupId"="\d+"})
     */
    public function reactAppEditAction($blockGroupId)
    {
        return $this->render('thelia-blocks-item-configuration', [
            'blockGroupId' => $blockGroupId,
        ]);
    }
}
