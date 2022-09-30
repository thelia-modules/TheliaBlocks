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

namespace TheliaBlocks\Service;

use OpenApi\Model\Api\ModelFactory;
use Symfony\Component\HttpFoundation\RequestStack;
use TheliaLibrary\Model\LibraryImage;
use TheliaLibrary\TheliaLibrary;

class HtmlParserService
{
    /** @var ModelFactory */
    protected $modelFactory;

    protected $locale;

    public function __construct(ModelFactory $modelFactory, RequestStack $requestStack)
    {
        $this->modelFactory = $modelFactory;
        $this->locale = $requestStack->getCurrentRequest()->getSession()->getLang(true)->getLocale();
    }

    public function htmlToJsonBlocks($html, $mediaBaseUrl = null)
    {
        $domDocument = new \DOMDocument();
        libxml_use_internal_errors(true);
        $domDocument->loadHTML($html);

        $tags = $this->htmlToTags($domDocument->documentElement)['children'][0]['children'];
        $blocks = array_map(function ($tag) use ($mediaBaseUrl) {return $this->tagToBlocks($tag, null, $mediaBaseUrl); }, $tags);
        $blocks = array_reduce(
            $blocks,
            [$this, 'reduceBlocks'], []);

        return json_encode($blocks);
    }

    protected function reduceBlocks($carry, $block)
    {
        $currentBlockType = $block['type']['id'] ?? null;

        if ($currentBlockType === 'blockGroup') {
            $block['data'] = array_reduce($block['data'], [$this, 'reduceBlocks'], []);
            if (\count($block['data']) > 1) {
                $carry[] = $block;

                return $carry;
            }
            $block = $block['data'][0];
        }

        $previousBlockType = $carry[array_key_last($carry)]['type']['id'] ?? null;
        // If current and previous are block text merge it
        if ('blockText' === $previousBlockType && 'blockText' === $currentBlockType) {
            $carry[array_key_last($carry)]['data']['value'] = $carry[array_key_last($carry)]['data']['value'].$block['data']['value'];

            return $carry;
        }
        // If current is a "space" separator and previous is block text add a br to previous
        if ('blockText' === $previousBlockType && 'blockSeparator' === $currentBlockType && $block['data']['type'] === 'space') {
            $carry[array_key_last($carry)]['data']['value'] = $carry[array_key_last($carry)]['data']['value'].'<br/>';

            return $carry;
        }
        // If current is a block text and previous is a "space" separator, replace previous by current and add a br at start of it
        if ('blockSeparator' === $previousBlockType && $carry[array_key_last($carry)]['data']['type'] === 'space' && 'blockText' === $currentBlockType) {
            $block['data']['value'] = '<br/>'.$block['data']['value'];
            $carry[array_key_last($carry)] = $block;

            return $carry;
        }
        // If current and previous are "space" separator increase size of previous
        if ('blockSeparator' === $previousBlockType && 'blockSeparator' === $currentBlockType) {
            $carry[array_key_last($carry)]['data']['size'] = $carry[array_key_last($carry)]['data']['size']++;

            return $carry;
        }

        $carry[] = $block;

        return $carry;
    }

    protected function htmlToTags($element)
    {
        if (!property_exists($element, 'tagName')) {
            return null;
        }
        $obj = ['type' => $element->tagName];
        if (!\in_array($element->tagName, ['html', 'body'])) {
            $obj['raw'] = $element->ownerDocument->saveXML($element);
        }
        foreach ($element->attributes as $attribute) {
            $obj[$attribute->name] = $attribute->value;
        }
        foreach ($element->childNodes as $subElement) {
            if ($subElement->nodeType == \XML_TEXT_NODE) {
                if ('' != trim($subElement->wholeText)) {
                    $obj['children'][] = $subElement->wholeText;
                }
            } else {
                $child = $this->htmlToTags($subElement);
                if (null !== $child) {
                    $obj['children'][] = $child;
                }
            }
        }

        return $obj;
    }

    protected function tagToBlocks($tag, $parentId = null, $mediaBaseUrl = null)
    {
        $blockId = $this->guidv4();
        $blockBaseData = [
            'id' => $blockId,
            'parent' => $parentId,
        ];

        // String without tags are text
        if (\is_string($tag)) {
            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockText'],
                    'data' => [
                        'value' => $tag,
                    ],
                ]
            );
        }

        // Orphan tag that are not implemented
        if (!\in_array($tag['type'], ['img', 'iframe', 'br', 'hr', 'embed']) && !isset($tag['children'])) {
            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockRaw'],
                    'data' => [
                        'value' => $tag['raw'],
                    ],
                ]
            );
        }

        $childrenBlocks = isset($tag['children'])
            ? array_map(function ($tag) use ($blockId, $mediaBaseUrl) {return $this->tagToBlocks($tag, $blockId, $mediaBaseUrl); }, $tag['children'])
            : [];

        // Title tags
        if (\in_array($tag['type'], ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])) {
            $text = array_reduce(
                $tag['children'],
                [$this, 'mergeChildText'],
                ''
            );

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockTitle'],
                    'data' => [
                        'level' => substr($tag['type'], 1, 1),
                        'text' => strip_tags($text),
                    ],
                ]
            );
        }

        if (\in_array($tag['type'], ['ol', 'ul'])) {
            // Get li as raw text
            $values = array_filter(array_map(
                function ($child) {
                    return $child['data']['value'] ?? null;
                },
                $childrenBlocks
            ), 'strlen');

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockList'],
                    'data' => [
                        'type' => $tag['type'],
                        'values' => $values,
                    ],
                ]
            );
        }

        if ($tag['type'] === 'li') {
            $text = array_reduce(
                $tag['children'],
                [$this, 'mergeChildText'],
                ''
            );

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockText'],
                    'data' => [
                        'value' => $text,
                    ],
                ]
            );
        }

        if ($tag['type'] === 'figure') {
            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockGroup'],
                    'data' => $childrenBlocks,
                ]
            );
        }

        if ($tag['type'] === 'figcaption') {
            $text = array_reduce(
                $tag['children'],
                [$this, 'mergeChildText'],
                ''
            );

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockText'],
                    'data' => [
                        'value' => $text,
                    ],
                ]
            );
        }

        if ($tag['type'] === 'img') {
            $alt = $tag['alt'] ?? $tag['title'] ?? '';
            $imgData = [];

            if (isset($tag['width'])) {
                $imgData['width'] = $tag['width'];
            }
            if (isset($tag['height'])) {
                $imgData['height'] = $tag['height'];
            }

            $imgDataFromUrl = null !== $mediaBaseUrl
                ? $this->fileGetContentsCurl($mediaBaseUrl.$tag['src'])
                : null;

            // If we found img by his url upload it to library
            if ($imgDataFromUrl) {
                $fileName = bin2hex(random_bytes(5)).'_'.basename($tag['src']);
                file_put_contents(TheliaLibrary::DEFAULT_IMAGE_DIRECTORY.$fileName, $imgDataFromUrl);
                $libraryImage = (new LibraryImage())
                    ->setLocale($this->locale)
                    ->setFileName($fileName)
                    ->setTitle($alt ?? $fileName);

                $libraryImage->save();

                $openApiImage = $this->modelFactory->buildModel('LibraryImage', $libraryImage);

                return array_merge(
                    $blockBaseData,
                    [
                        'type' => ['id' => 'blockImage'],
                        'data' => array_merge($imgData, json_decode(json_encode($openApiImage), true)),
                    ]
                );
            }

            // Else set the src value
            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockImage'],
                    'data' => array_merge(
                            $imgData,
                            [
                                'src' => $tag['src'],
                                'alt' => $alt,
                            ]
                        ),
                ]
            );
        }

        if ($tag['type'] === 'p') {
            if (isset($tag['children']) && !empty($tag['children'])) {
                return array_merge(
                    $blockBaseData,
                    [
                        'type' => ['id' => 'blockGroup'],
                        'data' => $childrenBlocks,
                    ]
                );
            }

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockText'],
                    'data' => [
                        'value' => $tag['raw'],
                    ],
                ]
            );
        }

        if (\in_array($tag['type'], ['strong', 'span'])) {
            $text = array_reduce(
                $tag['children'],
                [$this, 'mergeChildText'],
                ''
            );

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockText'],
                    'data' => [
                        'value' => '<'.$tag['type'].'>'.$text.'</'.$tag['type'].'>',
                    ],
                ]
            );
        }

        if ($tag['type'] === 'a') {
            $imgBlocks = array_filter($childrenBlocks, function ($block) {return $block['type']['id'] === 'blockImage'; });
            // If a link has an img inside it's an image block with a link
            if (isset($imgBlocks[0])) {
                $linkData = ['url' => $tag['href']];
                if (isset($tag['target'])) {
                    $linkData['target'] = $tag['target'];
                }
                $blockData = array_merge(
                    $imgBlocks[0]['data'],
                    [
                        'link' => $linkData,
                    ]
                );

                return array_merge(
                    $blockBaseData,
                    [
                        'type' => ['id' => 'blockImage'],
                        'data' => $blockData,
                    ]
                );
            }

            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockText'],
                    'data' => [
                        'value' => $tag['raw'],
                    ],
                ]
            );
        }

        if (\in_array($tag['type'], ['hr', 'br'])) {
            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockSeparator'],
                    'data' => [
                        'type' => $tag['type'] === 'hr' ? 'border' : 'space',
                        'size' => 1,
                    ],
                ]
            );
        }

        // Fix not closed iframes (remove closed tag if exist the add it to be sure all iframes has closing tags
        if ($tag['type'] === 'iframe') {
            return array_merge(
                $blockBaseData,
                [
                    'type' => ['id' => 'blockRaw'],
                    'data' => [
                        'value' => str_replace('</iframe>', '', $tag['raw']).'</iframe>',
                    ],
                ]
            );
        }

        return array_merge(
            $blockBaseData,
            [
                'type' => ['id' => 'blockRaw'],
                'data' => [
                    'value' => $tag['raw'],
                ],
            ]
        );
    }

    protected function mergeChildText($carry, $child)
    {
        $childText = \is_string($child) ? $child : $child['raw'];

        return $carry.$childText;
    }

    protected function guidv4($data = null)
    {
        // Generate 16 bytes (128 bits) of random data or use the data passed into the function.
        $data = $data ?? random_bytes(16);
        \assert(\strlen($data) == 16);

        // Set version to 0100
        $data[6] = \chr(\ord($data[6]) & 0x0F | 0x40);
        // Set bits 6-7 to 10
        $data[8] = \chr(\ord($data[8]) & 0x3F | 0x80);

        // Output the 36 character UUID.
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    protected function fileGetContentsCurl($url)
    {
        $ch = curl_init();

        curl_setopt($ch, \CURLOPT_HEADER, 0);
        curl_setopt($ch, \CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, \CURLOPT_URL, $url);

        $data = curl_exec($ch);
        curl_close($ch);

        return $data;
    }
}
