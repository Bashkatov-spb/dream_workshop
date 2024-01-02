/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { type RootState } from '../../../redux/store';
// import { logOut } from '../../auth/authSlice';
import logo from '../../../assets/logo.png';
import products from '../../../assets/products.png';
import favorites from '../../../assets/favorites.png';
import cart from '../../../assets/cart.png';
import login from '../../../assets/login.png';
import reg from '../../../assets/reg.png';
import '../styles/navbar.scss';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.user);
  // const dispatch = useAppDispatch();

  // const handleLogOut = (): void => {
  //   dispatch(logOut());
  // };
  return (
    <>
      <Outlet />
      <div className="nav">
        <ul className="nav__container">
          <li className="nav__item">
            <NavLink to="/">
              <img className="nav__img" src={logo} alt="logo" />
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/products">
              <img className="nav__img" src={products} alt="logo" />
            </NavLink>
          </li>

          {!user ? (
            <>
              <li className="nav__item">
                <NavLink to="/registration">
                  <img className="nav__img" src={login} alt="logo" />
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/authorization">
                  <img className="nav__img" src={reg} alt="logo" />
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="nav__item">
                <NavLink to="/favorites">
                  <img className="nav__img" src={favorites} alt="logo" />
                  Избранное
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/cart">
                  <img className="nav__img" src={cart} alt="logo" />
                  Корзина
                </NavLink>
              </li>
              {/* <li className="nav__item">
                <button type="button" onClick={handleLogOut}>
                  Выход
                </button>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
