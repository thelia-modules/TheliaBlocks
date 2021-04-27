import "./Image.css";
import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

import React from "react";

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

const blockImage: BlockPluginDefinition<BlockImageData> = {
  type: "blockImage",
  component: BlockImageComponent,
  initialData,
};

export default blockImage;
