import React from "react";

import "./Image.css";
import previewImg from "./preview.jpg";
import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

export type BlockImageData = {
  src: string;
  alt: string;
};

export type BlockImageComponentProps = BlockModuleComponentProps<BlockImageData>;

function BlockImageComponent(props: BlockImageComponentProps) {
  const [src, setSrc] = React.useState<string>("");
  const [alt, setAlt] = React.useState<string>("");

  const { data, onUpdate } = props;

  React.useEffect(() => {
    if (data.src) {
      setSrc(data.src);
    }
    if (data.alt) {
      setAlt(data.alt);
    }
  }, [data]);

  return (
    <div className="BlockImage">
      <img src={data.src} alt={data.alt} className="BlockImage-img" />
      <div className="BlockImage-Inputs">
        <input
          type="text"
          placeholder="source"
          value={src}
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          onBlur={(e) => {
            if (e.target.value) {
              onUpdate({ ...data, src: e.target.value });
            }
          }}
        />
        <input
          type="text"
          placeholder="alt"
          value={alt}
          onChange={(e) => {
            setAlt(e.target.value);
          }}
          onBlur={(e) => onUpdate({ ...data, alt: e.target.value })}
        />
      </div>
    </div>
  );
}

const initialData = {
  src: "//placehold.it/1600x400",
  alt: "image d'example",
};

const moduleType = {
  id: "blockImage",
};

const blockImage: BlockPluginDefinition<BlockImageData> = {
  type: moduleType,
  component: BlockImageComponent,
  initialData,
  title: {
    default: "Image",
    fr_FR: "Image",
  },
  description: {
    default: "Display an image",
    fr_FR: "Affiche une image",
  },
  image: {
    default: "http://localhost:3000" + previewImg,
  },
};

export default blockImage;
