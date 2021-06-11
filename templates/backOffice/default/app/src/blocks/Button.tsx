import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
} from "TheliaBlocksTypes";

import React from "react";

export type BlockButtonData = {
  label: string;
  url: string;
};

function BlockButtonComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockButtonData>) {
  const [url, setUrl] = React.useState<string>("");
  const [label, setLabel] = React.useState<string>("");

  React.useEffect(() => {
    if (data.url) {
      setUrl(data.url);
    }
    if (data.label) {
      setLabel(data.label);
    }
  }, [data]);

  return (
    <div className="flex flex-wrap items-center gap-8 BlockButton">
      <div className="">
        <div className="mb-4">
          <label className="w-20">url</label>
          <input
            type="text"
            value={url}
            onChange={(e) => onUpdate({ url: e.target.value, label })}
          />
        </div>
        <div>
          <label className="w-20">label</label>
          <input
            type="text"
            value={label}
            onChange={(e) => onUpdate({ url, label: e.target.value })}
          />
        </div>
      </div>
      <div className="">
        <a href={url} className="inline-block px-8 py-4 bg-gray-300">
          {label}
        </a>
      </div>
    </div>
  );
}

const initialData = {
  label: "google",
  url: "https://google.fr",
};

const moduleType = {
  id: "blockButton",
};

const blockButton: BlockPluginDefinition<BlockButtonData> = {
  type: moduleType,
  component: BlockButtonComponent,
  initialData,
  title: {
    default: "Button",
    fr_FR: "Bouton",
  },
  description: {
    default: "link to an url",
    fr_FR: "lien vers une url",
  },
};

export default blockButton;
