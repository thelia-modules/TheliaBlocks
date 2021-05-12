<?php

namespace TheliaBlocks\Model;

use Propel\Runtime\Connection\ConnectionInterface;
use TheliaBlocks\Model\Base\BlockGroup as BaseBlockGroup;
use TheliaBlocks\Model\Event\BlockGroupEvent;

/**
 * Skeleton subclass for representing a row from the 'block_group' table.
 *
 *
 *
 * You should add additional methods to this class to meet the
 * application requirements.  This class will only be generated as
 * long as it does not already exist in the output directory.
 */
class BlockGroup extends BaseBlockGroup
{
    const SLUG_MAX_LENGTH = 45;
    /**
     * Code to be run before inserting to database
     * @param  ConnectionInterface $con
     * @return boolean
     */
    public function preInsert(ConnectionInterface $con = null)
    {
        if (null === $this->getSlug()) {
            $this->setSlug($this->slugify($this->getTitle()));
        }

        $this->setSlug($this->findUnusedSlug(substr($this->getSlug(),0,self::SLUG_MAX_LENGTH)));
        return parent::preInsert($con);
    }

    protected function findUnusedSlug($baseSlug, $iteration = 0)
    {
        $iteratedSlug = $baseSlug;
        if ($iteration !== 0) {
            $iterationSuffix = "_".$iteration;
            $iteratedSlug =  substr($baseSlug,0, self::SLUG_MAX_LENGTH - mb_strlen($iterationSuffix)).$iterationSuffix;
        }
        if (null === BlockGroupQuery::create()->filterBySlug($iteratedSlug)->findOne()) {
            return $iteratedSlug;
        }

        $iteration++;

        return $this->findUnusedSlug($baseSlug, $iteration);
    }

    protected function slugify($text)
    {
        $table = array(
            'Š'=>'S', 'š'=>'s', 'Đ'=>'Dj', 'đ'=>'dj', 'Ž'=>'Z', 'ž'=>'z', 'Č'=>'C', 'č'=>'c', 'Ć'=>'C', 'ć'=>'c',
            'À'=>'A', 'Á'=>'A', 'Â'=>'A', 'Ã'=>'A', 'Ä'=>'A', 'Å'=>'A', 'Æ'=>'A', 'Ç'=>'C', 'È'=>'E', 'É'=>'E',
            'Ê'=>'E', 'Ë'=>'E', 'Ì'=>'I', 'Í'=>'I', 'Î'=>'I', 'Ï'=>'I', 'Ñ'=>'N', 'Ò'=>'O', 'Ó'=>'O', 'Ô'=>'O',
            'Õ'=>'O', 'Ö'=>'O', 'Ø'=>'O', 'Ù'=>'U', 'Ú'=>'U', 'Û'=>'U', 'Ü'=>'U', 'Ý'=>'Y', 'Þ'=>'B', 'ß'=>'Ss',
            'à'=>'a', 'á'=>'a', 'â'=>'a', 'ã'=>'a', 'ä'=>'a', 'å'=>'a', 'æ'=>'a', 'ç'=>'c', 'è'=>'e', 'é'=>'e',
            'ê'=>'e', 'ë'=>'e', 'ì'=>'i', 'í'=>'i', 'î'=>'i', 'ï'=>'i', 'ð'=>'o', 'ñ'=>'n', 'ò'=>'o', 'ó'=>'o',
            'ô'=>'o', 'õ'=>'o', 'ö'=>'o', 'ø'=>'o', 'ù'=>'u', 'ú'=>'u', 'û'=>'u', 'ý'=>'y', 'ý'=>'y', 'þ'=>'b',
            'ÿ'=>'y', 'Ŕ'=>'R', 'ŕ'=>'r', '/' => '_', ' ' => '_'
        );

        // -- Remove duplicated spaces
        $text = preg_replace(array('/\s{2,}/', '/[\t\n]/'), '_', $text);

        $text = preg_replace('~[^\pL\d]+~u', '_', $text);
        // -- Returns the slug
        return trim(strtolower(strtr($text, $table)), '_');
    }
}
