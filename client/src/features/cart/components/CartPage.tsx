import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import CartItem from './CartItem';

const CartPage = (): JSX.Element => {
  const products = useSelector((store: RootState) => store.cart.cartProducts);
  console.log(products);

  return (
    <div>
      <h2>Cart page</h2>
      {products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartPage;
