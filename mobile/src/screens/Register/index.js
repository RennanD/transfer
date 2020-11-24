import React, { useCallback, useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, Alert,
} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import { loginImage } from '../../assets/images';

import api from '../../services/api';

import { useAuth } from '../../hooks';

const Register = () => {
  const { goBack } = useNavigation();
  const { signIn } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [transferKey, setTransferKey] = useState('');

  const handleRegister = useCallback(async () => {
    if (name && email && transferKey) {
      if (!email || !name || !transferKey) {
        Alert.alert('Error', 'Preencha todos os campos para continuar.');
        return;
      }

      await api.post('/accounts', {
        name,
        email,
        transferKey,
      });

      await signIn(email);
    }
  }, [email, name, transferKey]);

  return (
    <View style={styles.container}>
      <Image style={styles.heroImage} source={loginImage} />
      <TextInput
        value={name}
        onChangeText={setName}
        autoCapitalize="words"
        autoCorrect={false}
        placeholder="Digite seu nome"
        placeholderTextColor="#9E9E9E"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Digite seu email"
        keyboardType="email-address"
        placeholderTextColor="#9E9E9E"
        style={styles.input}
      />
      <TextInputMask
        value={transferKey}
        onChangeText={setTransferKey}
        placeholder="Chave de transeferência"
        placeholderTextColor="#9E9E9E"
        autoCorrect={false}
        keyboardType="number-pad"
        style={styles.input}
        type="custom"
        options={{
          mask: '9999 99 999',
        }}
      />
      <RectButton style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar conta</Text>
      </RectButton>

      <TouchableOpacity
        style={styles.linkButton}
        onPress={goBack}
      >
        <Text style={styles.linkButtonText}>Já tenho uma conta.</Text>
      </TouchableOpacity>    
    </View>
  );
};

export default Register;
