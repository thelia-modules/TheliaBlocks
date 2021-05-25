import React from "react";
export declare function BlockGroupComponent({ id, data, onUpdate, excludeBlockType }: {
    id: any;
    data: any;
    onUpdate: any;
    excludeBlockType: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const BlockGroup: {
    type: {
        id: string;
    };
    component: typeof BlockGroupComponent;
    initialData: {
        id: string;
        type: {
            id: string;
            title: {
                default: string;
            };
        };
        parent: null;
        data: null;
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
export default BlockGroup;
//# sourceMappingURL=Group.d.ts.map