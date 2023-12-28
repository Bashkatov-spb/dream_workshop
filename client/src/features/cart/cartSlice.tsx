import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { CartState } from './types/types';
import * as api from './api';
import type { ProductID } from '../products/types/type';

const initialState: CartState = {
  cartProducts: [],
  error: undefined,
};

export const loadCartProducts = createAsyncThunk('cart/load', () => api.loadCartProductsFetch());

export const addCartProduct = createAsyncThunk('cart/add', (productId: ProductID) =>
  api.addCartProductFetch(productId),
);

export const deleteCartProduct = createAsyncThunk('cart/delete', (productId: ProductID) =>
  api.deleteCartProductFetch(productId),
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCartProducts.fulfilled, (state, action) => {
      console.log(action.payload.products);

      state.cartProducts = action.payload.products;
    });
    builder.addCase(loadCartProducts.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addCartProduct.fulfilled, (state, action) => {
      state.cartProducts.push(action.payload.cartProduct);
    });
    builder.addCase(addCartProduct.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(deleteCartProduct.fulfilled, (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== +action.payload.productId,
      );
    });
    builder.addCase(deleteCartProduct.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default cartSlice.reducer;
