import React from "react";
import { nanoid } from "nanoid";

import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
  LibraryImage,
} from "../types";
import { IBlock } from "../types";
import BlockImage from "./Image";

function BlockFullWidthImageComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<LibraryImage>) {
  const handleUpdate = (newData: IBlock["data"]) => {
    onUpdate(newData);
  };

  return (
    <div className="BlockFullWidthImage">
      <BlockImage.component data={data} onUpdate={handleUpdate} id={nanoid()} />
    </div>
  );
}

const moduleType = {
  id: "blockFullWidthImage",
};

const BlockFullWidthImage: BlockPluginDefinition<LibraryImage> = {
  type: moduleType,
  component: BlockFullWidthImageComponent,
  initialData: BlockImage.initialData,
  title: {
    default: "Full width image",
    fr_FR: "Image en pleine largeur",
  },
  description: {
    default:
      "Display a full width image that extend outside the current container",
    fr_FR:
      "Affiche une image en pleine largeur sortant du conteneur courant",
  },
  image: {
    default:
      "https://source.unsplash.com/featured/300x250?nature&blockFullWidthImage",
  },
};

export default BlockFullWidthImage;
