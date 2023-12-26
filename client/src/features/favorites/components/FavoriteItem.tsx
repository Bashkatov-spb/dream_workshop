import React from 'react';
import { useSelector } from 'react-redux';

import type { FavoriteProduct } from '../types/type';
import { type RootState, useAppDispatch } from '../../../redux/store';
import { deleteFavorite } from '../favoritesSlice';

const FavoriteItem = ({ favorite }: { favorite: FavoriteProduct }): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();
  console.log(favorite);

  const onHandleRemoveFavorite = (): void => {
    dispatch(deleteFavorite(favorite.id));
  };

  return (
    <div style={{ border: '1px solid white' }}>
      <h4>{favorite.title}</h4>
      <p>{favorite.cost}</p>
      {user && (
        <>
          <button onClick={onHandleRemoveFavorite} type="button">
            Убрать из избранного
          </button>
          <button type="button">Добавить в корзину</button>
        </>
      )}
      {user?.isAdmin && <button type="button">Удалить</button>}
    </div>
  );
};

export default FavoriteItem;
