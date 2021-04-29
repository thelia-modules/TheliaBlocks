type BlockModuleComponentProps<T> = {
  data: T;
  onUpdate: <T>(newData: any) => T | void;
  [key: string]: any;
};

export type i18nString = {
  default: string,
  [key:string]: string,
}

export type BlockModuleType = {
  id: string;
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
  id?: string;
  visible: true;
  title: string;
  slug: string;
};

export type GroupTypeResponse = GroupTypeStore & {
  jsonContent?: string;
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

export type uiStoreType = {
  isUnsaved: boolean;
  hashSaved: string;
};
