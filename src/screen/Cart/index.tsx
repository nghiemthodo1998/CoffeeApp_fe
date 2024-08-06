import {ScrollView, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useCartScreen, {CartScreenProps} from './hook.ts';
import HeaderScreen from '../../components/HeaderScreen/index.tsx';
import CartItem from '../../components/CartItem/index.tsx';
import TotalCart from '../../components/TotalCart/index.tsx';

const CartScreen: FC<CartScreenProps> = props => {
  const {cartList} = useCartScreen(props);
  return (
    <View style={styles.cartWrapper}>
      <ScrollView style={styles.cartContainer}>
        <HeaderScreen />
        <View style={styles.listProductContainer}>
          {!Boolean(cartList.length) && (
            <View style={styles.emptyContainer}>
              <Text style={styles.empty}>Cart is empty!!!</Text>
            </View>
          )}
          {cartList.map((item, index) => {
            return <CartItem key={index} item={item} />;
          })}
        </View>
      </ScrollView>
      <View style={styles.payWrapper}>
        <TotalCart />
      </View>
    </View>
  );
};

export default CartScreen;
