<?php

namespace TheliaBlocks;

use Propel\Runtime\Connection\ConnectionInterface;
use ShortCode\ShortCode;
use Symfony\Component\DependencyInjection\Loader\Configurator\ServicesConfigurator;
use Thelia\Install\Database;
use Thelia\Module\BaseModule;

class TheliaBlocks extends BaseModule
{
    /** @var string */
    const DOMAIN_NAME = 'TheliaBlocks';

    const BLOCK_GROUP_SHORT_CODE = 'block_group';

    public function preActivation(ConnectionInterface $con = null)
    {
        if (!$this->getConfigValue('is_initialized', false)) {
            $database = new Database($con);

            $database->insertSql(null, array(__DIR__ . '/Config/TheliaMain.sql'));

            $this->setConfigValue('is_initialized', true);
        }

        return true;
    }

    /**
     * Defines how services are loaded in your modules
     *
     * @param ServicesConfigurator $servicesConfigurator
     */
    public static function configureServices(ServicesConfigurator $servicesConfigurator): void
    {
        $servicesConfigurator->load(self::getModuleCode().'\\', __DIR__)
            ->exclude([THELIA_MODULE_DIR . ucfirst(self::getModuleCode()). "/I18n/*"])
            ->autowire(true)
            ->autoconfigure(true);
    }

    public function postActivation(ConnectionInterface $con = null): void
    {
        ShortCode::createNewShortCodeIfNotExist(self::BLOCK_GROUP_SHORT_CODE, self::BLOCK_GROUP_SHORT_CODE);
    }
}
