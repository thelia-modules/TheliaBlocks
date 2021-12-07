/// <reference types="react" />
export declare const __PLUGINS: ({
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Text").BlockTextData;
        id: string;
        onUpdate: (props: import("./blocks/Text").BlockTextData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Text").BlockTextData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Title/Title").BlockTitleData;
        id: string;
        onUpdate: (props: import("./blocks/Title/Title").BlockTitleData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Title/Title").BlockTitleData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./types").LibraryImage;
        id: string;
        onUpdate: (props: import("./types").LibraryImage) => any;
    }) => JSX.Element;
    initialData: import("./types").LibraryImage;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: {
            id: string;
            group: import("./types").IBlock;
        }[];
        id: string;
        onUpdate: (props: {
            id: string;
            group: import("./types").IBlock;
        }[]) => any;
    }) => JSX.Element;
    initialData: {
        id: string;
        group: import("./types").IBlock;
    }[];
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Separator/Separator").BlockSeparatorData;
        id: string;
        onUpdate: (props: import("./blocks/Separator/Separator").BlockSeparatorData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Separator/Separator").BlockSeparatorData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Button").BlockButtonData;
        id: string;
        onUpdate: (props: import("./blocks/Button").BlockButtonData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Button").BlockButtonData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/List/List").BlockListData;
        id: string;
        onUpdate: (props: import("./blocks/List/List").BlockListData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/List/List").BlockListData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: {
            id: string;
            title: string;
            group: import("./types").IBlock;
        }[];
        id: string;
        onUpdate: (props: {
            id: string;
            title: string;
            group: import("./types").IBlock;
        }[]) => any;
    }) => JSX.Element;
    initialData: {
        id: string;
        title: string;
        group: import("./types").IBlock;
    }[];
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Video").BlockVideoData;
        id: string;
        onUpdate: (props: import("./blocks/Video").BlockVideoData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Video").BlockVideoData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Product/Product").BlockProductData;
        id: string;
        onUpdate: (props: import("./blocks/Product/Product").BlockProductData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Product/Product").BlockProductData;
    id: string;
} | {
    title: import("./types").i18nString;
    description?: import("./types").i18nString | undefined;
    image?: import("./types").i18nString | undefined;
    type: import("./types").BlockModuleType;
    component: (props: {
        [key: string]: any;
        data: import("./blocks/Group").BlockGroupData;
        id: string;
        onUpdate: (props: import("./blocks/Group").BlockGroupData) => any;
    }) => JSX.Element;
    initialData: import("./blocks/Group").BlockGroupData;
    id: string;
})[];
export declare function registerPlugin(plugin: any): void;
export declare function usePlugins(): any[];
//# sourceMappingURL=pluginManager.d.ts.map