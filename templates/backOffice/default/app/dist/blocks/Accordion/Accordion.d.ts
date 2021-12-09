import './Accordion.css';
import { IBlock, BlockPluginDefinition } from '../../types';
declare type AccordionData = Array<ItemData>;
declare type ItemData = {
    id: string;
    title: string;
    group: IBlock;
};
export declare type AccordionComponentProps = {
    data: AccordionData;
};
declare const accordionBlock: BlockPluginDefinition<AccordionData>;
export default accordionBlock;
//# sourceMappingURL=Accordion.d.ts.map