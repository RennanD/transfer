/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import {
  Image, TouchableOpacity, View, Text, FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useIsFocused } from '@react-navigation/native';

import styles from './styles';

import EmptyList from '../../components/EmptyList';
import api from '../../services/api';
import { useAuth } from '../../hooks';

import formatBalance from '../../utils/formatBalance';

const Home = () => {
  const [wallet, setWallet] = useState('');
  const [transactions, setTransactions] = useState([]);
  const { loggedUser, signOut } = useAuth();

  const focused = useIsFocused();

  useEffect(() => {
    async function loadBalance() {
      try {
        const response = await api.get('/wallet', {
          headers: {
            user_id: loggedUser._id,
          },
        });
        const balance = formatBalance(response.data.balance);
        setWallet(balance);
      } catch (error) {
        console.log(error);
      }
    }
    async function loadTransacations() {
      const response = await api.get('/transactions', {
        headers: {
          user_id: loggedUser._id,
        },
      });
      setTransactions(response.data);
    }
    if (focused) {
      loadBalance();
      loadTransacations();
    }
  }, [loggedUser, focused]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif',
          }}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {loggedUser.name}
          </Text>
          <Text style={styles.userBalance}>
            {wallet}
          </Text>
        </View>
        <TouchableOpacity onPress={signOut}>
          <Icon name="log-out" size={26} color="#E91E63" />
        </TouchableOpacity>
      </View>
      { !transactions.length ? (
        <EmptyList />
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(transaction) => transaction._id}
          contentContainerStyle={{
            padding: 15,
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: transaction }) => (
            <View style={styles.transactionCard}>
              <View style={styles.transactionLeft}>
                <MaterialIcon
                  name={transaction.type === 'income' ? 'bank-transfer-in' : 'bank-transfer-out'}
                  size={30}
                  color={transaction.type === 'income' ? '#25a182' : '#E91E63'}
                />
                <View style={styles.transactionHR} />
              </View>

              <View style={styles.transactionInfoContainer}>
                <Text style={[
                  styles.transactionTitle,
                ]}
                >
                  {transaction.type === 'income'
                    ? 'Transferência recebida'
                    : 'Transferência enviada'}
                </Text>
                <Text style={styles.transactionUserName}>
                  {transaction.type === 'income' ? transaction.author_id.name : transaction.recipient_id.name}
                </Text>
                <Text style={[
                  styles.transactionValue,
                  { color: transaction.type === 'income' ? '#25a182' : '#E91E63' },
                ]}
                >
                  {formatBalance(transaction.value)}
                </Text>
                <Text style={styles.transactionDate}>
                  {format(parseISO(transaction.createdAt), "dd 'de' MMM yyyy", {
                    locale: ptBR,
                  })}

                </Text>
              </View>
            </View>
          )}
        />
      ) }
    </View>
  );
};

export default Home;
