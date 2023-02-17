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
    urlPrefix: string;
    itemConfiguration?: boolean;
    isEditing?: boolean;
    backlink: boolean;
    noRedirect: boolean;
}
declare function BlocksEditor({ apiUrl, containerId, groupId, itemId, itemType, locales, urlPrefix, itemConfiguration, isEditing, backlink, noRedirect, }: IBlocksEditorProps): JSX.Element | null;

declare const BlocksList: ({ apiUrl, containerId, locales, urlPrefix, }: {
    apiUrl: string;
    containerId: string;
    locales: Locale[];
    urlPrefix: string;
}) => JSX.Element | null;

interface ILinkBlockToItemprops {
    apiUrl: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
}
declare const LinkBlockToItem: ({ groupId, itemId, itemType, }: Partial<ILinkBlockToItemprops>) => JSX.Element;

declare function registerPlugin(plugin: any): void;

declare const LocaleContext: react.Context<{
    currentLocale: Locale["code"];
    locales: Locale[];
    prefix: string;
    getUrlWithPrefix: (url: string, prefix?: string) => string;
    setCurrentLocale: Function;
}>;

declare type AccordionContentData = IBlock[];
declare type AccordionItem = {
    id: string;
    title: string;
    content: AccordionContentData;
};
declare type AccordionData = {
    title: string;
    group: AccordionItem[];
};
declare const Accordion: {
    type: {
        id: string;
    };
    component: ({ data, onUpdate, }: BlockModuleComponentProps<AccordionData>) => JSX.Element;
    initialData: AccordionData;
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

declare type BlockCategoryData = {
    categoryList: string[];
};
declare const blockCategory: BlockPluginDefinition<BlockCategoryData>;

declare type ColLink = {
    type: "link";
    value: {
        link: string;
        label: string;
    };
};
declare type ColText = {
    type: "text";
    value: string;
};
declare type Col = ColLink | ColText;
declare type BlockTableData = {
    rowAmount: number;
    colAmount: number;
    headers: string[];
    rows: Col[][];
};

declare const blockTable: BlockPluginDefinition<BlockTableData>;

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

declare type GroupContentData = IBlock[];
declare type GroupData = {
    content: GroupContentData[];
};
declare const Group: {
    type: {
        id: string;
    };
    component: ({ data, onUpdate, noExclude, }: BlockModuleComponentProps<GroupData> & {
        noExclude?: boolean | undefined;
    }) => JSX.Element;
    initialData: GroupData;
    title: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
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

declare type BlockHighlightData = {
    value: string;
};
declare function BlockHighlightComponent({ data, onUpdate, }: BlockModuleComponentProps<BlockHighlightData>): JSX.Element;
declare const BlockHighlight: {
    type: {
        id: string;
    };
    component: typeof BlockHighlightComponent;
    initialData: {
        value: string;
    };
    title: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
    };
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
declare const index_Group: typeof Group;
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
    blockCategory as Category,
    blockTable as Table,
    BlockList as List,
    index_Group as Group,
    BlockHighlight as Highlight,
  };
}

export { BlocksEditor, BlocksList, LinkBlockToItem, LocaleContext, index as blocks, registerPlugin };
