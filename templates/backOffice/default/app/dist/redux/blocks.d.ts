import { IBlock } from "../types";
export declare let initialState: IBlock[];
export declare const setBlocks: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBlock[], string>, addBlock: import("@reduxjs/toolkit").ActionCreatorWithPayload<IBlock, string>, deleteBlock: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, updateBlock: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    id: string;
    data: IBlock["data"];
}, string>, reorderBlocks: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    source: number;
    destination: number;
}, string>, moveBlockUp: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>, moveBlockDown: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, string>;
declare const _default: import("redux").Reducer<IBlock[], import("redux").AnyAction>;
export default _default;
//# sourceMappingURL=blocks.d.ts.map