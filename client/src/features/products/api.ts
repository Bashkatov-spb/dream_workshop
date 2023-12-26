import type {
  Product,
  ProductAddResponse,
  ProductID,
  ProductWithOutIdAndCategoryType,
  ProductsLoadResponse,
} from './types/type';

export const loadProductsFetch = async (): Promise<ProductsLoadResponse> => {
  const response = await fetch('/api/products');
  const data = (await response.json()) as ProductsLoadResponse;
  return data;
};

export const addProductFetch = async (
  product: ProductWithOutIdAndCategoryType,
): Promise<ProductAddResponse> => {
  const response = await fetch('/api/products', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = (await response.json()) as ProductAddResponse;
  console.log(data);

  return data;
};

export const deleteProductFetch = async (
  productId: ProductID,
): Promise<{ message: string; data: ProductID }> => {
  const response = await fetch(`/api/products/${productId}`, {
    method: 'DELETE',
  });
  const data = (await response.json()) as { message: string; data: ProductID };
  return data;
};

export const updateProductFetch = async (
  product: Product,
): Promise<{ message: string; data: Product }> => {
  const response = await fetch(`/api/products/${product.id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  const data = (await response.json()) as { message: string; data: Product };
  return data;
};
