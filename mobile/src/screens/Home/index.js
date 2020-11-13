import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';

import EmptyList from '../../components/EmptyList';
import api from '../../services/api';
import { useAuth } from '../../hooks';

import formatBalance from '../../utils/formatBalance';

const Home = () => {

  const [wallet, setWallet] = useState('');
  const { loggedUser, signOut } = useAuth();

  useEffect(() => {
    async function loadBalance() {
      try {
        const response = await api.get('/wallet', {
          headers: {
            user_id: loggedUser._id
          }
        })
        const balance = formatBalance(response.data.balance)
        setWallet(balance)
      } catch (error) {
        console.log(error)
      }
    }
    loadBalance()
  },[loggedUser])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif"
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
      <EmptyList />
    </View>
  )
}

export default Home;
