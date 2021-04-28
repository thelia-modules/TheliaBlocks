import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Block from "./Block";
import BlockWrapper from "./BlockWrapper";
import GroupOptions from "./GroupOptions";
import { RootState } from "../redux/store";
import { deleteBlock } from "../redux/blocks";

function Group() {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.blocks);

  return (
    <div className="bg-white shadow Group">
      <GroupOptions />
      <div className="flex flex-col gap-6">
        {blocks.map((block) => {
          return (
            <BlockWrapper
              key={block.id}
              block={block}
              handleDelete={(block) => {
                dispatch(deleteBlock(block.id));
              }}
            >
              <Block block={block} />
            </BlockWrapper>
          );
        })}
      </div>
    </div>
  );
}

export default Group;
