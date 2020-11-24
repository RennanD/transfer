/* eslint-disable no-underscore-dangle */
import React, { useCallback, useState } from 'react';
import {
  Alert,
  Image,
  Text,
  View,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import { transferIcon } from '../../assets/icons';
import api from '../../services/api';
import { useAuth } from '../../hooks';

const CreateTransaction = () => {
  const [transferKey, setTransferKey] = useState('');
  const [value, setValue] = useState('');
  const [maskedValue, setMaskedValue] = useState('');

  const { loggedUser } = useAuth();

  const handleChangeValueText = useCallback((_maskedValue, unmaskedValue) => {
    setValue(unmaskedValue);
    setMaskedValue(_maskedValue);
  }, []);

  const handleCreateTransaction = useCallback(async () => {
    if (!transferKey) {
      Alert.alert('Erro', 'Insira a chave de transferência do destinatário.');
      return;
    }

    if (Number(value) === 0 || !value) {
      Alert.alert('Erro', 'Insira um valor para a transferência.');
      return;
    }

    const formattedValue = Number(value);

    try {
      await api.post(`/transactions/${transferKey}`, {
        author_id: loggedUser._id,
        type: 'outcome',
        value: formattedValue,
      });
      Alert.alert('Sucesso', `você enviou ${maskedValue}`);
      setMaskedValue('');
      setValue('');
      setTransferKey('');
    } catch ({ response }) {
      Alert.alert('Erro', response.data.error);
    }
  }, [value, transferKey, loggedUser._id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
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
          onChangeText={setTransferKey}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Chave de transferência"
          keyboardType="number-pad"
          placeholderTextColor="#BDBDBD"
          style={styles.input}
          type="custom"
          options={{
            mask: '9999 99 999',
          }}
        />
        <TextInputMask
          value={value}
          includeRawValueInChangeText
          onChangeText={handleChangeValueText}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="R$ 0,00"
          keyboardType="number-pad"
          type="money"
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
};

export default CreateTransaction;
