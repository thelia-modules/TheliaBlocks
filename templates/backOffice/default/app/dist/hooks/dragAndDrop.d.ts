import React from "react";
import { DropResult } from "react-beautiful-dnd";
export default function useDragAndDrop(): {
    DndWrapper: ({ id, children, onDragEnd, wrapperClass, }: {
        id: string;
        children: React.ReactNode;
        onDragEnd: (e: DropResult) => void;
        wrapperClass?: string | undefined;
    }) => JSX.Element;
    DndWrapElement: ({ children, id, index, wrapperClass, }: {
        children: ({ DndDragHandle }: {
            DndDragHandle: () => JSX.Element;
        }) => React.ReactNode;
        id: string;
        index: number;
        wrapperClass?: string | undefined;
    }) => JSX.Element;
};
//# sourceMappingURL=dragAndDrop.d.ts.map