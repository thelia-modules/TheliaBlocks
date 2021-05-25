import React from "react";
declare function BlockButtonComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const blockButton: {
    type: {
        id: string;
    };
    component: typeof BlockButtonComponent;
    initialData: {
        label: string;
        url: string;
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
export default blockButton;
//# sourceMappingURL=Button.d.ts.map