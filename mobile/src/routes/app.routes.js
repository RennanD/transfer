import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import CreateTransaction from '../screens/CreateTransaction';

const { Screen, Navigator } = createBottomTabNavigator();

const AppRoutes = () => (
  <Navigator >
    <Screen name="Home" component={Home} />
    <Screen name="CreateTransaction" component={CreateTransaction} />
  </Navigator>
);

export default AppRoutes;
