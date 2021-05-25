import "./List.css";
import React from "react";
declare function BlockListComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const BlockList: {
    type: {
        id: string;
    };
    component: typeof BlockListComponent;
    initialData: {
        type: any;
        values: string[];
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
export default BlockList;
//# sourceMappingURL=List.d.ts.map