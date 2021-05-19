import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { deleteBlock, reorderBlocks } from "../redux/blocks";
import { useDispatch, useSelector } from "react-redux";

import Block from "./Block";
import BlockWrapper from "./BlockWrapper";
import GroupOptions from "./GroupOptions";
import React from "react";
import { RootState } from "../redux/store";
import { reorder } from "../utils/array";

function Group({ onSave }: { onSave: Function }) {
  const dispatch = useDispatch();
  const blocks = useSelector((state: RootState) => state.blocks);
  const group = useSelector((state: RootState) => state.group);
  const windowConstants = useSelector(
    (state: RootState) => state.ui.windowConstants
  );

  const otherLinkedContents = group.itemBlockGroups?.filter(
    (group) =>
      windowConstants.itemType !== group.itemType ||
      windowConstants.itemId !== group.itemId
  );

  return (
    <div className="p-12 bg-white shadow Group">
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
      <DragDropContext
        onDragEnd={(e) => {
          if (e.destination) {
            dispatch(
              reorderBlocks({
                source: e.source.index,
                destination: e.destination.index,
              })
            );
          }
        }}
      >
        {blocks.length > 0 && (
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className={`flex flex-col gap-6 mt-6 ${
                  snapshot.isDraggingOver ? "bg-green-400" : ""
                }`}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {blocks.map((block, index) => {
                  return (
                    <Draggable
                      key={block.id}
                      draggableId={block.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <BlockWrapper
                            block={block}
                            handleDelete={(block) => {
                              dispatch(deleteBlock(block.id));
                            }}
                            dragHandleProps={provided.dragHandleProps}
                          >
                            <Block block={block} />
                          </BlockWrapper>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        )}
      </DragDropContext>
    </div>
  );
}

export default Group;
