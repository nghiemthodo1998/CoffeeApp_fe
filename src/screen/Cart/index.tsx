import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useCartScreen, {CartScreenProps} from './hook.ts';
import HeaderScreen from '../../components/HeaderScreen/index.tsx';
import CartItem from '../../components/CartItem/index.tsx';

const CartScreen: FC<CartScreenProps> = props => {
  const {cartList, handleClearCart} = useCartScreen(props);
  return (
    <View style={styles.cartWrapper}>
      <HeaderScreen />
      <ScrollView style={styles.cartContainer}>
        {cartList.map((item, index) => {
          console.log('item', item);
          return <CartItem key={index} item={item} />;
        })}
      </ScrollView>
    </View>
  );
};

export default CartScreen;
