import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type {
  Product,
  ProductID,
  ProductState,
  ProductWithOutIdAndCategoryType,
} from './types/type';
import * as api from './api';

const initialState: ProductState = {
  products: [],
  error: undefined,
};

export const loadProducts = createAsyncThunk('products/load', () => api.loadProductsFetch());

export const addProduct = createAsyncThunk(
  'products/add',
  (product: ProductWithOutIdAndCategoryType) => api.addProductFetch(product),
);

export const deleteProduct = createAsyncThunk('products/remove', (productId: ProductID) =>
  api.deleteProductFetch(productId),
);

export const updateProduct = createAsyncThunk('products/update', (product: Product) =>
  api.updateProductFetch(product),
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProducts.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
    builder.addCase(loadProducts.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload.product);
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter((product) => product.id !== +action.payload.data);
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.data.id ? action.payload.data : product,
      );
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export default productsSlice.reducer;
