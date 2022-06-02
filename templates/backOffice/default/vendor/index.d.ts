declare type Locale = {
    id: number;
    title: string;
    code: string;
    active: boolean;
};

declare function BlocksEditor({ apiUrl, containerId, groupId, locales, }: {
    apiUrl: string;
    locales: Locale[];
    containerId: string;
    groupId?: number;
}): JSX.Element | null;

declare function BlocksList({ apiUrl }: {
    apiUrl: string;
}): JSX.Element | null;

export { BlocksEditor, BlocksList };
