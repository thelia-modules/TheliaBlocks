import React from "react";
declare function BlockProductComponent({ data }: {
    data: any;
}): React.DetailedReactHTMLElement<{
    className: string;
}, HTMLElement>;
declare const blockProduct: {
    type: {
        id: string;
    };
    component: typeof BlockProductComponent;
    initialData: {
        productId: null;
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
export default blockProduct;
//# sourceMappingURL=Product.d.ts.map