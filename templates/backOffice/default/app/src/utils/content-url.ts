export const getContentUrl = (type: string, id: number): string => {
  const typeUrl: { [index: string]: string } = {
    folder: `/admin/folders/update/${id}`,
    content: `/admin/content/update/${id}`,
    category: `/admin/categories/update?category_id=${id}`,
    product: `/admin/products/update?product_id=${id}`,
  };

  return typeUrl[type] ?? null;
};
