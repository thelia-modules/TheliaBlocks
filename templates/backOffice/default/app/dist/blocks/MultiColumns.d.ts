import React from "react";
declare function MultiColumnsComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const multiCols: {
    type: {
        id: string;
    };
    component: typeof MultiColumnsComponent;
    initialData: {
        id: string;
        group: {
            id: string;
            type: import("../types").BlockModuleType;
            parent: string;
            data: import("./Group").BlockGroupData;
        };
    }[];
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
export default multiCols;
//# sourceMappingURL=MultiColumns.d.ts.map