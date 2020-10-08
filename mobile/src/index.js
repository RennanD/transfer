import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import { AppProvider } from './hooks';

import Routes from './routes';

const Index = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  );
}

export default Index;
