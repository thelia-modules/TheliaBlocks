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

namespace TheliaBlocks\Loop;

use Propel\Runtime\ActiveQuery\Criteria;
use Thelia\Core\Template\Element\BaseI18nLoop;
use Thelia\Core\Template\Element\LoopResult;
use Thelia\Core\Template\Element\LoopResultRow;
use Thelia\Core\Template\Element\PropelSearchLoopInterface;
use Thelia\Core\Template\Loop\Argument\Argument;
use Thelia\Core\Template\Loop\Argument\ArgumentCollection;
use Thelia\Type\BooleanOrBothType;
use TheliaBlocks\Model\BlockGroupQuery;

/**
 * Class BlockGroup.
 *
 * @method int[]       getId()
 * @method string[]    getSlug()
 * @method string      getItemType()
 * @method int         getItemId()
 * @method bool|string getVisible()
 */
class BlockGroup extends BaseI18nLoop implements PropelSearchLoopInterface
{
    /**
     * {@inheritdoc}
     */
    protected function getArgDefinitions()
    {
        return new ArgumentCollection(
            Argument::createIntListTypeArgument('id'),
            Argument::createAlphaNumStringListTypeArgument('slug'),
            Argument::createAlphaNumStringTypeArgument('item_type'),
            Argument::createIntTypeArgument('item_id'),
            Argument::createBooleanOrBothTypeArgument('visible', 1)
        );
    }

    /**
     * this method returns a Propel ModelCriteria.
     *
     * @return \Propel\Runtime\ActiveQuery\ModelCriteria
     */
    public function buildModelCriteria()
    {
        $search = BlockGroupQuery::create();

        $this->configureI18nProcessing($search, ['TITLE', 'JSON_CONTENT']);

        $id = $this->getId();

        if (null !== $id) {
            $search->filterById($id, Criteria::IN);
        }

        $slug = $this->getSlug();

        if (null !== $slug) {
            $search->filterBySlug($slug, Criteria::IN);
        }

        $itemType = $this->getItemType();
        $itemId = $this->getItemId();

        if (null !== $itemType && null !== $itemId) {
            $search->useItemBlockGroupQuery()
                ->filterByItemType($itemType)
                ->filterByItemId($itemId)
            ->endUse();
        }

        $visible = $this->getVisible();

        if ($visible !== BooleanOrBothType::ANY) {
            $search->filterByVisible($visible ? 1 : 0);
        }

        return $search;
    }

    public function parseResults(LoopResult $loopResult)
    {
        /** @var \TheliaBlocks\Model\BlockGroup $entry */
        foreach ($loopResult->getResultDataCollection() as $entry) {

            if (!$entry->getVirtualColumn('i18n_JSON_CONTENT')) {
                continue;
            }

            $htmlRender = $this->container->get('theliablocks.json.block')->renderJsonBlocks($entry->getVirtualColumn('i18n_JSON_CONTENT'));

            $content = json_decode($entry->getVirtualColumn('i18n_JSON_CONTENT'), true);

            $row = new LoopResultRow($entry);
            $row
                ->set('ID', $entry->getId())
                ->set('SLUG', $entry->getSlug())
                ->set('VISIBLE', $entry->getVisible())
                ->set('TITLE', $entry->getVirtualColumn('i18n_TITLE'))
                ->set('CONTENT', $content)
                ->set('RENDER', $htmlRender)
            ;

            $this->addOutputFields($row, $entry);

            $loopResult->addRow($row);
        }

        return $loopResult;
    }
}
