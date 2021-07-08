/// <reference types="react" />
import { IBlock } from "../types";
declare function Block({ block, handleUpdate, }: {
    block: IBlock;
    handleUpdate?: (newData: typeof block.data) => void;
}): JSX.Element | null;
export default Block;
//# sourceMappingURL=Block.d.ts.map