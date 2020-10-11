import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import { AppProvider } from './hooks';

import Routes from './routes';

const Index = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      </NavigationContainer>
    </AppProvider>
  );
}

export default Index;
