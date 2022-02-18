import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { RoomPage } from './pages/room/RoomPage';
import { AppRouter } from './router/AppRouter';
import { store } from './store/store';

export const ZoomApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default ZoomApp;

