/* eslint-disable no-underscore-dangle */
import React, { useCallback, useEffect, useState } from 'react';

import {
  Image, TouchableOpacity, View, Text, FlatList,
} from 'react-native';

import OneSignal from 'react-native-onesignal';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';


import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { useIsFocused, useNavigation } from '@react-navigation/native';

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
  const { navigate } = useNavigation();

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

  const handleShowTransacation = useCallback(async (transaction_id) => {
    const response = await api.get(`/transactions/${transaction_id}`);
    navigate('Receipt')
  },[navigate])

  const onIds = useCallback( async (device) => {
    const {pushToken, userId } = device



    await api.post('/notifications/register', {
      user_id: loggedUser._id,
      notification_user_id: userId,
      push_token: pushToken
    })

  },[loggedUser])

  const onOpened = useCallback((notification_data) => {
    console.log(notification_data)
  },[])

  const onReceived = useCallback((notification) => {
    console.log(notification)
  },[])


  useEffect(() => {
    OneSignal.init("22cf3141-a541-4180-b570-007f0da89c2e")

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received');
      OneSignal.removeEventListener('opened');
      OneSignal.removeEventListener('ids');
    }
  },[])


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
            <TouchableOpacity
              style={styles.transactionCard}
              onPress={() => {handleShowTransacation(transaction._id)}}
            >
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
            </TouchableOpacity>
          )}
        />
      ) }
    </View>
  );
};

export default Home;
