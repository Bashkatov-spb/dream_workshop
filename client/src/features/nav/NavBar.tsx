import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { type RootState, useAppDispatch } from '../../redux/store';
import { logOut } from '../auth/authSlice';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const handleLogOut = async (): Promise<void> => {
    dispatch(logOut());
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/products">Товары</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Избранное</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Корзина</NavLink>
        </li>
        {!user ? (
          <>
            <li>
              <NavLink to="/registration">Регистрация</NavLink>
            </li>
            <li>
              <NavLink to="/authorization">Вход</NavLink>
            </li>
          </>
        ) : (
          <li>
            <button type="button" onClick={handleLogOut}>
              Выход
            </button>
          </li>
        )}
      </ul>
      <Outlet />
      <footer>telega, insta, phone </footer>
    </div>
  );
};

export default NavBar;
