import { Locale } from './types/types.js';
export { BlockModuleComponentProps, BlockPluginDefinition } from './types/types.js';
import 'react';

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

declare const BlocksList: ({ apiUrl, containerId }: {
    apiUrl: string;
    containerId: string;
}) => JSX.Element | null;

interface ILinkBlockToItemprops {
    apiUrl: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
}
declare const LinkBlockToItem: ({ groupId, itemId, itemType, }: Partial<ILinkBlockToItemprops>) => JSX.Element;

declare function registerPlugin(plugin: any): void;

export { BlocksEditor, BlocksList, LinkBlockToItem, registerPlugin };
