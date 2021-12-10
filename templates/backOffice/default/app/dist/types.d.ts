/// <reference types="react" />
export declare type ErrorType = {
    message: string;
    statusCode: number;
    statusText: string;
};
export declare type BlockModuleComponentProps<T> = {
    data: T;
    onUpdate: <T>(newData: any) => T | void;
    [key: string]: any;
};
export declare type i18nString = {
    default: string;
    [key: string]: string;
};
export declare type BlockModuleType = {
    id: string;
};
export declare type BlockModuleI18n = {
    title: i18nString;
    description?: i18nString;
    image?: i18nString;
};
export declare type IBlock = {
    readonly id: string;
    readonly type: BlockModuleType;
    parent: IBlock['id'] | null;
    data: any;
};
export declare type itemBlockGroupsType = {
    id: number;
    itemType: string;
    itemId: number;
};
export declare type GroupTypeStore = {
    id?: number;
    visible: boolean;
    title: string;
    slug: string | null;
    itemBlockGroups?: itemBlockGroupsType[];
};
export declare type GroupTypeResponse = GroupTypeStore & {
    jsonContent?: string;
};
export declare type BlockPluginDefinition<TProp = {
    [key: string]: any;
}> = BlockModuleI18n & {
    readonly type: BlockModuleType;
    readonly component: (props: {
        data: TProp;
        id: string;
        onUpdate: (props: TProp) => any;
        [key: string]: any;
    }) => JSX.Element;
    initialData: TProp;
};
export declare type uiStoreType = {
    isUnsaved: boolean;
    windowConstants: {
        groupId?: GroupTypeStore['id'];
        itemId?: itemBlockGroupsType['itemId'];
        itemType?: itemBlockGroupsType['itemType'];
    };
};
export declare type LibraryImage = {
    id: number | null;
    url: string | null;
    fileName: string;
    title: string;
    link?: {
        url: string;
        target?: string;
    };
};
//# sourceMappingURL=types.d.ts.map