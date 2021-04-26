<?php

namespace TheliaBlocks\Controller;

use TheliaBlocks\TheliaBlocks;
use Thelia\Controller\Admin\BaseAdminController;

/**
 * Class ConfigurationController
 * @package TheliaBlocks\Controller
 * @author Damien Foulhoux <dfoulhoux@openstudio.fr>
 */
class ConfigurationController extends BaseAdminController
{
    public function reactAppAction()
    {
        return $this->render("thelia-blocks-configuration");
    }
}
