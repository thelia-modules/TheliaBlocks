import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Block from "./Block";
import BlockWrapper from "./BlockWrapper";
import GroupOptions from "./GroupOptions";
import { RootState } from "../redux/store";
import { deleteBlock } from "../redux/blocks";
import { itemBlockGroupsType } from "../types";

function Group({ onSave }: { onSave: Function }) {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.blocks);
  const group = useSelector((state: RootState) => state.group);
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );

  const otherLinkedContents = group.itemBlockGroups?.filter(
    (group) =>
      windowConstants.itemType !== group.itemType || windowConstants.itemId !== group.itemId
  );

  return (
    <div className="p-12 bg-white shadow Group">
      <GroupOptions onSave={onSave} />
      {!!otherLinkedContents?.length && (
        <div className="p-4 mt-4 text-base text-blue-900 bg-blue-100">
          <strong>Contenus liés :</strong>{' '}
          {otherLinkedContents.map((content) => (
            <span key={`${content.itemType}-${content.itemId}`}>
              {content.itemType}-{content.itemId}{' '}
            </span>
          ))}
        </div>
      )}
      {blocks.length > 0 && (
        <div className="flex flex-col gap-6 mt-6">
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
      )}
    </div>
  );
}

export default Group;
