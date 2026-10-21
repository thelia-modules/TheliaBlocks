<?php

declare(strict_types=1);

/*
 * This file is part of the Thelia package.
 * http://www.thelia.net
 *
 * (c) OpenStudio <info@thelia.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace TheliaBlocks\Tests\Integration;

use TheliaBlocks\TheliaBlocks;
use PHPUnit\Framework\Attributes\Test;
use Propel\Runtime\Connection\ConnectionInterface;
use Propel\Runtime\Propel;
use Thelia\Core\Install\Database;
use Thelia\Model\ModuleConfigQuery;
use Thelia\Model\ModuleQuery;
use Thelia\Test\IntegrationTestCase;

/**
 * Activating the module creates its tables on a fresh install, and never touches the
 * block groups of a shop that already has them.
 *
 * The install script starts with DROP TABLE, which commits implicitly: no test transaction,
 * the tables are restored and the test row removed by hand.
 */
final class ActivationTest extends IntegrationTestCase
{
    private const INSTALL_SCRIPT = __DIR__.'/../../Config/TheliaMain.sql';

    protected bool $useTransaction = false;

    private ConnectionInterface $con;

    private ?int $rowId = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->con = Propel::getWriteConnection('TheliaMain');
    }

    protected function tearDown(): void
    {
        if (!$this->hasTable('block_group')) {
            (new Database($this->con))->insertSql(null, [self::INSTALL_SCRIPT]);
        }

        if (null !== $this->rowId) {
            $this->con->prepare('DELETE FROM `block_group` WHERE `id` = :id')->execute(['id' => $this->rowId]);
        }

        parent::tearDown();
    }

    #[Test]
    public function reactivatingTheModuleKeepsTheExistingRowsEvenWithoutItsInstallFlag(): void
    {
        $this->con->exec("INSERT INTO `block_group` (`slug`, `visible`) VALUES ('activation-test', 0)");
        $this->rowId = (int) $this->con->lastInsertId();

        // A shop whose tables were created without going through the activation: by a schema
        // command, or with its module configuration lost.
        $this->forgetInstallFlag();

        $this->activate();

        self::assertSame(1, (int) $this->con->query('SELECT COUNT(*) FROM `block_group` WHERE `id` = '.$this->rowId)->fetchColumn());
    }

    #[Test]
    public function activatingTheModuleOnAFreshInstallCreatesItsTables(): void
    {
        $tables = $this->installScriptTables();

        $this->forgetInstallFlag();
        $this->con->exec('SET FOREIGN_KEY_CHECKS = 0');
        foreach ($tables as $table) {
            $this->con->exec('DROP TABLE IF EXISTS `'.$table.'`');
        }
        $this->con->exec('SET FOREIGN_KEY_CHECKS = 1');

        $this->activate();

        foreach ($tables as $table) {
            self::assertTrue($this->hasTable($table), $table.' is created.');
        }
    }

    private function activate(): void
    {
        $module = new TheliaBlocks();
        self::assertTrue($module->preActivation($this->con));
        $module->postActivation($this->con);
    }

    private function forgetInstallFlag(): void
    {
        $moduleId = (int) ModuleQuery::create()->findOneByCode('TheliaBlocks')?->getId();
        ModuleConfigQuery::create()->filterByModuleId($moduleId)->filterByName('is_initialized')->delete();
    }

    /**
     * @return list<string>
     */
    private function installScriptTables(): array
    {
        preg_match_all('/^CREATE TABLE `(\w+)`/m', (string) file_get_contents(self::INSTALL_SCRIPT), $matches);

        return $matches[1];
    }

    private function hasTable(string $table): bool
    {
        $statement = $this->con->prepare('SELECT COUNT(*) FROM information_schema.TABLES WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = :table');
        $statement->execute(['table' => $table]);

        return (int) $statement->fetchColumn() > 0;
    }
}
