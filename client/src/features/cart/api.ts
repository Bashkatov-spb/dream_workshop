import type { ProductID } from '../products/types/type';
import type { CartProduct, CartProductsLoadResponse } from './types/types';

export const loadCartProductsFetch = async (): Promise<CartProductsLoadResponse> => {
  const response = await fetch('/api/cart');
  const data = (await response.json()) as CartProductsLoadResponse;
  console.log(data);

  return data;
};

export const addCartProductFetch = async (
  productId: ProductID,
): Promise<{ message: string; cartProduct: CartProduct }> => {
  const response = await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  const data = (await response.json()) as { message: string; cartProduct: CartProduct };
  return data;
};

export const deleteCartProductFetch = async (
  productId: ProductID,
): Promise<{ message: 'success'; productId: ProductID }> => {
  const response = await fetch(`/api/cart/${productId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  const data = (await response.json()) as { message: 'success'; productId: ProductID };
  return data;
};
