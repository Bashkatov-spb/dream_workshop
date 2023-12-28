import React from 'react';

import type { CartProduct } from '../types/types';
import { useAppDispatch } from '../../../redux/store';
import { deleteCartProduct } from '../cartSlice';

const CartItem = ({ product }: { product: CartProduct }): JSX.Element => {
  const dispatch = useAppDispatch();

  const onHandleRemove = (): void => {
    dispatch(deleteCartProduct(product.id));
  };
  return (
    <div>
      <p>{product.title}</p>
      <img src={product.image} alt="" />
      <p>{product.cost}</p>
      <p>{product.description}</p>
      <button onClick={onHandleRemove} type="button">
        Удалить из корзины
      </button>
    </div>
  );
};

export default CartItem;
