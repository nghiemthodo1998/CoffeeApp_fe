import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useCartItem, {CartItemProps} from './hook.ts';
import ItemOneSize from './ItemOneSize/index.tsx';
import ItemMoreSize from './ItemMoreSize/index.tsx';

const CartItem: FC<CartItemProps> = props => {
  const {item: data} = useCartItem(props);
  if (data.prices.length === 1) {
    return <ItemOneSize data={data} />;
  }
  return <ItemMoreSize data={data} />;
};

export default CartItem;
