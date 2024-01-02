import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { registration } from './authSlice';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(registration({ name, email, password }));
    console.log({ name, email, password, cpassword });
  };

  return (
    <div className="auth">
      <h1 className="auth__title">Регистрация</h1>
      <div className="auth__container">
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__input">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Имя</label>
          </div>
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
          <div className="auth__input">
            <input
              type="password"
              id="cpassword"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
              required
            />
            <label htmlFor="cpassword">Повторите Пароль</label>
          </div>
          <button className="auth__submit" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
