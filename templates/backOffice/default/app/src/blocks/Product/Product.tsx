import { BlockModuleComponentProps, BlockPluginDefinition } from "../../types";

import { useProductByTitle, useProductsByIds } from "../../hooks/data";
import React, { useState } from "react";

export type BlockProductData = {
  productList: string[];
};

export type BlockProductComponentProps =
  BlockModuleComponentProps<BlockProductData>;

function Product({
  product,
  data,
  onUpdate,
}: {
  product: any;
  data: any;
  onUpdate: Function;
}) {
  function removeFromList(productId: any) {
    //Fonction du bouton Supprimer
    let newProductList = data.productList.filter(function (product: any) {
      return product != productId;
    });
    onUpdate({ ...data, productList: newProductList });
  }
  return (
    <div className="flex flex-row col-span-1 m-4 font-sans bg-gray-100 shadow-lg rounded-2xl">
      <div className="w-full">
        <div className="flex flex-col px-8 pb-2 bg-lime-100 rounded-2xl">
          {product.images.length > 0 ? (
            <img className="w-full" src="" alt="image" />
          ) : null}
          <div className="pt-6 m-2 text-2xl font-bold">
            {product.i18n.title}
          </div>

          <div className="self-end">
            <span className="m-2 font-sans text-xl text-gray-600 place-self-end">
              {product.productSaleElements[0].price.untaxed} $
            </span>
            <span className="m-2 text-xl font-bold text-gray-700 place-self-end">
              {product.productSaleElements[0].price.taxed} $
            </span>
          </div>

          <div className="py-4">
            {product.categories.map(function (category: any) {
              return (
                <span className="relative inline-flex px-3 py-1 font-sans text-xl font-semibold text-gray-700 bg-gray-200 rounded-full">
                  <p className="inline-block m-2">{category.i18n.title}</p>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <a
        className="relative inline-block w-12 h-12 m-4 bg-red-400 rounded-full hover:text-black hover:bg-red-600"
        onClick={() => removeFromList(product.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="relative w-8 h-8 m-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </a>
    </div>
  );
}

function Filters({
  products,
  setCategoriesId,
  filters,
  setFilters,
}: {
  products: any;
  setCategoriesId: any;
  filters: any;
  setFilters: Function;
}) {
  const [categories, setCategories] = useState<
    Array<{
      i18n: {
        chapo: string;
        description: string;
        metaDescription: string;
        metaKeywords: string;
        metaTitle: string;
        postsciptum: string;
        title: string;
      };
      id: number;
      visible: number;
    }>
  >([]);
  const [activeCategories, setActiveCategories] = useState<
    Array<{
      i18n: {
        chapo: string;
        description: string;
        metaDescription: string;
        metaKeywords: string;
        metaTitle: string;
        postsciptum: string;
        title: string;
      };
      id: number;
      visible: number;
    }>
  >([]);

  //Pour le chargement individuel des Catégories de Produit
  //const productList = useProductsByIds(products.join(","));

  function switchToActiveCategories(category: any) {
    //Ajoute une Catégorie aux Catégories qui trient les Produits
    let valid = true;
    if (activeCategories.length > 0) {
      activeCategories.map(function (activeCategory) {
        //Evite les Doublons dans la liste
        if (activeCategory.id === category.id) {
          valid = false;
        }
      });
    }
    if (valid) {
      let tempActiveCategories = activeCategories;
      tempActiveCategories.push(category);
      setCategories(
        categories.filter(function (categoryFromList) {
          //Retire la Catégorie de la liste Inactive
          return categoryFromList.id != category.id;
        })
      );
      setActiveCategories(tempActiveCategories); //Replace la Catégorie dans la liste Active
      let tempIdList: any[] = [];
      tempActiveCategories.map(function (tempActiveCategory) {
        //Creation de la Liste d'ID de Categories
        tempIdList.push(tempActiveCategory.id);
      });
      setCategoriesId(tempIdList);
    }
  }

  function switchToCategories(activeCategory: any) {
    //Retire une Catégorie aux Catégories qui trient les Produits
    let valid = true;
    if (categories.length > 0) {
      categories.map(function (category) {
        if (activeCategory.id === category.id) {
          //Evite les Doublons dans la liste
          valid = false;
        }
      });
    }
    if (valid) {
      let tempCategories = categories;
      tempCategories.push(activeCategory);
      setActiveCategories(
        activeCategories.filter(function (category) {
          //Retire la Catégorie de la liste Active
          return activeCategory.id != category.id;
        })
      );
      setCategories(tempCategories); //Replace la Catégorie dans la liste Inactive
      let tempIdList: any[] = [];
      activeCategories
        .filter(function (category) {
          //Creation de la Liste d'ID de Categories
          return activeCategory.id != category.id;
        })
        .map(function (activeCategory) {
          tempIdList.push(activeCategory.id);
        });
      setCategoriesId(tempIdList);
    }
  }

  products.data.map(function (product: any) {
    // LOAD CATEGORIES
    product.categories.map(function (category: any) {
      let valid = true;
      categories.map(function (existingCategory) {
        if (existingCategory.id === category.id) {
          valid = false;
        }
      });
      activeCategories.map(function (existingCategory) {
        if (existingCategory.id === category.id) {
          valid = false;
        }
      });
      if (valid) {
        categories.push(category);
      }
    });
  });

  return (
    <div>
      <div className="flex px-4 py-1 mx-12 my-6 bg-gray-100 rounded-3xl">
        {filters ? (
          <a
            className="relative self-center inline-block w-12 h-12 m-2 bg-green-300 rounded-full hover:text-black hover:bg-green-400"
            onClick={() => setFilters(!filters)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 m-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        ) : (
          <a
            className="relative self-center inline-block w-12 h-12 m-2 bg-gray-300 rounded-full hover:text-black hover:bg-gray-400"
            onClick={() => setFilters(!filters)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 m-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          </a>
        )}

        <div className="inline-flex flex-wrap rounded-full">
          {categories.map(function (category) {
            return (
              <span
                className="relative inline-flex px-3 py-1 m-2 font-sans text-xl font-semibold text-gray-700 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300"
                onClick={() => switchToActiveCategories(category)}
              >
                <p className="inline-block m-2">{category.i18n.title}</p>
              </span>
            );
          })}
          {filters
            ? activeCategories.map(function (category) {
                return (
                  <span
                    className="relative inline-flex px-3 py-1 m-2 font-sans text-xl font-semibold text-gray-700 bg-green-200 rounded-full cursor-pointer hover:bg-green-300"
                    onClick={() => switchToCategories(category)}
                  >
                    <p className="inline-block m-2">{category.i18n.title}</p>
                  </span>
                );
              })
            : activeCategories.map(function (category) {
                return (
                  <span
                    className="relative inline-flex px-3 py-1 m-2 font-sans text-xl font-semibold text-gray-500 bg-gray-300 rounded-full cursor-not-allowed"
                    onClick={() => setFilters(!filters)}
                  >
                    <p className="inline-block m-2">{category.i18n.title}</p>
                  </span>
                );
              })}
        </div>
      </div>
    </div>
  );
}

function BlockProductComponent({ data, onUpdate }: BlockProductComponentProps) {
  const [filters, setFilters] = useState<boolean>(false); //Activation du Filtre Catégorie (Bouton Entonnoir)
  const [query, setQuery] = useState<string>(""); //Recherche par titres
  const [categoriesId, setCategoriesId] = useState<Array<number>>([]); //Liste des Catégories choisies pour trier les Produits

  function pushToList(data: BlockProductData, product: any) {
    //Ajoute un ID de Produit dans la liste des Produits selectionnés
    onUpdate({ ...data, productList: [...data.productList, product.id] });
  }

  function sortProducts(product: any) {
    //Trie le produit en fonction des Catégories choisies
    let valid = false;
    categoriesId.map(function (id) {
      //Pour chaque Catégories sélectionnées
      return product.categories.map(function (category: any) {
        //Pour chaque Catégories affiliées produit
        return category.id == id //Si les deux catégories sont les mêmes, valide l'affichage du Produit
          ? (valid = true)
          : null;
      });
    });
    return valid;
  }

  let products = useProductByTitle(query); //Liste des Produits concernés par la recherche par titres

  const productsElements = useProductsByIds(data.productList.join(",")); //Liste des Produits

  let filteredProducts = null;

  if (products.status === "success") {
    //Une fois la recherche des produits par titre abouttie
    filteredProducts = products.data.filter(function (product: any) {
      //Retire les produits déjà sélectionnés
      return !data.productList.some(
        (productFromList) => productFromList === product.id
      );
    });
  }

  return (
    <div className="p-4 BlockProduct">
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <input
            type="text"
            value={query}
            className="w-full px-8 py-4 font-sans text-2xl"
            placeholder="Find a product inside the catalog"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          {filteredProducts ? ( //Affiche les choix par rapport à la recherche par titres
            <ul className="font-sans text-2xl border border-gray-400 divide-y divide-gray-400 top-full">
              {filteredProducts.map((product: any) => (
                <li
                  key={product.id}
                  onClick={() => pushToList(data, product)}
                  className="px-8 py-4 cursor-pointer hover:bg-gray-100"
                >
                  {product.i18n.title}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="font-sans text-2xl border border-gray-400 divide-y divide-gray-400 top-full">
              <li className="px-8 py-4 hover:bg-gray-100">No Result</li>
            </ul>
          )}
        </div>

        <div className="col-span-3">
          {data.productList.length > 0 ? (
            <div>
              {productsElements.status === "success" ? (
                <div>
                  <Filters
                    products={productsElements}
                    setCategoriesId={setCategoriesId}
                    filters={filters}
                    setFilters={setFilters}
                  />
                  <div className="grid grid-cols-2 gap-2">
                    {filters //Bouton Entonnoir activé
                      ? productsElements.data.map((product: any) =>
                          sortProducts(product) ? ( //Filtre les produits
                            <Product
                              product={product}
                              data={data}
                              onUpdate={onUpdate}
                            />
                          ) : null
                        )
                      : productsElements.data.map((product: any) => (
                          <Product
                            product={product}
                            data={data}
                            onUpdate={onUpdate}
                          />
                        ))}
                  </div>
                </div>
              ) : (
                //Tant que les produits ne sont pas chargés affiche :
                <div className="p-10 m-2 font-sans text-2xl bg-cyan-100 rounded-2xl">
                  <div className="font-sans text-2xl">
                    Chargement des Produits
                  </div>
                </div>
              )}
            </div>
          ) : (
            //Si Aucun Produit sélectionné dans le Block
            <div className="grid grid-cols-1 gap-2">
              <div className="col-span-1">
                <div className="p-10 m-4 font-sans shadow-lg bg-rose-100 rounded-2xl">
                  <p className="font-sans text-2xl">
                    Veuillez Chercher et Choisir un Produit
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const initialData: BlockProductData = {
  productList: [],
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
