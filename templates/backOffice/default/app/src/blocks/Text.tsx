import "draft-js/dist/Draft.css";

import { BlockModuleComponentProps, BlockPluginDefinition } from "../types";
import { ContentState, EditorState, convertToRaw } from "draft-js";
import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export type BlockTextData = {
  value: string;
};

const toolbarOptions = {
  options: [
    "inline",
    "blockType",
    "fontSize",
    "list",
    "textAlign",
    "colorPicker",
    "link",
  ],
};

function BlockTextComponent({
  data,
  onUpdate,
}: BlockModuleComponentProps<BlockTextData>) {
  const [localData, setData] = useState<EditorState>(EditorState.createEmpty());

  useEffect(() => {
    const contentBlock = htmlToDraft(data.value);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      setData(editorState);
    }
  }, [data]);

  return (
    <div className="BlockText cursor-text">
      <Editor
        editorState={localData}
        toolbar={toolbarOptions}
        onEditorStateChange={(editorState) => {
          setData(editorState);
        }}
        onBlur={() => {
          onUpdate({
            value: draftToHtml(convertToRaw(localData.getCurrentContent())),
          });
        }}
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
