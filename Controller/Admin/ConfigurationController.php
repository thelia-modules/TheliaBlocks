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

namespace TheliaBlocks\Controller\Admin;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Thelia\Controller\Admin\BaseAdminController;
use Thelia\Core\Template\TemplateDefinition;
use TheliaBlocks\Service\JsonBlockService;
use TheliaBlocks\TheliaBlocks;

/**
 * Class ConfigurationController.
 *
 * @author Damien Foulhoux <dfoulhoux@openstudio.fr>
 */

#[Route("/admin/TheliaBlocks", name: "thelia_blocks")]
class ConfigurationController extends BaseAdminController
{
    public function __construct(
        private readonly JsonBlockService $jsonBlockService,
    ) {
        TheliaBlocks::$pageNeedTheliaBlockAssets = true;
    }

    #[Route("", name: "_list", methods: ["GET"])]
    public function reactAppListingAction(): Response
    {
        return $this->renderModuleTemplate('thelia-blocks-configuration.html.twig');
    }

    #[Route("/new", name: "_new", methods: ["GET"])]
    public function reactAppNewAction(): Response
    {
        return $this->renderModuleTemplate('thelia-blocks-new-configuration.html.twig');
    }

    #[Route("/{blockGroupId}", name: "_edit", methods: ["GET"], requirements: ["blockGroupId" => "\d+"])]
    public function reactAppEditAction(int $blockGroupId): Response
    {
        return $this->renderModuleTemplate('thelia-blocks-item-configuration.html.twig', [
            'groupId' => $blockGroupId,
        ]);
    }

    /**
     * Render a module-owned back-office template through the Twig parser.
     *
     * The default-twig back-office ships these pages inside the module template directory,
     * which BaseAdminController::render() cannot resolve (its parser support check only
     * inspects the active core template path). Resolve the parser whose loader already knows
     * the module template directories and render the relative name, mirroring BaseHook::render().
     */
    private function renderModuleTemplate(string $templateName, array $args = []): Response
    {
        $templateDefinition = $this->parserResolver->getCurrentTemplateDefinition();

        foreach ($this->parserResolver->getParsers() as $parser) {
            if (null !== $templateDefinition && !$parser->getTemplateDefinition() instanceof TemplateDefinition) {
                $parser->setTemplateDefinition($templateDefinition, true);
            }

            try {
                $templateDir = $this->parserResolver->getAssetResolver($parser)
                    ->resolveAssetSourcePath(TheliaBlocks::getModuleCode(), '', $templateName, $parser);
            } catch (\Throwable) {
                continue;
            }

            if (null !== $templateDir && is_file($templateDir.DS.$templateName)) {
                return new Response($parser->render($templateName, $args));
            }
        }

        throw $this->createNotFoundException(
            sprintf('Template %s cannot be found for module %s.', $templateName, TheliaBlocks::getModuleCode())
        );
    }
}
