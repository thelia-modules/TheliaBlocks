<?php

namespace TheliaBlocks\Event;

use Symfony\Contracts\EventDispatcher\Event;

class TheliaBlocksPluginsListEvent extends Event
{
    public const THELIA_BLOCKS_PLUGINS = 'theliablocks.plugins';

    protected ?array $plugins = [];

    public function getPlugins(): ?array
    {
        return $this->plugins;
    }

    public function setPlugins(array $plugins): static
    {
        $this->plugins = $plugins;

        return $this;
    }

    public function addPlugin(string $code, array $plugin): static
    {
        $this->plugins[$code] = $plugin;

        return $this;
    }
}