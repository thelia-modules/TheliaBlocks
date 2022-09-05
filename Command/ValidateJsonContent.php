<?php

namespace TheliaBlocks\Command;

use Propel\Runtime\ActiveQuery\ModelCriteria;
use Propel\Runtime\ActiveRecord\ActiveRecordInterface;
use Symfony\Component\Console\Helper\ProgressBar;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\File;
use Thelia\Command\ContainerAwareCommand;
use Thelia\Model\ConfigQuery;
use Thelia\Model\FolderImage;
use Thelia\Model\LangQuery;
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
    $output->writeln("<fg=blue>Thelia blocks json_content validation started</>");
    $progressBar = new ProgressBar($output, $jsonContents->count());
    $progressBar->start();

    foreach ($jsonContents as $jsonContent) {
      $content = $jsonContent->getJsonContent();

      $decodedJson = json_decode($content, true);

      foreach ($decodedJson as $key => $value) {
        $output->writeln("-");
        $output->writeln($value["type"]["id"]);

        if ($value["type"]["id"] === "blockAccordion") {
          $oldData = $decodedJson[$key]["data"];

          $group = array_map(function ($item) {
            if (isset($item["group"])) {
              $item["content"] = [];
              $item["content"][] = $item["group"];

              unset($item["group"]);

              $item["content"][0]["data"] = ["content" => [$item["content"][0]["data"]]];
            }

            return $item;
          }, $oldData);

          $decodedJson[$key]["data"] = [
            "title" => "",
            "group" => $group
          ];
        }
      }


      $jsonContent->setJsonContent(json_encode($decodedJson));

      $jsonContent->save();

      $progressBar->advance();
    }

    $progressBar->finish();
    $output->writeln("");
    $output->writeln("<info>Thelia blocks json_content validation ended</info>");
    $output->writeln('<bg=blue>============================================================= </>');

    return 1;
  }
}
