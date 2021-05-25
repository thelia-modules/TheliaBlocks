import "./Title.css";
import React from "react";
declare function BlockTitleComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const BlockTitle: {
    type: {
        id: string;
    };
    component: typeof BlockTitleComponent;
    initialData: {
        level: number;
        text: string;
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
export default BlockTitle;
//# sourceMappingURL=Title.d.ts.map