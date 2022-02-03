import React from 'react';
import './App.css';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterPage } from './pages/auth/RegisterPage';
import { RoomPage } from './pages/room/RoomPage';

export const ZoomApp = () => {
  return (
    <RoomPage />
    // <RegisterPage />
    // <LoginPage />
  );
};

export default ZoomApp;

