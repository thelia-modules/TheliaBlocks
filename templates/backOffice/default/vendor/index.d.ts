declare function BlocksEditor({
  apiUrl,
}: {
  apiUrl: string;
}): JSX.Element | null;

interface ILinkBlockToItemprops {
  apiUrl: string;
  groupId?: number;
  itemId?: number;
  itemType?: string;
}
declare const LinkBlockToItem: ({
  apiUrl,
  groupId,
  itemId,
  itemType,
}: ILinkBlockToItemprops) => JSX.Element | null;

declare function registerPlugin(plugin: any): void;

export {
  BlocksEditor,
  BlocksList,
  fetcher,
  queryClient,
  registerPlugin,
  withQueryClient,
};
