import { Locale, BlockModuleComponentProps, IBlock, BlockPluginDefinition, Video } from './types/types.js';
export { BlockModuleComponentProps, BlockPluginDefinition, IBlock } from './types/types.js';
export { nanoid as generateId } from 'nanoid';
import * as react from 'react';

interface IBlocksEditorProps {
    apiUrl: string;
    locales: Locale[];
    containerId: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
    itemConfiguration?: boolean;
    isEditing?: boolean;
    backlink: boolean;
    noRedirect: boolean;
}
declare function BlocksEditor({ apiUrl, containerId, groupId, itemId, itemType, locales, itemConfiguration, isEditing, backlink, noRedirect, }: IBlocksEditorProps): JSX.Element | null;

declare const BlocksList: ({ apiUrl, containerId, locales, }: {
    apiUrl: string;
    containerId: string;
    locales: Locale[];
}) => JSX.Element | null;

interface ILinkBlockToItemprops {
    apiUrl: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
}
declare const LinkBlockToItem: ({ groupId, itemId, itemType, }: Partial<ILinkBlockToItemprops>) => JSX.Element;

declare function registerPlugin(plugin: any): void;

declare type AccordionContentData = IBlock[];
declare type AccordionData = {
    title: string;
    content: AccordionContentData[];
};
declare const Accordion: {
    type: {
        id: string;
    };
    component: ({ data, onUpdate, }: BlockModuleComponentProps<AccordionData>) => JSX.Element;
    initialData: AccordionData;
    layout: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
    title: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
    icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    description: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
    image: {
        default: string;
    };
};

declare type BlockButtonData = {
    label: string;
    url: string;
    type: string;
};
declare const blockButton: BlockPluginDefinition<BlockButtonData>;

declare type BlockProductData = {
    productList: string[];
};
declare const blockProduct: BlockPluginDefinition<BlockProductData>;

declare type BlockRawData = {
    value: string;
};
declare const blockRaw: BlockPluginDefinition<BlockRawData>;

declare type BlockSeparatorData = {
    type: string;
    size: number;
};
declare const BlockSeparator: {
    type: {
        id: string;
    };
    component: ({ data, onUpdate, }: BlockModuleComponentProps<BlockSeparatorData>) => JSX.Element;
    initialData: {
        type: string;
        size: number;
    };
    title: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
    icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    description: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
    image: {
        default: string;
    };
};

declare type BlockTextData = {
    value: string;
};
declare const Blocktext: BlockPluginDefinition<BlockTextData>;

declare type BlockTitleData = {
    level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    text: string;
};
declare const BlockTitle: BlockPluginDefinition<BlockTitleData>;

declare const blockVideo: BlockPluginDefinition<Video>;

declare enum typeList {
    Unordered = "ul",
    Ordered = "ol"
}
declare type BlockListData = {
    type: typeList;
    values: string[];
};
declare const BlockList: BlockPluginDefinition<BlockListData>;

declare const Columns: {
    TwoColumns: {
        component: ({ data, onUpdate, }: BlockModuleComponentProps<IBlock[][]>) => JSX.Element;
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        layout: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        initialData: never[][];
        customIcon: JSX.Element;
        type: {
            id: string;
        };
        icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;
        description: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        image: {
            default: string;
        };
    };
    ThreeColumns: {
        component: ({ data, onUpdate, }: BlockModuleComponentProps<IBlock[][]>) => JSX.Element;
        type: {
            id: string;
        };
        layout: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        initialData: never[][];
        customIcon: JSX.Element;
        icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;
        description: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        image: {
            default: string;
        };
    };
    FourColumns: {
        component: ({ data, onUpdate, }: BlockModuleComponentProps<IBlock[][]>) => JSX.Element;
        layout: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        initialData: never[][];
        customIcon: JSX.Element;
        type: {
            id: string;
        };
        icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;
        description: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        image: {
            default: string;
        };
    };
    FiveColumns: {
        component: ({ data, onUpdate, }: BlockModuleComponentProps<IBlock[][]>) => JSX.Element;
        layout: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        initialData: never[][];
        customIcon: JSX.Element;
        type: {
            id: string;
        };
        icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;
        description: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        image: {
            default: string;
        };
    };
    SixColumns: {
        component: ({ data, onUpdate, }: BlockModuleComponentProps<IBlock[][]>) => JSX.Element;
        layout: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        initialData: never[][];
        customIcon: JSX.Element;
        type: {
            id: string;
        };
        icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
        }>;
        description: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
        };
        image: {
            default: string;
        };
    };
};

declare const index_Columns: typeof Columns;
declare const index_Accordion: typeof Accordion;
declare namespace index {
  export {
    blockRaw as Raw,
    Blocktext as Text,
    BlockTitle as Title,
    blockVideo as Video,
    index_Columns as Columns,
    BlockSeparator as Separator,
    blockButton as Button,
    index_Accordion as Accordion,
    blockProduct as Product,
    BlockList as List,
  };
}

export { BlocksEditor, BlocksList, LinkBlockToItem, index as blocks, registerPlugin };
