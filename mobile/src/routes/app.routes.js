import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import CreateTransactions from '../screens/CreateTransactions';

const { Screen, Navigator } = createBottomTabNavigator();

const AppRoutes = () => (
  <Navigator>
    <Screen name="Home" component={Home} />
    <Screen name="CreateTransactions" component={CreateTransactions} />
  </Navigator>
);

export default AppRoutes;
