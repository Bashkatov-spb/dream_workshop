import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { type RootState, useAppDispatch } from '../../../redux/store';
import type { Product } from '../types/type';
import { deleteProduct } from '../productsSlice';
import { addFavoriteProduct } from '../../favorites/favoritesSlice';
import { addCartProduct } from '../../cart/cartSlice';

const ProductItem = ({ product }: { product: Product }): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const onHandleRemove = (): void => {
    dispatch(deleteProduct(product.id));
  };

  const onHandleAddFavorite = (): void => {
    dispatch(addFavoriteProduct(product.id));
  };

  const onHandleAddToCart = (): void => {
    dispatch(addCartProduct(product.id));
  };

  return (
    <div style={{ border: '1px solid white' }}>
      <h4>{product.title}</h4>
      <Link to={`/products/${product.id}`}>
        <img
          style={{ width: '300px' }}
          src="https://kartinki.pics/uploads/posts/2021-04/1617697486_19-p-boginya-lesa-art-kartinki-20.jpg"
          alt=""
        />
      </Link>
      <p>{product.cost}</p>
      {user && (
        <>
          <button onClick={onHandleAddFavorite} type="button">
            Добавить в избранное
          </button>
          <button onClick={onHandleAddToCart} type="button">
            Добавить в корзину
          </button>
        </>
      )}
      {user?.isAdmin && (
        <button onClick={onHandleRemove} type="button">
          Удалить
        </button>
      )}
    </div>
  );
};

export default ProductItem;
