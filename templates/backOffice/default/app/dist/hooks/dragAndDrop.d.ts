import React from "react";
export default function useDragAndDrop(): {
    DndWrapper: ({ id, children, onDragEnd, wrapperClass }: {
        id: any;
        children: any;
        onDragEnd: any;
        wrapperClass?: string | undefined;
    }) => React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    DndWrapElement: ({ children, id, index, wrapperClass }: {
        children: any;
        id: any;
        index: any;
        wrapperClass?: string | undefined;
    }) => React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
};
//# sourceMappingURL=dragAndDrop.d.ts.map