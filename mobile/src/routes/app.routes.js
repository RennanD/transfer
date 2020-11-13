import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
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
      name="Home"
      component={Home}
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
