import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import TransactionRoutes from './transaction.routes';
import CreateTransaction from '../screens/CreateTransaction';

const { Screen, Navigator } = createBottomTabNavigator();

const AppRoutes = () => (
  <Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: '#C2185B',
      inactiveTintColor:'#BDBDBD'
    }}
  >
    <Screen
      name="App"
      component={TransactionRoutes}
      options={{
        tabBarIcon: ({ color }) =>
          <Icon
            name="credit-card"
            size={22}
            color={color}
          />
      }}
    />
    <Screen
      name="CreateTransaction"
      component={CreateTransaction}
      options={{
        tabBarIcon: ({ color }) =>
          <Icon
            name="upload"
            size={22}
            color={color}
          />
      }}
    />
  </Navigator>
);

export default AppRoutes;
