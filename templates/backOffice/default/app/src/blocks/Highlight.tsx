import React from "react";
import { nanoid } from "nanoid";

import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
} from "TheliaBlocksTypes";
import { IBlock } from "TheliaBlocksTypes";
import BlockText from "./Text";

export type BlockHighlightData = {
  value: string;
};

function BlockHighlightComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockHighlightData>) {
  const handleUpdate = (newData: IBlock["data"]) => {
    onUpdate(newData);
  };

  return (
    <div className="BlockHighlight">
      <BlockText.component data={data} onUpdate={handleUpdate} id={nanoid()} />
    </div>
  );
}

const initialData = {
  value: "",
};

const moduleType = {
  id: "blockHighlight",
};

const BlockHighlight: BlockPluginDefinition<BlockHighlightData> = {
  type: moduleType,
  component: BlockHighlightComponent,
  initialData,
  title: {
    default: "Highlight",
    fr_FR: "Mise en avant",
  },
  description: {
    default: "Display a highlighted text",
    fr_FR: "Affiche un bloc de texte mis en avant",
  },
  image: {
    default:
      "https://source.unsplash.com/featured/300x250?nature&blockHighlight",
  },
};

export default BlockHighlight;
