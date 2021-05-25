import React from "react";
declare function BlockRawComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const blockRaw: {
    type: {
        id: string;
    };
    component: typeof BlockRawComponent;
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
};
export default blockRaw;
//# sourceMappingURL=Raw.d.ts.map