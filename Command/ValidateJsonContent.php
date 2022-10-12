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

namespace TheliaBlocks\Command;

use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Thelia\Command\ContainerAwareCommand;
use TheliaBlocks\Model\BlockGroupI18nQuery;

class ValidateJsonContent extends ContainerAwareCommand
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function configure(): void
    {
        $this
            ->setName('thelia_blocks:blocks:validate')
            ->setDescription('Validate & update json_content structure');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $jsonContents = BlockGroupI18nQuery::create()->find();

        $output->writeln('<bg=blue>============================================================= </>');
        $output->writeln('<fg=blue>Thelia blocks json_content validation started</>');
        $progressBar = new ProgressBar($output, $jsonContents->count());
        $progressBar->start();

        foreach ($jsonContents as $jsonContent) {
            $content = $jsonContent->getJsonContent();

            $decodedJson = json_decode($content, true);

            foreach ($decodedJson as $key => $value) {
                if ($value['type']['id'] === 'blockAccordion') {
                    $oldData = $decodedJson[$key]['data'];

                    $group = array_map(function ($item) {
                        if (isset($item['group'])) {
                            $item['content'] = [];
                            $item['content'][] = $item['group'];

                            unset($item['group']);

                            $item['content'][0]['data'] = ['content' => [$item['content'][0]['data']]];
                        }

                        return $item;
                    }, $oldData);

                    $decodedJson[$key]['data'] = [
                        'title' => '',
                        'group' => $group,
                    ];
                }

                if ($value['type']['id'] === 'blockGroup') {
                    $oldData = $decodedJson[$key]['data'];

                    $itemsFromData = array_map(function ($item) {
                        return $item;
                    }, $oldData);

                    $decodedJson[$key]['data'] = [
                        'content' => [$itemsFromData],
                    ];
                }

                if ($value['type']['id'] === 'multiColumns') {
                    $oldData = $decodedJson[$key]['data'];

                    $itemsFromGroupsInCol = array_map(function ($item) {
                        if (isset($item['group'])) {
                            return $item['group']['data'];
                        }

                        return $item;
                    }, $oldData);

                    $oldData = $itemsFromGroupsInCol;

                    $decodedJson[$key]['title'] = [
                        'default' => \count($itemsFromGroupsInCol) . ' Columns',
                        'fr' => \count($itemsFromGroupsInCol) . ' Colonnes',
                        'en' => \count($itemsFromGroupsInCol) . ' Columns',
                        'es' => \count($itemsFromGroupsInCol) . ' Columnas',
                        'it' => \count($itemsFromGroupsInCol) . ' Colonne',
                    ];

                    $decodedJson[$key]['data'] = $oldData;
                }
            }

            $jsonContent->setJsonContent(json_encode($decodedJson));

            $jsonContent->save();

            $progressBar->advance();
        }

        $progressBar->finish();
        $output->writeln('');
        $output->writeln('<info>Thelia blocks json_content validation ended</info>');
        $output->writeln('<bg=blue>============================================================= </>');

        return 1;
    }
}
