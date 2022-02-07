import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages/auth/LoginPage';
import { RegisterPage } from '../pages/auth/RegisterPage';

export const AuthRouter = () => {
  return (
	  <Routes>
		  <Route path='/login' element={<LoginPage />} />
		  <Route path='/register' element={<RegisterPage />} />

		  <Route path='/*' element={<Navigate to='/login' />} />
	  </Routes>
  );
};
