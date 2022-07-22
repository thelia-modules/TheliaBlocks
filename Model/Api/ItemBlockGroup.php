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

namespace TheliaBlocks\Model\Api;

use OpenApi\Annotations as OA;
use OpenApi\Constraint;
use OpenApi\Model\Api\BaseApiModel;
use TheliaMain\PropelResolver;

/**
 * Class ItemBlockGroup.
 *
 * @OA\Schema(
 *     schema="ItemBlockGroup",
 *     title="ItemBlockGroup",
 * )
 */
class ItemBlockGroup extends BaseApiModel
{
    /**
     * @var int
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
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $itemId;

    /**
     * @var string
     * @OA\Property(
     *    type="string",
     * )
     */
    protected $itemTitle;

    /**
     * @var string
     * @OA\Property(
     *    type="string",
     * )
     */
    protected $itemUrl;

    /**
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $blockGroupId;

    /**
     * @return int
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getItemType(): string
    {
        return $this->itemType;
    }

    public function setItemType(string $itemType): self
    {
        $this->itemType = $itemType;

        return $this;
    }

    public function getItemId(): int
    {
        return $this->itemId;
    }

    public function setItemId(int $itemId): self
    {
        $this->itemId = $itemId;

        return $this;
    }

    /**
     * @return int
     */
    public function getBlockGroupId(): ?int
    {
        return $this->blockGroupId;
    }

    public function setBlockGroupId(int $blockGroupId): self
    {
        $this->blockGroupId = $blockGroupId;

        return $this;
    }

    public function getItemTitle(): string
    {
        return $this->itemTitle;
    }

    public function setItemTitle(string $itemTitle): self
    {
        $this->itemTitle = $itemTitle;

        return $this;
    }

    public function getItemUrl(): string
    {
        return $this->itemUrl;
    }

    public function setItemUrl(string $itemUrl): self
    {
        $this->itemUrl = $itemUrl;

        return $this;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaBlocks\Model\ItemBlockGroup::class);
    }

    public function createFromTheliaModel($theliaModel, $locale = null)
    {
        parent::createFromTheliaModel($theliaModel, $locale);

        if (!$this->getItemType()) {
            return $this;
        }

        try {
            $tableMapClass = PropelResolver::getTableMapByTableName($this->getItemType());

            if (!$tableMapClass) {
                return $this;
            }

            $tableMap = new $tableMapClass();
            $queryClass = $tableMap->getClassName().'Query';

            if (!class_exists($queryClass)) {
                return $this;
            }

            $query = $queryClass::create();

            if (null === $query) {
                return $this;
            }

            $item = $query->findOneById($this->getItemId());

            if ($item === null) {
                return $this;
            }

            if (method_exists($item, 'getTitle')) {
                $this->setItemTitle($item->getTitle());
            }
            if (method_exists($item, 'getUrl')) {
                $this->setItemUrl($item->getUrl());
            }
        } catch (\Throwable $th) {
            // throw $th;
        }
    }
}
