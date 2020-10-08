import AsyncStorage from '@react-native-community/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react';
import { Alert } from 'react-native';

import api from '../services/api';


const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
  const [loggedUser, setUser] = useState({});
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    async function loadUser(){
      setAuthLoading(true);

      const storagedUser = await AsyncStorage.getItem('@transfer:user');

      if(storagedUser) {
        const parsedUser = JSON.parse(storagedUser);
        setUser(parsedUser);
      }

      setAuthLoading(false);
    }
    loadUser()
  },[])

  const signIn = useCallback(async (email) => {
    try {
      const response = api.post('/sessions', {
        email
      })

      const { user } = response.data;

      await AsyncStorage.setItem('@transfer:user');

      setUser(user)

    } catch ({ response }) {
      Alert.alert('Erro', response.data.error);
    }
  },[])

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@transfer:user');
  },[]);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      loggedUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth () {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
