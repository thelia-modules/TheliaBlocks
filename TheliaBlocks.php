<?php

namespace TheliaBlocks;

use Propel\Runtime\Connection\ConnectionInterface;
use ShortCode\ShortCode;
use Symfony\Component\DependencyInjection\Loader\Configurator\ServicesConfigurator;
use Symfony\Component\Finder\Finder;
use Thelia\Core\Template\TemplateDefinition;
use Thelia\Install\Database;
use Thelia\Module\BaseModule;

class TheliaBlocks extends BaseModule
{
    /** @var string */
    const DOMAIN_NAME = 'TheliaBlocks';

    const BLOCK_GROUP_SHORT_CODE = 'block_group';

    public function update($currentVersion, $newVersion, ConnectionInterface $con = null): void
    {
        $finder = Finder::create()
            ->name('*.sql')
            ->depth(0)
            ->sortByName()
            ->in(__DIR__.DS.'Config'.DS.'update');

        $database = new Database($con);

        /** @var \SplFileInfo $file */
        foreach ($finder as $file) {
            if (version_compare($currentVersion, $file->getBasename('.sql'), '<')) {
                $database->insertSql(null, [$file->getPathname()]);
            }
        }
    }

    public function preActivation(ConnectionInterface $con = null)
    {
        if (!$this->getConfigValue('is_initialized', false)) {
            $database = new Database($con);

            $database->insertSql(null, [__DIR__.'/Config/TheliaMain.sql']);

            $this->setConfigValue('is_initialized', true);
        }

        return true;
    }

    public function getHooks()
    {
        return [
            [
                'type' => TemplateDefinition::BACK_OFFICE,
                'code' => 'thelia.blocks.plugincss',
                'title' => 'Hook blocks css plugins',
                'description' => 'Hook to add css to thelia blocks plugins',
                'active' => true,
            ],
            [
                'type' => TemplateDefinition::BACK_OFFICE,
                'code' => 'thelia.blocks.plugins',
                'title' => 'Hook blocks plugins',
                'description' => 'Hook to add thelia blocks plugins',
                'active' => true,
            ],
        ];
    }

    /**
     * Defines how services are loaded in your modules.
     */
    public static function configureServices(ServicesConfigurator $servicesConfigurator): void
    {
        $servicesConfigurator->load(self::getModuleCode().'\\', __DIR__)
            ->exclude([THELIA_MODULE_DIR.ucfirst(self::getModuleCode()).'/I18n/*'])
            ->autowire(true)
            ->autoconfigure(true);
    }

    public function postActivation(ConnectionInterface $con = null): void
    {
        ShortCode::createNewShortCodeIfNotExist(self::BLOCK_GROUP_SHORT_CODE, self::BLOCK_GROUP_SHORT_CODE);
    }
}
