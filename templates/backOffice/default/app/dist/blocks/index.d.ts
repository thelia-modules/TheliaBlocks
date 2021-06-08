declare const _default: {
    Button: import("../types").BlockPluginDefinition<import("./Button").BlockButtonData>;
    ImageBlock: import("../types").BlockPluginDefinition<import("../types").LibraryImage>;
    Group: import("../types").BlockPluginDefinition<import("./Group").BlockGroupData>;
    MultiColumnss: import("../types").BlockPluginDefinition<{
        id: string;
        group: import("../types").IBlock;
    }[]>;
    Product: import("../types").BlockPluginDefinition<import("./Product/Product").BlockProductData>;
    Separator: import("../types").BlockPluginDefinition<import("./Separator/Separator").BlockSeparatorData>;
    Text: import("../types").BlockPluginDefinition<import("./Text").BlockTextData>;
    Title: import("../types").BlockPluginDefinition<import("./Title/Title").BlockTitleData>;
    Video: import("../types").BlockPluginDefinition<import("./Video").BlockVideoData>;
    Highlight: import("../types").BlockPluginDefinition<import("./Highlight").BlockHighlightData>;
    List: import("../types").BlockPluginDefinition<import("./List/List").BlockListData>;
    Accordion: import("../types").BlockPluginDefinition<{
        id: string;
        title: string;
        group: import("../types").IBlock;
    }[]>;
    Raw: import("../types").BlockPluginDefinition<import("./Raw").BlockRawData>;
};
export default _default;
//# sourceMappingURL=index.d.ts.map