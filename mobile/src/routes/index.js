import React from 'react';
import { View } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks'

const Routes = () => {

  const { loggedUser } = useAuth();

  return loggedUser ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
