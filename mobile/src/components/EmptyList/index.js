import React from 'react';
import { Image, View, Text } from 'react-native';

import styles from './styles';

import { emptyImage } from '../../assets/images';

const EmptyList = () => {
  return (
    <View style={styles.container}>
      <Image source={emptyImage} />
      <Text
        style={styles.emptyText}
      >
        Ainda não há movimentação na sua conta
      </Text>
    </View>
  );
}

export default EmptyList;
