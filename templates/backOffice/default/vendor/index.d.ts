import { Locale, BlockModuleComponentProps, IBlock, BlockPluginDefinition, Video, GroupTypeResponse } from './utils/types.js';
export { BlockModuleComponentProps, BlockPluginDefinition, IBlock } from './utils/types.js';
export { nanoid as generateId } from 'nanoid';
import * as react from 'react';
import { ReactElement, ChangeEvent, ReactNode, InputHTMLAttributes } from 'react';

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
declare function LocaleProvider({ locales, prefix, children, }: {
    locales: Locale[];
    prefix: string;
    children: ReactElement;
}): JSX.Element;

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
        cz: string;
        pl: string;
        de: string;
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
        cz: string;
        pl: string;
        de: string;
    };
};

declare type BlockButtonData = {
    label: string;
    url: string;
    type: string;
    target: HTMLAnchorElement["target"];
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
        cz: string;
        pl: string;
        de: string;
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
        cz: string;
        pl: string;
        de: string;
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
    icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    title: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
        cz: string;
        pl: string;
        de: string;
    };
    description: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
        cz: string;
        pl: string;
        de: string;
    };
};

declare type BlockHighlightData = {
    value: string;
    style: {
        backgroundColor: string;
    };
};
declare function BlockHighlightComponent({ data, onUpdate, }: BlockModuleComponentProps<BlockHighlightData>): JSX.Element;
declare const BlockHighlight: {
    type: {
        id: string;
    };
    component: typeof BlockHighlightComponent;
    initialData: {
        value: string;
        style: {
            backgroundColor: string;
        };
    };
    icon: react.FunctionComponent<react.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
    }>;
    title: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
        cz: string;
        pl: string;
        de: string;
    };
    description: {
        default: string;
        fr: string;
        en: string;
        es: string;
        it: string;
        cz: string;
        pl: string;
        de: string;
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
            cz: string;
            pl: string;
            de: string;
        };
        layout: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
        };
        title: {
            default: string;
            fr: string;
            en: string;
            es: string;
            it: string;
            cz: string;
            pl: string;
            de: string;
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
            cz: string;
            pl: string;
            de: string;
        };
    };
};

declare const index$1_Columns: typeof Columns;
declare const index$1_Accordion: typeof Accordion;
declare const index$1_Group: typeof Group;
declare namespace index$1 {
  export {
    blockRaw as Raw,
    Blocktext as Text,
    BlockTitle as Title,
    blockVideo as Video,
    index$1_Columns as Columns,
    BlockSeparator as Separator,
    blockButton as Button,
    index$1_Accordion as Accordion,
    blockProduct as Product,
    blockCategory as Category,
    blockTable as Table,
    BlockList as List,
    index$1_Group as Group,
    BlockHighlight as Highlight,
  };
}

declare const AddBlocks: ({ excludeLayout, inLayout, }: {
    excludeLayout?: boolean | undefined;
    inLayout?: boolean | undefined;
}) => JSX.Element;

declare const Block: ({ block, inLayout, className, DndDragHandle, }: {
    block: IBlock;
    inLayout?: boolean | undefined;
    className?: string | undefined;
    DndDragHandle: () => JSX.Element;
}) => JSX.Element;

declare const BlockControls: ({ blockId, blockIndex, inLayout, DndDragHandle, }: {
    blockId: string;
    blockIndex: number;
    inLayout?: boolean | undefined;
    DndDragHandle: () => JSX.Element;
}) => JSX.Element;

declare function BlocksContent(): JSX.Element;

declare const BlocksTable: () => JSX.Element;

declare const BlockTooltip: ({ title, description, image, }: {
    title: string;
    description?: string | undefined;
    image?: string | undefined;
}) => JSX.Element;

declare function GroupLocale(): JSX.Element;

declare function GroupTitle({ isGroupLinkedToCurrentContent, onLink, isLinking, }: {
    isGroupLinkedToCurrentContent: boolean;
    onLink: () => void;
    isLinking: boolean;
}): JSX.Element;

declare const Iframe: ({ content }: {
    content: string;
}) => JSX.Element;

declare const Input: react.ForwardRefExoticComponent<{
    value?: string | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    className?: string | undefined;
    emphasize?: boolean | undefined;
    placeholder?: string | undefined;
    icon?: ReactNode;
    iconAlignment?: "right" | "left" | undefined;
    type?: "text" | "color" | "password" | "email" | undefined;
    isValid?: boolean | undefined;
    label?: string | undefined;
    id: string;
    info?: ReactNode;
    error?: string | undefined;
} & InputHTMLAttributes<HTMLInputElement> & react.RefAttributes<HTMLInputElement>>;

declare const Select: react.ForwardRefExoticComponent<{
    value: string;
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
    className?: string | undefined;
    label?: string | undefined;
    id: string;
    info?: ReactNode;
    error?: string | undefined;
    children: ReactNode;
} & InputHTMLAttributes<HTMLSelectElement> & react.RefAttributes<HTMLSelectElement>>;

declare const TextArea: react.ForwardRefExoticComponent<{
    rows?: number | undefined;
    id: string;
    label?: string | undefined;
    info?: ReactNode;
    error?: string | undefined;
    className?: string | undefined;
} & InputHTMLAttributes<HTMLTextAreaElement> & react.RefAttributes<HTMLTextAreaElement>>;

declare const LinkedContentTable: ({ linkedContents, setIsItemBlockModalOpen, }: {
    linkedContents: GroupTypeResponse["itemBlockGroups"];
    setIsItemBlockModalOpen: Function;
}) => JSX.Element;

declare const LayoutHeader: ({ title, icon, open, setOpen, onDelete, }: {
    title: string;
    icon?: ReactNode;
    open: boolean;
    setOpen: Function;
    onDelete?: Function | undefined;
}) => JSX.Element;

declare const Modal: ({ modalClassName, isOpen, setIsOpen, title, children, }: {
    modalClassName?: string | undefined;
    isOpen: boolean;
    setIsOpen: Function;
    title: string;
    children: React.ReactNode;
}) => JSX.Element;

declare function Preview({ isOpen, setIsOpen, setIsPreviewLoading, timestamp, data, }: {
    isOpen: boolean;
    setIsOpen: Function;
    setIsPreviewLoading: Function;
    timestamp: number;
    data?: string;
}): JSX.Element;

declare const Sidebar: () => JSX.Element;

declare const ToolBar: () => JSX.Element;

declare const index_AddBlocks: typeof AddBlocks;
declare const index_Block: typeof Block;
declare const index_BlockControls: typeof BlockControls;
declare const index_BlocksContent: typeof BlocksContent;
declare const index_BlocksTable: typeof BlocksTable;
declare const index_BlockTooltip: typeof BlockTooltip;
declare const index_GroupLocale: typeof GroupLocale;
declare const index_GroupTitle: typeof GroupTitle;
declare const index_Iframe: typeof Iframe;
declare const index_Input: typeof Input;
declare const index_Select: typeof Select;
declare const index_TextArea: typeof TextArea;
declare const index_LayoutHeader: typeof LayoutHeader;
declare const index_LinkBlockToItem: typeof LinkBlockToItem;
declare const index_Modal: typeof Modal;
declare const index_Preview: typeof Preview;
declare const index_Sidebar: typeof Sidebar;
declare const index_ToolBar: typeof ToolBar;
declare namespace index {
  export {
    index_AddBlocks as AddBlocks,
    index_Block as Block,
    index_BlockControls as BlockControls,
    index_BlocksContent as BlocksContent,
    index_BlocksTable as BlocksTable,
    index_BlockTooltip as BlockTooltip,
    index_GroupLocale as GroupLocale,
    index_GroupTitle as GroupTitle,
    index_Iframe as Iframe,
    index_Input as Input,
    index_Select as Select,
    index_TextArea as TextArea,
    LinkedContentTable as ItemBlockGroupTable,
    index_LayoutHeader as LayoutHeader,
    index_LinkBlockToItem as LinkBlockToItem,
    index_Modal as Modal,
    index_Preview as Preview,
    index_Sidebar as Sidebar,
    index_ToolBar as ToolBar,
  };
}

export { BlocksEditor, BlocksList, LinkBlockToItem, LocaleContext, LocaleProvider, index$1 as blocks, index as components, registerPlugin };
