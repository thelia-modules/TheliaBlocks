import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

import React, { useEffect, useState } from "react";
import Editor from "./MediumEditorWrapper";

export type BlockTextData = {
  value: string;
};

function BlockTextComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockTextData>) {
  const [localData, setData] = useState<string>("");

  useEffect(() => {
    setData(data.value);
  }, [data]);

  return (
    <div className="BlockText cursor-text">
      <Editor
        className="BlockText-editor"
        text="test"
        onChange={onUpdate}
        options={{ toolbar: { buttons: ["bold", "italic", "underline"] } }}
      />
    </div>
  );
}

const initialData = {
  value: "",
};

const moduleType = {
  id: "blockText",
  title: {
    default: "Text",
    fr_FR: "Texte",
  },
  description: {
    default: "Display a formated text",
    fr_FR: "Affiche un texte mis en forme",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockText",
  },
};

const Blocktext: BlockPluginDefinition<BlockTextData> = {
  type: moduleType,
  component: BlockTextComponent,
  initialData,
};

export default Blocktext;
