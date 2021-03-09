import { useDispatch, useSelector } from "react-redux";

import BlockWrapper from "./BlockWrapper/BlockWrapper";
import React from "react";
import { RootState } from "../redux/store";
import { setPageTitle } from "../redux/page";
import Block from "./Block";
import { deleteBlock } from "../redux/blocks";
import { usePage } from "../hooks/data";
import PageOptions from "./PageOptions";

function Page() {
  const blocks = useSelector((state: RootState) => state.blocks);
  const dispatch = useDispatch();

  return (
    <div className="Page">
      <PageOptions />
      <div className="flex flex-col gap-6">
        {blocks.map((block) => {
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
