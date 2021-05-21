import { useDispatch, useSelector } from "react-redux";

import { deleteBlock, reorderBlocks } from "../../redux/blocks";
import Block from "../Block";
import BlockWrapper from "../BlockWrapper";
import GroupOptions from "../GroupOptions";
import React from "react";
import { RootState } from "../../redux/store";

import "./Group.css";
import useDragAndDrop from "../../hooks/dragAndDrop";

function Group({ onSave }: { onSave: Function }) {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.blocks);
  const group = useSelector((state: RootState) => state.group);
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );
  const { DndWrapper, DndWrapElement } = useDragAndDrop();

  const otherLinkedContents = group.itemBlockGroups?.filter(
    (group) =>
      windowConstants.itemType !== group.itemType ||
      windowConstants.itemId !== group.itemId
  );

  const onDragEnd = (e: any) => {
    if (e.destination) {
      dispatch(
        reorderBlocks({
          source: e.source.index,
          destination: e.destination.index,
        })
      );
    }
  };

  return (
    <div className="Group">
      <GroupOptions onSave={onSave} />
      {!!otherLinkedContents?.length && (
        <div className="p-4 mt-4 text-base text-blue-900 bg-blue-100">
          <strong>Contenus liés :</strong>{" "}
          {otherLinkedContents.map((content) => (
            <span key={`${content.itemType}-${content.itemId}`}>
              {content.itemType}-{content.itemId}{" "}
            </span>
          ))}
        </div>
      )}
      {blocks.length > 0 && (
        <DndWrapper
          id="main"
          onDragEnd={onDragEnd}
          wrapperClass="flex flex-col gap-6 mt-6"
        >
          {blocks.map((block, index) => {
            return (
              <DndWrapElement key={block.id} id={block.id} index={index}>
                {({ DndDragHandle }: { DndDragHandle: () => JSX.Element }) => (
                  <BlockWrapper
                    block={block}
                    handleDelete={(block) => {
                      dispatch(deleteBlock(block.id));
                    }}
                    DndDragHandle={DndDragHandle}
                  >
                    <Block block={block} />
                  </BlockWrapper>
                )}
              </DndWrapElement>
            );
          })}
        </DndWrapper>
      )}
    </div>
  );
}

export default Group;
