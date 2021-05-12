<?php

namespace TheliaBlocks\Model\Api;

use OpenApi\Annotations as OA;
use OpenApi\Exception\OpenApiException;
use OpenApi\Model\Api\BaseApiModel;
use OpenApi\Constraint as Constraint;
use OpenApi\Model\Api\Error;
use OpenApi\OpenApi;
use Propel\Runtime\ActiveQuery\Criteria;
use Thelia\Core\Translation\Translator;
use TheliaBlocks\Model\BlockGroupQuery;

/**
 * Class ItemBlockGroup
 * @package OpenApi\Model\Api
 * @OA\Schema(
 *     schema="ItemBlockGroup",
 *     title="ItemBlockGroup",
 * )
 */
class ItemBlockGroup extends BaseApiModel
{
    /**
     * @var integer
     * @OA\Property(
     *     type="integer",
     * )
     */
    protected $id;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $itemType;

    /**
     * @var integer
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $itemId;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return ItemBlockGroup
     */
    public function setId(int $id): ItemBlockGroup
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getItemType(): string
    {
        return $this->itemType;
    }

    /**
     * @param string $itemType
     * @return ItemBlockGroup
     */
    public function setItemType(string $itemType): ItemBlockGroup
    {
        $this->itemType = $itemType;
        return $this;
    }

    /**
     * @return int
     */
    public function getItemId(): int
    {
        return $this->itemId;
    }

    /**
     * @param int $itemId
     * @return ItemBlockGroup
     */
    public function setItemId(int $itemId): ItemBlockGroup
    {
        $this->itemId = $itemId;
        return $this;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaBlocks\Model\ItemBlockGroup::class);
    }
}
