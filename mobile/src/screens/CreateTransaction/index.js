import React, { useCallback, useState } from 'react';
import {
  Alert,
  Image,
  Text,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { RectButton } from 'react-native-gesture-handler';

import styles from './styles'

import { transferIcon } from '../../assets/icons';
import api from '../../services/api';
import { useAuth } from '../../hooks';

const CreateTransaction = () => {

  const [transferKey, setTransferKey] = useState('');
  const [value, setValue] = useState('');

  const { loggedUser } = useAuth()

  const handleCreateTransaction = useCallback(async () => {
    const result = Number(value.replace(/[^0-9\.-]+/g,""));
    console.log(result)
    // try {
    //   await api.post('/transactions', {
    //     author_id: loggedUser._id,
    //     type: 'outcome',
    //     transferKey,
    //     value
    //   })
    //   Alert('Sucesso', `você enviou ${formatBalance}`)
    // } catch ({response}) {
    //   Alert('Erro', response.data.error)
    // }
  },[])

  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Image source={transferIcon} />
        <Text style={styles.pageTitle}>Transferências</Text>
      </View>
      <Text style={styles.pageDescription}>
        Busque pela chave de transferência,
        a conta que você quer transferir
      </Text>
      <View
        style={styles.form}
      >
        <TextInputMask
          value={transferKey}
          onChange={setTransferKey}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Chave de transferência"
          keyboardType="number-pad"
          placeholderTextColor="#BDBDBD"
          style={styles.input}
          type='custom'
          options={{
            mask: '9999 99 999'
          }}
        />
        <TextInputMask
          value={value}
          onChangeText={setValue}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="R$ 0,00"
          keyboardType="number-pad"
          type={'money'}
          placeholderTextColor="#9E9E9E"
          style={styles.input}
        />
        <RectButton
          style={styles.button}
          onPress={handleCreateTransaction}
        >
          <Text style={styles.buttonText}>Transferir</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default CreateTransaction;
