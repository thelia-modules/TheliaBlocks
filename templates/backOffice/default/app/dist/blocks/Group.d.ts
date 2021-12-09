/// <reference types="react" />
import { BlockModuleComponentProps, BlockPluginDefinition, IBlock } from '../types';
export declare type BlockGroupData = IBlock[];
export declare function BlockGroupComponent({ id, data, onUpdate, excludeBlockType }: BlockModuleComponentProps<BlockGroupData>): JSX.Element;
declare const BlockGroup: BlockPluginDefinition<BlockGroupData>;
export default BlockGroup;
//# sourceMappingURL=Group.d.ts.map