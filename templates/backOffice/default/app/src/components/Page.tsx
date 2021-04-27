import { useDispatch, useSelector } from "react-redux";
import { useBlockGroup, useBlockGroupsList } from "../hooks/data";

import Block from "./Block";
import BlockWrapper from "./BlockWrapper/BlockWrapper";
import PageOptions from "./PageOptions";
import React from "react";
import { RootState } from "../redux/store";
import { deleteBlock } from "../redux/blocks";

function Page() {
  const blocks = useSelector((state: RootState) => state.blocks);
  const dispatch = useDispatch();
  const page = useBlockGroup();

  return (
    <div className="Page">
      <PageOptions />
      <div className="flex flex-col gap-6">
        {blocks.map((block) => {
          return (
            <BlockWrapper key={block.id} block={block}>
              <Block block={block} />
            </BlockWrapper>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
