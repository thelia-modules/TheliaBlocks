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
    groupId?: GroupTypeStore["id"];
    itemId?: itemBlockGroupsType["itemId"];
    itemType?: itemBlockGroupsType["itemType"];
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
  };
};

export type Image = {
  readonly i18n: I18n;
  readonly id: number;
  readonly position: number;
  readonly url: string;
};

export type Price = {
  readonly untaxed: number;
  readonly taxed: number;
};
export type Pse = {
  readonly id: number;
  readonly default: boolean;
  readonly ean: string | null;
  readonly attributes: readonly {
    readonly id: number;
    readonly i18n: I18n;
    readonly values: readonly {
      readonly id: number;
      readonly i18n: I18n;
    }[];
  }[];
  readonly documents: readonly any[];
  readonly newness: 0 | 1;
  readonly price: Price;
  readonly promo: boolean;
  readonly promoPrice: Price;
  readonly quantity: number;
  readonly reference: string;
  readonly weight: number;
};

export type I18n = {
  readonly chapo: string | null;
  readonly description: string | null;
  readonly metaDescription: string | null;
  readonly metaKeywords: string | null;
  readonly metaTitle: string | null;
  readonly postscriptum: string | null;
  readonly title: string | null;
};

export type Product = {
  readonly id: number;
  readonly i18n: I18n;
  readonly images: readonly Image[];
  readonly reference: string;
  readonly url: string;
  readonly virtual: boolean;
  readonly visible: boolean;
  readonly productSaleElements: readonly Pse[];
  readonly brand: readonly {
    readonly i18n: I18n;
    readonly id: number;
    readonly visible: 0 | 1;
  }[];
  readonly defaultCategory: {
    readonly i18n: I18n;
    readonly id: number;
    readonly visible: 0 | 1;
  };
  readonly categories: readonly {
    readonly i18n: I18n;
    readonly id: number;
    readonly visible: 0 | 1;
  }[];
  readonly contents: readonly {
    readonly i18n: I18n;
    readonly id: number;
    readonly visible: 0 | 1;
  }[];
  readonly documents: readonly {
    readonly i18n: I18n;
    readonly id: number;
    readonly visible: 0 | 1;
  }[];
  readonly features: readonly {
    readonly i18n: I18n;
    readonly id: number;
    readonly visible: 0 | 1;
  }[];
};
