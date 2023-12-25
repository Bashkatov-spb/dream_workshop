import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { authorization } from './authSlice';

const AuthorizationPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault();
    dispatch(authorization({ email, password }));
  };

  return (
    <div>
      <h1>Log</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Авторизироваться</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;
