import { BlockModuleComponentProps, BlockPluginDefinition } from "../types";

import React from "react";

export type BlockVideoData = {
  src: string;
};

function BlockVideoComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockVideoData>) {
  const [src, setSrc] = React.useState<string>("");

  React.useEffect(() => {
    if (data.src) {
      setSrc(data.src);
    }
  }, [data]);

  return (
    <div className="BlockVideo">
      <iframe
        style={{
          aspectRatio: "16/9",
        }}
        className="w-full"
        src={`https://www.youtube.com/embed/${src}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div>
        <input
          type="text"
          placeholder="source"
          value={src}
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          onBlur={(e) => onUpdate({ ...data, src: e.target.value })}
        />
      </div>
    </div>
  );
}

const initialData = {
  src: "4JcENw71M6c",
};

const blockVideo: BlockPluginDefinition<BlockVideoData> = {
  type: "blockVideo",
  component: BlockVideoComponent,
  initialData,
};

export default blockVideo;
