import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home';
import Receipt from '../screens/Receipt';

const { Screen, Navigator } = createStackNavigator();

const TransactionRoutes = () => (
  <Navigator screenOptions={{
    headerShown: false
  }} >
    <Screen name="Home" component={Home} />
    <Screen name="Receipt" component={Receipt} />
  </Navigator>
)

export default TransactionRoutes;
