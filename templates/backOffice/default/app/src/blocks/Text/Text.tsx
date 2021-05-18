import "./Text.css";
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
  const [localData, setData] = useState<string>(data.value);

  useEffect(() => {
    setData(data.value);
  }, [data]);

  return (
    <div className="BlockText cursor-text">
      {data !== undefined ? (
        <Editor
          className="BlockText-editor"
          text={localData}
          options={{
            toolbar: {
              buttons: [
                "bold",
                "italic",
                "underline",
                "unorderedlist",
                "orderedlist",
                "justifyLeft",
                "justifyCenter",
                "justifyRight",
                "anchor",
              ],
              static: true,
              updateOnEmptySelection: true,
              align: "center",
            },
            anchor: {
              targetCheckbox: true,
            },
            autoLink: true,
            anchorPreview: true,
          }}
          onChange={(text) => {
            onUpdate({
              value: text,
            });
          }}
        />
      ) : null}
    </div>
  );
}

const initialData = {
  value: "",
};

const moduleType = {
  id: "blockText",
};

const Blocktext: BlockPluginDefinition<BlockTextData> = {
  type: moduleType,
  component: BlockTextComponent,
  initialData,
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

export default Blocktext;
