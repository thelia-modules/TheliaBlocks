import "./Image.css";
import React from "react";
declare function BlockImageComponent(props: any): React.DetailedReactHTMLElement<{
    className: string;
    style: {
        minHeight: string;
    };
}, HTMLElement>;
declare const blockImage: {
    type: {
        id: string;
    };
    component: typeof BlockImageComponent;
    initialData: {
        url: null;
        id: null;
        title: string;
        fileName: string;
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
export default blockImage;
//# sourceMappingURL=Image.d.ts.map