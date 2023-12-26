import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import authSlice from '../features/auth/authSlice';
import productsSlice from '../features/products/productsSlice';
import favoritesSlice from '../features/favorites/favoritesSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    products: productsSlice,
    favorites: favoritesSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;
