import "./BlockFromLibrary.css";

import React from "react";
import { useDispatch } from "react-redux";
import { addBlock } from "../../redux/blocks";
import { __PLUGINS } from "../../pluginManager";
import { BlockPluginDefinition } from "../../types"; 

function BlockFromLibrary({ block } : {
  block: {
    id: string,
    initialData: BlockPluginDefinition["initialData"];
    type: BlockPluginDefinition["type"];
  }
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
      <div className="BlockFromLibrary-img">
        <img src="//placehold.it/210x115" alt="" />
        <button
          className="BlockfromLibrary-addBlock"
          onClick={onClick}
        >
          <span className="Button">+</span>
        </button>
      </div>
      <div className="BlockFromLibrary-title">{block.type}</div>
    </div>
  );
}

export default BlockFromLibrary;
