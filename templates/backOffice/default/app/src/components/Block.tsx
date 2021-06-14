import { IBlock } from "../types";
import React from "react";
import { keyBy } from "lodash-es";
import { updateBlock } from "../redux/blocks";
import { useDispatch } from "react-redux";
import { usePlugins } from "../pluginManager";

function Block({
  block,
  handleUpdate,
}: {
  block: IBlock;
  handleUpdate?: (newData: typeof block.data) => void;
}) {
  const dispatch = useDispatch();
  const blocksLibrary = usePlugins();
  const blocksObj = keyBy(blocksLibrary, "type.id");
  const Component = blocksObj[block.type.id].component;

  const defaultOnUpdate = (newData: typeof block.data) => {
    dispatch(updateBlock({ id: block.id, data: newData }));
  };

  return (
    <Component
      id={block.id}
      data={block.data}
      onUpdate={handleUpdate || defaultOnUpdate}
    />
  );
}

export default Block;
