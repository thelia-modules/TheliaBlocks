/// <reference types="react" />
import "./BlockFromLibrary.css";
import { BlockPluginDefinition, BlockModuleI18n } from "../../types";
declare function BlockFromLibrary({ block, }: {
    block: BlockModuleI18n & {
        id: string;
        initialData: BlockPluginDefinition["initialData"];
        type: BlockPluginDefinition["type"];
    };
}): JSX.Element;
export default BlockFromLibrary;
//# sourceMappingURL=BlockFromLibrary.d.ts.map