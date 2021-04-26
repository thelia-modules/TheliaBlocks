import { useDispatch, useSelector } from "react-redux";
import { useBlockGroup, useBlockGroupsList } from "../hooks/data";

import Block from "./Block";
import BlockWrapper from "./BlockWrapper";
import PageOptions from "./PageOptions";
import React from "react";
import { deleteBlock } from "../redux/blocks";

function Page() {
  const dispatch = useDispatch();
  const blocks = useBlockGroup();

  return (
    <div className="Page">
      <PageOptions />
      <div className="flex flex-col gap-6">
        {blocks.data.map((block) => {
          return (
            <BlockWrapper
              key={block.id}
              block={block}
              handleDelete={() => {
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

export default Page;
