import "./BlockWrapper.css";
import React from "react";
declare function BlockWrapper({ children, block, canMove, canDelete, handleDelete, DndDragHandle }: {
    children: any;
    block: any;
    canMove?: boolean | undefined;
    canDelete?: boolean | undefined;
    handleDelete: any;
    DndDragHandle: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
export default BlockWrapper;
//# sourceMappingURL=BlockWrapper.d.ts.map