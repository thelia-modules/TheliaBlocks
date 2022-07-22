import { QueryClient } from 'react-query';
import { AxiosRequestConfig } from 'axios';
import { Locale } from './types/types';
export { BlockModuleComponentProps, BlockPluginDefinition } from './types/types';
import 'react';

declare function fetcher<T>(url: string, config?: AxiosRequestConfig): Promise<any>;
declare const queryClient: QueryClient;

interface IBlocksEditorProps {
    apiUrl: string;
    locales: Locale[];
    containerId: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
    backlink: boolean;
    noRedirect: boolean;
}
declare function BlocksEditor({ apiUrl, containerId, groupId, itemId, itemType, locales, backlink, noRedirect, }: IBlocksEditorProps): JSX.Element | null;

declare const BlocksList: ({ apiUrl }: {
    apiUrl: string;
}) => JSX.Element | null;

interface ILinkBlockToItemprops {
    apiUrl: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
}
declare const LinkBlockToItem: ({ apiUrl, groupId, itemId, itemType, }: ILinkBlockToItemprops) => JSX.Element | null;

declare function registerPlugin(plugin: any): void;

export { BlocksEditor, BlocksList, LinkBlockToItem, fetcher, queryClient, registerPlugin };
