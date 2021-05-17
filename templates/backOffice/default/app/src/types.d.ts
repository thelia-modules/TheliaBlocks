export type ErrorType = {
  message: string;
  statusCode: number;
  statusText: string;
};

type BlockModuleComponentProps<T> = {
  data: T;
  onUpdate: <T>(newData: any) => T | void;
  [key: string]: any;
};

export type i18nString = {
  default: string;
  [key: string]: string;
};

export type BlockModuleType = {
  id: string;
};
export type BlockModuleI18n = {
  title: i18nString;
  description?: i18nString;
  image?: i18nString;
};

export type IBlock = {
  readonly id: string;
  readonly type: BlockModuleType;
  parent: IBlock["id"] | null;
  data: any;
};

export type GroupTypeStore = {
  id?: number;
  visible: boolean;
  title: string;
  slug: string;
  itemBlockGroups?: { id: number; itemType: string; itemId: number }[];
};

export type GroupTypeResponse = GroupTypeStore & {
  jsonContent?: string;
  itemBlockGroups?: { id: number; itemType: string; itemId: number }[];
};

export type BlockPluginDefinition<TProp = { [key: string]: any }> =
  BlockModuleI18n & {
    readonly type: BlockModuleType;
    readonly component: (props: {
      data: TProp;
      id: string;
      onUpdate: (props: TProp) => any;
      [key: string]: any;
    }) => JSX.Element;
    initialData: TProp;
  };

export type uiStoreType = {
  isUnsaved: boolean;
};

export type LibraryImage = {
  id: number | null;
  url: string | null;
  fileName: string;
  title: string;
};
