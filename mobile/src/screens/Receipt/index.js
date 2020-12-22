import React from 'react';
import { View, Image, Text, ScrollView } from 'react-native';

import styles from './styles';

import { receiptImage } from '../../assets/images';


const Receipt = () => {
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
        <Text style={styles.valueInformation}>Rennan Douglas</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>Valor</Text>
        <Text style={styles.valueInformation}>R$500,00</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>E-mail</Text>
        <Text style={styles.valueInformation}>rennan@email.com</Text>
      </View>

      <View style={styles.hr} />

      <Text style={styles.sectionTitle}>Destino</Text>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>Autor</Text>
        <Text style={styles.valueInformation}>Demo User</Text>
      </View>

      <View style={styles.sectionCard}>
        <Text style={styles.keyInformation}>E-mail</Text>
        <Text style={styles.valueInformation}>demo@email.com</Text>
      </View>
    </ScrollView>
  );
}

export default Receipt;
