import React from 'react';
import { View } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks'

const Routes = () => {

  const { user } = useAuth();

  return user ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
