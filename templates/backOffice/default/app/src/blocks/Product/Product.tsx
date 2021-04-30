import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

import React, { useState } from "react";

export type BlockProductData = {
  productId: string | null;
};

export type BlockProductComponentProps = BlockModuleComponentProps<BlockProductData>;

function BlockProductComponent({ data }: BlockProductComponentProps) {
  const [query, setQuery] = useState<string>("");
  return (
    <div className="BlockProduct">
      {data.productId ? (
        "TODO: SHOW PRODUCT THUMBNAIL"
      ) : (
        <div>
          <div className="mb-2 font-bold text-red-500">No assigned product</div>
          <div className="relative">
            <input
              type="text"
              value={query}
              className="w-full"
              placeholder="Find a product inside the catalog"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            {query ? (
              <ul className="border border-gray-400 divide-y divide-gray-300 top-full">
                <li
                  onClick={() => {
                    setQuery("");
                  }}
                  className="px-4 py-1 cursor-pointer"
                >
                  Product #1
                </li>
                <li className="px-4 py-1">Product #2</li>
                <li className="px-4 py-1">Product #3</li>
              </ul>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}

const initialData = {
  productId: null,
};

const moduleType = {
  id: "blockProduct",
};

const blockProduct: BlockPluginDefinition<BlockProductData> = {
  type: moduleType,
  component: BlockProductComponent,
  initialData,
  title: {
    default: "Product",
    fr_FR: "Produit",
  },
  description: {
    default: "Display a product",
    fr_FR: "Affiche un produit du catalogue",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockProduct",
  },
};

export default blockProduct;
