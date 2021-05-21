import React from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DraggableProvided,
  DropResult,
} from "react-beautiful-dnd";

const DndDragHandle = ({
  dragHandleProps,
}: {
  dragHandleProps: DraggableProvided["dragHandleProps"];
}) => {
  return (
    <div className="BlockWrapper-dragHandle" {...dragHandleProps}>
      <i className="fas fa-bars"></i>
    </div>
  );
};

const DndWrapper = ({
  id,
  children,
  onDragEnd,
  wrapperClass = "",
}: {
  id: string,
  children: React.ReactNode;
  onDragEnd: (e: DropResult) => void;
  wrapperClass?: string;
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            className={`${wrapperClass} relative`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {children}
            {provided.placeholder}
            {snapshot.isDraggingOver && (
              <div className="absolute inset-0 z-10 bg-white opacity-60"></div>
            )}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

const DndWrapElement = ({
  children,
  id,
  index,
  wrapperClass = "",
}: {
  children: ({ DndDragHandle }: { DndDragHandle: () => JSX.Element }) => React.ReactNode;
  id: string;
  index: number;
  wrapperClass?: string;
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          key={`${id}-wrapper`}
          ref={provided.innerRef}
          className={wrapperClass}
          {...provided.draggableProps}
        >
          {children({
            DndDragHandle: () => (
              <DndDragHandle dragHandleProps={provided.dragHandleProps} />
            ),
          })}
        </div>
      )}
    </Draggable>
  );
};

export default function useDragAndDrop() {
  return {
    DndWrapper,
    DndWrapElement,
  };
}
