import React from "react";
declare function BlockHighlightComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const BlockHighlight: {
    type: {
        id: string;
    };
    component: typeof BlockHighlightComponent;
    initialData: {
        value: string;
    };
    title: {
        default: string;
        fr_FR: string;
    };
    description: {
        default: string;
        fr_FR: string;
    };
    image: {
        default: string;
    };
};
export default BlockHighlight;
//# sourceMappingURL=Highlight.d.ts.map