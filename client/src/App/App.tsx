import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import './App.css';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { checkUser } from '../features/auth/authSlice';
import NavBar from '../features/nav/NavBar';
import MainPage from '../features/main/MainPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
