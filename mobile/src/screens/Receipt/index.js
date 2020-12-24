import React, { useEffect, useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

import { useRoute } from '@react-navigation/native';

import styles from './styles';

import { receiptImage } from '../../assets/images';

import api from '../../services/api';

import formatBalance from '../../utils/formatBalance';

const Receipt = () => {

  const [receipt, setReceipt] = useState(null);

  const { params } = useRoute();

  useEffect(() => {
    async function loadReceipt() {
      const response = await api.get(`/transactions/${params.receipt_id}`);

      setReceipt(response.data);
    }

    loadReceipt();
  },[params])


  if(!receipt) {
    return <View />
  }

  return (
    <ScrollView style={styles.container}>
      <View  style={styles.header}>
        <Image source={receiptImage} />
      </View>
      <Text style={styles.pageTitle}>
        Comprovante de transferência
      </Text>

      <Text style={styles.sectionTitle}>Origem</Text>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>Autor</Text>
        <Text style={styles.valueInformation}>{receipt.author_id.name}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>Valor</Text>
        <Text style={styles.valueInformation}>{formatBalance(receipt.value)}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>E-mail</Text>
        <Text style={styles.valueInformation}>{receipt.author_id.email}</Text>
      </View>

      <View style={styles.hr} />

      <Text style={styles.sectionTitle}>Destino</Text>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>Nome</Text>
        <Text style={styles.valueInformation}>{receipt.recipient_id.name}</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>E-mail</Text>
        <Text style={styles.valueInformation}>{receipt.recipient_id.email}</Text>
      </View>
    </ScrollView>
  );
}

export default Receipt;
