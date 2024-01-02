import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { authorization } from './authSlice';
import './styles/auth.scss';

const AuthorizationPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(authorization({ email, password }));
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Авторизация</h1>
      <div className="auth__container">
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__input">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Почта</label>
          </div>
          <div className="auth__input">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Пароль</label>
          </div>
          <button className="auth__submit" type="submit">
            Авторизироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthorizationPage;
