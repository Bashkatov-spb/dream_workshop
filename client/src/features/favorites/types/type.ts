export type FavoriteProduct = {
  id: number;
  title: string;
  image: string;
  cost: number;
  category_id: number;
  description: string;
};

export type FavoriteProductState = {
  favoritesProducts: FavoriteProduct[];
  error: undefined | string;
};

export type ProductsLoadResponse = {
  favoritesProducts: FavoriteProduct[];
  message: string;
};
