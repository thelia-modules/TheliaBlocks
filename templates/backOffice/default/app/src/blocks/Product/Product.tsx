import {
  BlockModuleComponentProps,
  BlockPluginDefinition,
  Product as ProductType,
} from "../../types";
import React, { useCallback, useMemo, useState } from "react";
import { useProductByTitle, useProductsByIds } from "../../hooks/data";

export type BlockProductData = {
  selectedProductsId: string[];
};

export type BlockProductComponentProps =
  BlockModuleComponentProps<BlockProductData>;

function Product({
  product,
  handleDelete,
}: {
  product: ProductType;
  handleDelete: Function;
}) {
  return (
    <div className="p-4 border">
      <div className="text-2xl font-bold">{product.i18n.title}</div>
      <a className="text-red-600" onClick={() => handleDelete(product.id)}>
        delete
      </a>
    </div>
  );
}

function Search({
  markProductAsSelected,
}: {
  markProductAsSelected: Function;
}) {
  const [query, setQuery] = useState<string>("");
  const [showSearchResult, setShowSearchResult] = useState<Boolean>(false);
  const products = useProductByTitle(query); //Liste des Produits concernés par la recherche par titres

  const productsFromSearchResult = useMemo(() => {
    if (Array.isArray(products.data)) {
      return products.data;
    }

    return [];
  }, [products.data]);

  return (
    <div
      onMouseLeave={() => {
        setShowSearchResult(false);
      }}
    >
      <input
        type="text"
        value={query}
        className="w-full px-8 py-4 font-sans text-2xl"
        placeholder="Find a product inside the catalog"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onFocus={() => {
          setShowSearchResult(true);
        }}
      />
      <div className="relative">
        {showSearchResult && productsFromSearchResult.length > 0 ? ( //Affiche les choix par rapport à la recherche par titres
          <ul className="absolute inset-x-0 top-0 z-50 font-sans text-2xl bg-white border border-gray-400 divide-y divide-gray-400">
            {productsFromSearchResult.map((product) => (
              <li
                key={product.id}
                onClick={() => {
                  markProductAsSelected(product.id);
                }}
                className="px-8 py-4 cursor-pointer hover:bg-gray-100"
              >
                {product.i18n.title}
              </li>
            ))}
          </ul>
        ) : null}
        {products.isSuccess && productsFromSearchResult.length === 0 ? (
          <div className="p-4">No results</div>
        ) : null}
      </div>
    </div>
  );
}

function BlockProductComponent({ data, onUpdate }: BlockProductComponentProps) {
  const productsElements = useProductsByIds(data.selectedProductsId); //Liste des Produits

  const markProductAsSelected = useCallback(
    (productId: string) => {
      onUpdate({
        ...data,
        selectedProductsId: [...data.selectedProductsId, productId],
      });
    },
    [onUpdate, data]
  );

  const unselectProduct = useCallback(
    (productIdToRemove: string) => {
      let newProductListIds = data.selectedProductsId.filter(function (
        productId
      ) {
        return productIdToRemove !== productId;
      });
      onUpdate({ ...data, selectedProductsId: newProductListIds });
    },
    [onUpdate, data]
  );

  return (
    <div className="p-4 BlockProduct">
      <div className="mb-4 ">
        <Search markProductAsSelected={markProductAsSelected} />
      </div>
      <div className="">
        {data.selectedProductsId.length > 0 ? (
          <div>
            {productsElements.status === "success" ? (
              <div className="grid grid-flow-col gap-2">
                {productsElements.data.map((product: ProductType) => {
                  return (
                    <Product product={product} handleDelete={unselectProduct} />
                  );
                })}
              </div>
            ) : (
              //Tant que les produits ne sont pas chargés affiche :
              <div className="p-10 m-2 font-sans text-2xl rounded-2xl">
                <div className="font-sans text-2xl">Loading products</div>
              </div>
            )}
          </div>
        ) : (
          //Si Aucun Produit sélectionné dans le Block
          <div className="grid ">
            <div className="p-2 border border-gray-200 border-dashed">
              <p className="font-sans text-2xl">No selected product(s)</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const initialData: BlockProductData = {
  selectedProductsId: [],
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
    fr_FR: "Affiche des produits du catalogue",
  },
  image: {
    default: "https://source.unsplash.com/featured/300x250?nature&blockProduct",
  },
};

export default blockProduct;
