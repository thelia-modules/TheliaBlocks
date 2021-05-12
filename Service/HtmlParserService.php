<?php

namespace TheliaBlocks\Service;

class HtmlParserService
{
    public function htmlToJsonBlocks($html)
    {
        $domDocument = new \DOMDocument();
        libxml_use_internal_errors(true);
        $domDocument->loadHTML($html);

        $tags = $this->htmlToTags($domDocument->documentElement)['children'][0]['children'];
        return json_encode($this->tagsToBlocks($tags));
    }

    protected function htmlToTags($element) {
        if (!property_exists($element, 'tagName')) {
            return null;
        }
        $obj = array( "type" => $element->tagName );
        if (!in_array($element->tagName, ['html', 'body'])) {
            $obj["raw"] = $element->ownerDocument->saveXML($element);
        }
        foreach ($element->attributes as $attribute) {
            $obj[$attribute->name] = $attribute->value;
        }
        foreach ($element->childNodes as $subElement) {
            if ($subElement->nodeType == XML_TEXT_NODE) {
                if ("" != trim($subElement->wholeText)) {
                    $obj["children"][] = $subElement->wholeText;
                }
            }
            else {
                $child = $this->htmlToTags($subElement);
                if (null !== $child) {
                    $obj["children"][] = $child;
                }
            }
        }
        return $obj;
    }

    protected function tagsToBlocks($tags, $parentId = null) {
        $blocks = [];
        foreach ($tags as $tag) {
            $block = [
                'id' => $this->guidv4(),
                'parent' => $parentId
            ];

            if (is_string($tag)) {
                $block = $tag;
            } elseif (!in_array($tag['type'], ['img', 'br']) && !isset($tag['children'])) {
                continue;
            } elseif (in_array($tag['type'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])) {
                $text = array_reduce($tag['children'], function ($carry, $item) { if (is_string($item)){$carry .= $item;} return $carry;}, "");
                $block = array_merge(
                    $block,
                    [
                        "type"=>["id"=>"blockTitle"],
                        "data"=>[
                            "level" => substr($tag['type'], 1,1),
                            "text" => $text
                        ]
                    ]
                );
            } elseif ($tag['type'] === "ol" || $tag['type'] === "ul") {
                $childrenBlocks = array_filter($this->tagsToBlocks($tag['children'], $block['id']), function ($item){return is_string($item);});
                $block = array_merge(
                    $block,
                    [
                        "type"=>["id"=>"blockList"],
                        "data"=>[
                            "type"=>$tag['type'],
                            "values"=>$childrenBlocks
                        ]
                    ]
                );
            } elseif ($tag['type'] === "li") {
                $text = array_reduce($tag['children'], function ($carry, $item) { if (is_string($item)){$carry .= $item;} return $carry;}, "");

                $block = $text;
            } elseif ($tag['type'] === "figure") {
                $childrenBlocks = $this->tagsToBlocks($tag['children'], $block['id']);
                $block = array_merge(
                    $block,
                    [
                        "type"=>["id"=>"blockGroup"],
                        "data"=>$childrenBlocks
                    ]
                );
            } elseif ($tag['type'] === "img") {
                $alt = $tag["alt"] ?? $tag["title"]?? "";
                $data = [
                    "src" => $tag["src"],
                    "alt" => $alt
                ];

                if (isset($tag['width'])) {
                    $data['width'] = $tag['width'];
                }
                if (isset($tag['height'])) {
                    $data['height'] = $tag['height'];
                }
                $block = array_merge(
                    $block,
                    [
                        "type"=>["id"=>"blockImage"],
                        "data"=>$data
                    ]
                );
            } elseif ($tag['type'] === "figcaption") {
                if (!isset($tag['children'])) {
                    continue;
                }
                $text = array_reduce($tag['children'], function ($carry, $item) { if (is_string($item)){$carry .= $item;} return $carry;}, "");
                $block = array_merge(
                    $block,
                    [
                        "type"=>["id"=>"blockText"],
                        "data"=>[
                            "value" => $text
                        ]
                    ]
                );
            } elseif ($tag['type'] === "p") {
                $childrenBlocks = $this->tagsToBlocks($tag['children'], $block['id']);
                // If a p contains only string it's a blockText else it's a blockGroup
                $onlyString = array_reduce($childrenBlocks, function ($carry, $item){ return $carry && is_string($item);}, true);
                if ($onlyString) {
                    $block = array_merge(
                        $block,
                        [
                            "type"=>["id"=>"blockText"],
                            "data"=> [
                                "value" => implode("", $childrenBlocks)
                            ]
                        ]
                    );
                } else {
                    $realChildrenBlocks = array_map(function ($child) use ($parentId) {
                        // If already transormed to block
                        if (!is_string($child)) {
                            return $child;
                        }
                        // Else create a textblock
                        return [
                            'id' => $this->guidv4(),
                            'parent' => $parentId,
                            "type"=>["id"=>"blockText"],
                            "data"=> [
                                "value" => $child
                            ]
                        ];
                    },$childrenBlocks);
                    $block = array_merge(
                        $block,
                        [
                            "type"=>["id"=>"blockGroup"],
                            "data"=>$realChildrenBlocks
                        ]
                    );
                }
            } elseif (in_array($tag['type'], ["strong", "br", "span", "a"])  && null !== $parentId) {
                $block = $tag['raw'];
            } else {
                $block = array_merge(
                    $block,
                    [
                        "type"=>["id"=>"blockText"],
                        "data"=> [
                            "value" => $tag['raw']
                        ]
                    ]
                );
            }

            $blocks[] = $block;
        }

        return $blocks;
    }

    protected function guidv4($data = null) {
        // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
        $data = $data ?? random_bytes(16);
        assert(strlen($data) == 16);

        // Set version to 0100
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        // Set bits 6-7 to 10
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

        // Output the 36 character UUID.
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }
}
