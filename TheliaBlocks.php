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
    public const DOMAIN_NAME = 'TheliaBlocks';

    public const BLOCK_GROUP_SHORT_CODE = 'block_group';



    public static bool $pageNeedTheliaBlockAssets = false;

    public const ADMIN_CSS_SHORTCODE = 'block_group_admin_css';

    public const ADMIN_JS_SHORTCODE = 'block_group_admin_js';

    public const CATEGORY_LINK = 'category_link';
    public const PRODUCT_LINK = 'product_link';
    public const FOLDER_LINK = 'folder_link';
    public const CONTENT_LINK = 'content_link';

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
            [
                'type' => TemplateDefinition::BACK_OFFICE,
                'code' => 'thelia.blocks.item.configuration',
                'title' => 'Hook blocks item configuration',
                'description' => 'Hook to add a configuration page for any items',
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
        ShortCode::createNewShortCodeIfNotExist(self::ADMIN_CSS_SHORTCODE, self::ADMIN_CSS_SHORTCODE);
        ShortCode::createNewShortCodeIfNotExist(self::ADMIN_JS_SHORTCODE, self::ADMIN_JS_SHORTCODE);
        ShortCode::createNewShortCodeIfNotExist(self::CATEGORY_LINK, self::CATEGORY_LINK);
        ShortCode::createNewShortCodeIfNotExist(self::PRODUCT_LINK, self::PRODUCT_LINK);
        ShortCode::createNewShortCodeIfNotExist(self::FOLDER_LINK, self::FOLDER_LINK);
        ShortCode::createNewShortCodeIfNotExist(self::CONTENT_LINK, self::CONTENT_LINK);
    }
}
