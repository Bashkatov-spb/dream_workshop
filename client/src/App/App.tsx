import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import './App.css';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { checkUser } from '../features/auth/authSlice';
import NavBar from '../features/nav/components/NavBar';
import MainPage from '../features/main/components/MainPage';
import ProductsList from '../features/products/components/ProductsList';
import FavoritesPage from '../features/favorites/components/FavoritesPage';
import { loadProducts } from '../features/products/productsSlice';
import ProductItemPage from '../features/products/components/ProductItemPage';
import { loadFavoriteProducts } from '../features/favorites/favoritesSlice';
import CartPage from '../features/cart/components/CartPage';
import { loadCartProducts } from '../features/cart/cartSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser());
    dispatch(loadProducts());
    dispatch(loadFavoriteProducts());
    dispatch(loadCartProducts());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductItemPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
