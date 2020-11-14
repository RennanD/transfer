import React, { useCallback, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import { loginImage } from '../../assets/images'

import { useAuth } from '../../hooks';

const Login = () => {

  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const [email, setEmail] = useState('')

  const handleSignIn = useCallback(async (userEmail) => {

    await signIn(userEmail)
  },[])

  return (
    <View style={styles.container}>
      <Image style={styles.heroImage} source={loginImage} />
      <TextInput
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        placeholder="Digite seu email"
        keyboardType="email-address"
        placeholderTextColor="#9E9E9E"
        style={styles.input}
      />
      <RectButton
        onPress={() => handleSignIn(email)}
        style={styles.button}
      >
        <Text style={styles.buttonText} >Entrar</Text>
      </RectButton>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => navigate('Register')}
      >
        <Text style={styles.linkButtonText}>Ainda não tem conta?</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
