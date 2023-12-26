import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { FavoriteProductState } from './types/type';
import * as api from './api';
import type { ProductID } from '../products/types/type';

const initialState: FavoriteProductState = {
  favoritesProducts: [],
  error: undefined,
};

export const loadFavoriteProducts = createAsyncThunk('favorites/load', () =>
  api.favoriteProductsFetch(),
);

export const addFavoriteProduct = createAsyncThunk('favorites/add', (productId: ProductID) =>
  api.addFavoriteProductFetch(productId),
);

export const deleteFavorite = createAsyncThunk('favorites/delete', (productId: ProductID) =>
  api.deleteFavoriteFetch(productId),
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadFavoriteProducts.fulfilled, (state, action) => {
      state.favoritesProducts = action.payload.favoritesProducts;
    });
    builder.addCase(loadFavoriteProducts.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addFavoriteProduct.fulfilled, (state, action) => {
      state.favoritesProducts.push(action.payload.favoriteProduct);
    });
    builder.addCase(addFavoriteProduct.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(deleteFavorite.fulfilled, (state, action) => {
      state.favoritesProducts = state.favoritesProducts.filter(
        (product) => product.id !== +action.payload.productId,
      );
    });
    builder.addCase(deleteFavorite.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
