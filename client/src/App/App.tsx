import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../redux/store';
import './App.css';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { checkUser, logOut } from '../features/auth/authSlice';

function App(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const handleLogOut = async (): Promise<void> => {
    dispatch(logOut());
  };

  useEffect(() => {
    dispatch(checkUser());
  }, []);
  return (
    <div className="App">
      <h2>Hello {user?.name}</h2>
      <RegistrationPage />
      <AuthorizationPage />
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
}

export default App;
