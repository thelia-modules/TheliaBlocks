import { IBlock } from "../types";
import React from "react";
import { keyBy } from "lodash";
import { updateBlock } from "../redux/blocks";
import { useDispatch } from "react-redux";
import { usePlugins } from "../pluginManager";

function Block({ block }: { block: IBlock }) {
  const dispatch = useDispatch();
  const blocksLibrary = usePlugins();
  const blocksObj = keyBy(blocksLibrary, "type");
  const Component = blocksObj[block.type].component;
  return (
    <Component
      id={block.id}
      data={block.data}
      onUpdate={(newData: typeof block.data) => {
        dispatch(updateBlock({ id: block.id, data: newData }));
      }}
    />
  );
}

export default Block;
