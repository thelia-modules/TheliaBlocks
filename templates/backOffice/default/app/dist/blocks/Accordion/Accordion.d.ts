import React from "react";
import "./Accordion.css";
declare function AccordionComponent({ data, onUpdate }: {
    data: any;
    onUpdate: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const accordionBlock: {
    type: {
        id: string;
    };
    component: typeof AccordionComponent;
    initialData: {
        id: string;
        title: string;
        group: {
            id: string;
            type: {
                id: string;
            };
            parent: string;
            data: {
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
export default accordionBlock;
//# sourceMappingURL=Accordion.d.ts.map