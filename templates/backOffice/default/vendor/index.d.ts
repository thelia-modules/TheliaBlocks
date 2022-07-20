import { QueryClient } from 'react-query';
import React from 'react';
import { AxiosRequestConfig } from 'axios';
import { Locale } from './types/types';
export { BlockModuleComponentProps, BlockPluginDefinition } from './types/types';

declare function fetcher<T>(url: string, config?: AxiosRequestConfig): Promise<any>;
declare const queryClient: QueryClient;
declare function withQueryClient<T = any>(WrappedComponent: React.ComponentType<T>): (props: any) => JSX.Element;

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

declare function registerPlugin(plugin: any): void;

export { BlocksEditor, BlocksList, fetcher, queryClient, registerPlugin, withQueryClient };
