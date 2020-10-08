import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/Login';
import Register from '../screens/Register';

const { Screen, Navigator } = createStackNavigator();

const Authroutes = () => (
  <Navigator>
    <Screen name="Login" component={Login} />
    <Screen name="Register" component={Register} />
  </Navigator>
)

export default Authroutes;
