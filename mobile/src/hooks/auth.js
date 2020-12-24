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
  const [loggedUser, setUser] = useState();
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
      const response = await api.post('/sessions', {
        email
      })

      console.log(response.data.user);

      const { user } = response.data;

      await AsyncStorage.setItem('@transfer:user', JSON.stringify(user));

      setUser(user)
      setWallet(wallet)

    } catch ({ response }) {
      Alert.alert('Erro', response.data.error);
    }
  },[])

  const signOut = useCallback(async () => {
    const tokenNotification = await AsyncStorage.getItem('@transfer:token');
    console.log(tokenNotification)
    if(tokenNotification) {
      await api.patch('/notifications/active-status', {
        user_id: loggedUser._id,
        notification_user_id: tokenNotification,
        active_status: false
      });
      await AsyncStorage.removeItem('@transfer:user');
      await AsyncStorage.removeItem('@transfer:token');
      setUser(null)
    }
  },[loggedUser]);

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      loggedUser,
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
