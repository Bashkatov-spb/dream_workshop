import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';

import FavoriteItem from './FavoriteItem';
import Footer from '../../footer/components/Footer';

const FavoritesPage = (): JSX.Element => {
  const favoritesProducts = useSelector((store: RootState) => store.favorites.favoritesProducts);

  return (
    <div>
      FavoritesPage
      {favoritesProducts.map((favorite) => (
        <FavoriteItem key={favorite.id} favorite={favorite} />
      ))}
      <Footer />
    </div>
  );
};

export default FavoritesPage;
