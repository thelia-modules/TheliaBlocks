import "./Text.css";
import React from "react";
declare function BlockTextComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const Blocktext: {
    type: {
        id: string;
    };
    component: typeof BlockTextComponent;
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
export default Blocktext;
//# sourceMappingURL=Text.d.ts.map