import "./Separator.css";
import React from "react";
declare function BlockSeparatorComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
    "data-type": string;
}, HTMLElement>;
declare const BlockSeparator: {
    type: {
        id: string;
    };
    component: typeof BlockSeparatorComponent;
    initialData: {
        type: string;
        size: number;
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
export default BlockSeparator;
//# sourceMappingURL=Separator.d.ts.map