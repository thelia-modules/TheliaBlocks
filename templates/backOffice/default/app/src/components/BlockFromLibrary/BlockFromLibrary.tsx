import "./BlockFromLibrary.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";

import React from "react";
import { useDispatch } from "react-redux";
import Tippy from "@tippyjs/react";
import { nanoid } from "nanoid";

import { addBlock } from "../../redux/blocks";
import { __PLUGINS } from "../../pluginManager";
import { BlockPluginDefinition, BlockModuleType } from "../../types";
import { getI18nText } from "../../utils/i18n";

function BlockTooltip({
  title,
  image,
  description,
}: {
  title: string;
  image?: string;
  description?: string;
}) {
  return (
    <div className="px-2 py-3">
      {image && <img className="block mb-4" src={image} alt={title} />}
      <p className="text-2xl font-medium">{title}</p>
      {description && <p className="mt-2 text-xl">{description}</p>}
    </div>
  );
}

function BlockFromLibrary({
  block,
}: {
  block: {
    id: string;
    initialData: BlockPluginDefinition["initialData"];
    type: BlockPluginDefinition["type"];
    title: BlockPluginDefinition["title"];
    description: BlockPluginDefinition["description"];
    image: BlockPluginDefinition["image"];
  };
}) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      addBlock({
        id: nanoid(),
        parent: null,
        data: block.initialData,
        type: block.type,
      })
    );
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 250);
  };

  const displayedTitle = block.title ? getI18nText(block.title) : block.type.id;

  return (
    <div className="BlockFromLibrary">
      <Tippy
        theme="light"
        content={
          <BlockTooltip
            title={displayedTitle}
            image={block.image && getI18nText(block.image)}
            description={block.description && getI18nText(block.description)}
          />
        }
      >
        <button
          className="border border-gray-200 hover:border-gray-400 btn BlockFromLibrary-title"
          onClick={onClick}
        >
          {displayedTitle}
        </button>
      </Tippy>
    </div>
  );
}

export default BlockFromLibrary;
