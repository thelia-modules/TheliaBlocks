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

use PHPUnit\Framework\Attributes\Test;
use Symfony\Contracts\Translation\TranslatorInterface;
use TheliaBlocks\TheliaBlocks;
use Thelia\Test\IntegrationTestCase;
use Twig\Environment;

/**
 * The name of the module in the back office (top menu entry, tab of the product and category pages)
 * is an English key with a translation in every language file, and not French text used as a key.
 */
final class BackOfficeTranslationTest extends IntegrationTestCase
{
    private const string KEY = 'Content blocks';

    #[Test]
    public function theTopMenuEntryIsTranslatedInEnglishAndInFrench(): void
    {
        $twig = $this->getService(Environment::class);
        $template = (string) file_get_contents(__DIR__.'/../../templates/backOffice/default-twig/hook-in-top-menu-item.html.twig');

        // The locale is given to each filter, so that the render does not depend on the session of a request.
        foreach (['en_US' => 'Content blocks', 'fr_FR' => 'Blocs de contenus'] as $locale => $expected) {
            $localized = str_replace("'theliablocks')", "'theliablocks', '".$locale."')", $template);
            self::assertNotSame($template, $localized);

            $html = $twig->createTemplate($localized)->render([]);

            self::assertStringContainsString('<span class="item-text">'.$expected.'</span>', $html, $locale);
            self::assertStringContainsString('title="'.$expected.'"', $html, $locale);
        }
    }

    #[Test]
    public function theTabOfTheItemPagesIsTranslatedInFrench(): void
    {
        $translator = $this->getService(TranslatorInterface::class);

        self::assertSame('Blocs de contenus', $translator->trans(self::KEY, [], strtolower(TheliaBlocks::DOMAIN_NAME), 'fr_FR'));
        self::assertSame('Content blocks', $translator->trans(self::KEY, [], strtolower(TheliaBlocks::DOMAIN_NAME), 'en_US'));
    }

    #[Test]
    public function everyLanguageFileOfTheModuleTranslatesIt(): void
    {
        $files = glob(__DIR__.'/../../I18n/*.php') ?: [];

        self::assertNotSame([], $files);

        foreach ($files as $file) {
            $messages = require $file;

            self::assertArrayHasKey(self::KEY, $messages, basename($file));
        }
    }

    #[Test]
    public function noTemplateNorHookUsesTheFrenchNameAsAKey(): void
    {
        $sources = [
            __DIR__.'/../../Hook/TheliaBlocksBackHook.php',
            __DIR__.'/../../templates/backOffice/default-twig/hook-in-top-menu-item.html.twig',
        ];

        foreach ($sources as $source) {
            self::assertStringNotContainsString('Blocs de contenus', (string) file_get_contents($source), basename($source));
            self::assertStringContainsString(self::KEY, (string) file_get_contents($source), basename($source));
        }
    }
}
