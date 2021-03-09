import "./BlockFromLibrary.css";

import { nanoid } from "nanoid";
import React from "react";
import { useDispatch } from "react-redux";
import { addBlock } from "../../redux/blocks";
import { __PLUGINS } from "../../pluginManager";
import { BlockPluginDefinition } from "../../types";

function BlockFromLibrary(props: {
  block: {
    initialData: BlockPluginDefinition["initialData"];
    type: BlockPluginDefinition["type"];
  };
}) {
  const dispatch = useDispatch();
  return (
    <div className="BlockFromLibrary">
      <div className="BlockFromLibrary-img">
        <img src="//placehold.it/210x115" alt="" />
        <button
          className="BlockfromLibrary-addBlock"
          onClick={() => {
            dispatch(
              addBlock({
                id: nanoid(),
                parent: null,
                data: props.block.initialData,
                type: props.block.type,
              })
            );
            setTimeout(() => {
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              });
            }, 250);
          }}
        >
          <span className="Button">+</span>
        </button>
      </div>
      <div className="BlockFromLibrary-title">{props.block.type}</div>
    </div>
  );
}

export default BlockFromLibrary;
