import "./BlockFromLibrary.css";

import React from "react";
import { useDispatch } from "react-redux";
import { addBlock } from "../../redux/blocks";
import { __PLUGINS } from "../../pluginManager";
import { BlockPluginDefinition } from "../../types";

function BlockFromLibrary({
  block,
}: {
  block: {
    id: string;
    initialData: BlockPluginDefinition["initialData"];
    type: BlockPluginDefinition["type"];
  };
}) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(
      addBlock({
        id: block.id,
        parent: null,
        data: block.initialData,
        type: block.type,
      })
    );
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 250);
  };

  return (
    <div className="BlockFromLibrary">
      <button
        className="border border-gray-200 hover:border-gray-400 btn BlockFromLibrary-title"
        onClick={onClick}
      >
        {block.type}
      </button>
    </div>
  );
}

export default BlockFromLibrary;
