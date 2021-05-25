import React from "react";
declare function BlockVideoComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const blockVideo: {
    type: {
        id: string;
    };
    component: typeof BlockVideoComponent;
    initialData: {
        src: string;
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
export default blockVideo;
//# sourceMappingURL=Video.d.ts.map