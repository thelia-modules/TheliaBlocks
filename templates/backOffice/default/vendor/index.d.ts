declare function BlocksEditor({
  apiUrl,
}: {
  apiUrl: string;
}): JSX.Element | null;

declare function registerPlugin(plugin: any): void;

export {
  BlocksEditor,
  BlocksList,
  fetcher,
  queryClient,
  registerPlugin,
  withQueryClient,
};
