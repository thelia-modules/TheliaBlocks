export type ErrorType = {
  message: string;
  statusCode: number;
  statusText: string;
};

export type BlockModuleComponentProps<T> = {
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

export type itemBlockGroupsType = {
  id: number;
  itemType: string;
  itemId: number;
};

export type GroupTypeStore = {
  id?: number;
  visible: boolean;
  title: string;
  slug: string;
  itemBlockGroups?: itemBlockGroupsType[];
};

export type GroupTypeResponse = GroupTypeStore & {
  jsonContent?: string;
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
  windowConstants: {
    groupId?: GroupTypeStore["id"],
    itemId?: itemBlockGroupsType["itemId"],
    itemType?: itemBlockGroupsType["itemType"],
  };
};

export type LibraryImage = {
  id: number | null;
  url: string | null;
  fileName: string;
  title: string;
  link?: {
    url: string;
    target?: string;
  }
};
