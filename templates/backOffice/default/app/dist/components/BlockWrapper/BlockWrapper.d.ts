import './BlockWrapper.css';
import React from 'react';
import { IBlock } from '../../types';
declare function BlockWrapper({ children, block, canMove, canDelete, handleDelete, DndDragHandle }: {
    children: React.ReactNode;
    block: IBlock;
    canMove?: boolean;
    canDelete?: boolean;
    handleDelete: (block: IBlock) => any;
    DndDragHandle: () => JSX.Element;
}): JSX.Element;
export default BlockWrapper;
//# sourceMappingURL=BlockWrapper.d.ts.map