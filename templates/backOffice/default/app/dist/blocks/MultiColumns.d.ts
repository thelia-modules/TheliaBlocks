import { IBlock, BlockPluginDefinition } from "../types";
declare type MultiColumnsData = Array<ColumnData>;
declare type ColumnData = {
    id: string;
    group: IBlock;
};
export declare type MultiColumnsComponentProps = {
    data: MultiColumnsData;
};
declare const multiCols: BlockPluginDefinition<MultiColumnsData>;
export default multiCols;
//# sourceMappingURL=MultiColumns.d.ts.map