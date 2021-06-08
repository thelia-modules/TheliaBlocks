import "./List.css";
import { BlockPluginDefinition } from "../../types";
declare enum typeList {
    Unordered = "ul",
    Ordered = "ol"
}
export declare type BlockListData = {
    type: typeList;
    values: string[];
};
declare const BlockList: BlockPluginDefinition<BlockListData>;
export default BlockList;
//# sourceMappingURL=List.d.ts.map