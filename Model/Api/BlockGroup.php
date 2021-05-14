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
use Thelia\Model\Base\ProductCategory;
use Thelia\Model\FeatureProduct;
use TheliaBlocks\Model\BlockGroupQuery;

/**
 * Class BlockGroup
 * @package OpenApi\Model\Api
 * @OA\Schema(
 *     schema="BlockGroup",
 *     title="BlockGroup",
 * )
 */
class BlockGroup extends BaseApiModel
{
    /**
     * @var integer
     * @OA\Property(
     *    type="integer",
     * )
     * @Constraint\NotBlank(groups={"read"})
     */
    protected $id;

    /**
     * @var boolean
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
    protected $slug;

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
     * @param $groups
     *
     * @return BlockGroup
     * @throws OpenApiException
     */
    public function validate($groups, $recursively = true)
    {
        parent::validate($groups, $recursively);

        $violations = [];

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
                        'error' => Translator::getInstance()->trans('Slug must be unique', [], OpenApi::DOMAIN_NAME)
                    ]
                );
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

    /**
     * @param int $id
     * @return BlockGroup
     */
    public function setId(int $id): BlockGroup
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return bool
     */
    public function isVisible(): bool
    {
        return $this->visible;
    }

    /**
     * @param bool $visible
     * @return BlockGroup
     */
    public function setVisible(bool $visible): BlockGroup
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
     * @return BlockGroup
     */
    public function setTitle(?string $title): BlockGroup
    {
        $this->title = $title;
        return $this;
    }

    /**
     * @return string
     */
    public function getSlug(): string
    {
        return $this->slug;
    }

    /**
     * @param string $slug
     * @return BlockGroup
     */
    public function setSlug(string $slug): BlockGroup
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

    /**
     * @param string|null $jsonContent
     * @return BlockGroup
     */
    public function setJsonContent(?string $jsonContent): BlockGroup
    {
        $this->jsonContent = $jsonContent;
        return $this;
    }

    /**
     * @return array
     */
    public function getItemBlockGroups(): array
    {
        return $this->itemBlockGroups;
    }

    /**
     * @param array $itemBlockGroups
     * @return BlockGroup
     */
    public function setItemBlockGroups(array $itemBlockGroups): BlockGroup
    {
        $this->itemBlockGroups = $itemBlockGroups;
        return $this;
    }

    protected function getTheliaModel($propelModelName = null)
    {
        return parent::getTheliaModel(\TheliaBlocks\Model\BlockGroup::class);
    }
}
