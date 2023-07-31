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
use OpenApi\Exception\OpenApiException;
use OpenApi\Model\Api\BaseApiModel;
use OpenApi\Model\Api\Error;
use OpenApi\OpenApi;
use Propel\Runtime\ActiveQuery\Criteria;
use Thelia\Core\Translation\Translator;
use Thelia\Model\LangQuery;
use TheliaBlocks\Model\BlockGroupI18nQuery;
use TheliaBlocks\Model\BlockGroupQuery;

/**
 * Class BlockGroup.
 *
 * @OA\Schema(
 *     schema="BlockGroup",
 *     title="BlockGroup",
 * )
 */
class BlockGroup extends BaseApiModel
{
    /**
     * @var int
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $id;

    /**
     * @var bool
     * @OA\Property(
     *     type="boolean",
     * )
     */
    protected $visible;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $title;

    /**
     * @var string
     * @OA\Property(
     *     type="string",
     * )
     */
    protected $slug = null;

    /**
     * @var array
     * @OA\Property(
     *     readOnly=true,
     *     type="array",
     *     @OA\Items(
     *          ref="#/components/schemas/ItemBlockGroup"
     *     )
     * )
     */
    protected $itemBlockGroups = [];

    /**
     * @var string
     * @OA\Property(
     *     description="All blocks json encoded",
     *     type="string"
     * )
     */
    protected $jsonContent;

    /**
     * @var array
     * @OA\Property(
     *    type="array",
     *    @OA\Items()
     * )
     */
    protected $locales;

    /**
     * @var \DateTime
     * @OA\Property(
     *     description="creation date",
     *     type="string"
     * )
     */
    protected $createdAt;

    /**
     * @var \DateTime
     * @OA\Property(
     *     description="last update date",
     *     type="string"
     * )
     */
    protected $updatedAt;

    /**
     * @param $groups
     *
     * @throws OpenApiException
     *
     * @return BlockGroup
     */
    public function validate($groups, $recursively = true)
    {
        parent::validate($groups, $recursively);

        $violations = [];

        if (null !== $this->getSlug()) {
            $sameSlugQuery = BlockGroupQuery::create()
                ->filterBySlug($this->getSlug());

            if (null !== $this->getId()) {
                $sameSlugQuery->filterById($this->getId(), Criteria::NOT_EQUAL);
            }

            if (null !== $sameSlugQuery->findOne()) {
                $violations[] = $this->modelFactory->buildModel(
                    'SchemaViolation',
                    [
                        'key' => 'slug',
                        'error' => Translator::getInstance()->trans('Slug must be unique', [], OpenApi::DOMAIN_NAME),
                    ]
                );
            }
        }

        if (!empty($violations)) {
            /** @var Error $error */
            $error = $this->modelFactory->buildModel(
                'Error',
                ['title' => Translator::getInstance()->trans('Invalid data', [], OpenApi::DOMAIN_NAME)]
            );

            $error->setSchemaViolations($violations);

            throw new OpenApiException($error);
        }

        return $this;
    }

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

    public function isVisible(): bool
    {
        return $this->visible;
    }

    public function setVisible(bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    /**
     * @return string
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string
     */
    public function getSlug(): ?string
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     */
    public function setSlug(?string $slug): self
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * @return string
     */
    public function getJsonContent(): ?string
    {
        return $this->jsonContent;
    }

    public function setJsonContent(?string $jsonContent): self
    {
        $this->jsonContent = $jsonContent;

        return $this;
    }

    public function getItemBlockGroups(): array
    {
        return $this->itemBlockGroups;
    }

    public function setItemBlockGroups(array $itemBlockGroups): self
    {
        $this->itemBlockGroups = $itemBlockGroups;

        return $this;
    }

    public function getLocales(): array|null
    {
        return $this->locales;
    }

    public function setLocales(array $locales): self
    {
        $this->locales = $locales;

        return $this;
    }

    public function getCreatedAt(): string|null
    {
        return $this->createdAt->format('Y-m-d H:i:s');
    }

    public function setCreatedAt(\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): string|null
    {
        return $this->updatedAt->format('Y-m-d H:i:s');
    }

    public function setUpdatedAt(\DateTime $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }


    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaBlocks\Model\BlockGroup::class);
    }

    public function createFromTheliaModel($theliaModel, $locale = null): void
    {
        parent::createFromTheliaModel($theliaModel, $locale);

        $locales = array_map(
            function ($item) {
                return LangQuery::create()->findOneByLocale($item['Locale'])->getLocale();
            },
            BlockGroupI18nQuery::create()
                ->filterById($this->getId())
                ->find()
                ->toArray()
        );

        $this->setLocales($locales);
    }
}
