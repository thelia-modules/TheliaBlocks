import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
} from "TheliaBlocksTypes";

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

const moduleType = {
  id: "blockVideo",
};

const blockVideo: BlockPluginDefinition<BlockVideoData> = {
  type: moduleType,
  component: BlockVideoComponent,
  initialData,
  title: {
    default: "Video",
    fr_FR: "Video",
  },
  description: {
    default: "Display a Youtube video",
    fr_FR: "Affiche une vidéo Youtube",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockVideo",
  },
};

export default blockVideo;
