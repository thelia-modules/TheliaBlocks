type BlockModuleType = string;

type BlockModuleComponentProps<T> = {
  data: T;
  onUpdate: <T>(newData: any) => T | void;
  [key: string]: any;
};

export type IBlock = {
  readonly id: string;
  readonly type: BlockModuleType;
  parent: IBlock["id"] | null;
  data: any;
};

export type PageType = {
  id?: string;
  visible: true;
  title: string;
  slug: string;
  jsonContent: IBlock[];
};

export type BlockPluginDefinition<TProp = { [key: string]: any }> = {
  readonly type: BlockModuleType;
  readonly component: (props: {
    data: TProp;
    id: string;
    onUpdate: (props: TProp) => any;
  }) => JSX.Element;
  initialData: TProp;
};
