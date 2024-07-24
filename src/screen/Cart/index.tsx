import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useCartScreen, {CartScreenProps} from './hook.ts';

const CartScreen: FC<CartScreenProps> = props => {
  const {} = useCartScreen(props);
  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;
