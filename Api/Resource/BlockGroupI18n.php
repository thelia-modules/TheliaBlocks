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

namespace TheliaBlocks\Api\Resource;

use Symfony\Component\Serializer\Annotation\Groups;
use Thelia\Api\Resource\I18n;

class BlockGroupI18n extends I18n
{
    #[Groups([
        BlockGroup::GROUP_ADMIN_READ,
        BlockGroup::GROUP_ADMIN_WRITE,
        BlockGroup::GROUP_FRONT_READ,
    ])]
    protected ?string $title = null;

    #[Groups([
        BlockGroup::GROUP_ADMIN_READ,
        BlockGroup::GROUP_ADMIN_WRITE,
        BlockGroup::GROUP_FRONT_READ,
    ])]
    protected ?string $jsonContent = null;

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getJsonContent(): ?string
    {
        return $this->jsonContent;
    }

    public function setJsonContent(?string $jsonContent): self
    {
        $this->jsonContent = $jsonContent;

        return $this;
    }
}
