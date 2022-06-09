import { Locale } from './types/types';
export { BlockModuleComponentProps, BlockPluginDefinition } from './types/types';
import 'react';

declare function BlocksEditor({ apiUrl, containerId, groupId, itemId, itemType, locales, backlink, noRedirect, }: {
    apiUrl: string;
    locales: Locale[];
    containerId: string;
    groupId?: number;
    itemId?: number;
    itemType?: string;
    backlink: boolean;
    noRedirect: boolean;
}): JSX.Element | null;

declare function BlocksList({ apiUrl }: {
    apiUrl: string;
}): JSX.Element | null;

declare function registerPlugin(plugin: any): void;

export { BlocksEditor, BlocksList, registerPlugin };
