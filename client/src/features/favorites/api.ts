import type { ProductID } from '../products/types/type';
import type { FavoriteProduct, ProductsLoadResponse } from './types/type';

export const favoriteProductsFetch = async (): Promise<ProductsLoadResponse> => {
  const response = await fetch('/api/favorites');
  const data = (await response.json()) as ProductsLoadResponse;
  return data;
};

export const addFavoriteProductFetch = async (
  productId: ProductID,
): Promise<{ message: string; favoriteProduct: FavoriteProduct }> => {
  const response = await fetch('/api/favorites', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  const data = (await response.json()) as { message: string; favoriteProduct: FavoriteProduct };
  return data;
};

export const deleteFavoriteFetch = async (
  productId: ProductID,
): Promise<{ message: string; productId: ProductID }> => {
  console.log(productId);

  const response = await fetch(`/api/favorites/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  const data = (await response.json()) as { message: string; productId: ProductID };
  return data;
};
