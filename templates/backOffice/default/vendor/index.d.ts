declare type Locale = {
    id: number;
    title: string;
    code: string;
    active: boolean;
};

declare function BlocksEditor({ apiUrl, containerId, groupId, itemId, itemType, locales, backlink, }: {
    apiUrl: string;
    locales: Locale[];
    containerId: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
    backlink: boolean;
}): JSX.Element | null;

declare function BlocksList({ apiUrl }: {
    apiUrl: string;
}): JSX.Element | null;

export { BlocksEditor, BlocksList };
