import {Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useTotalCart, {TotalCartProps} from './hook.ts';

const TotalCart: FC<TotalCartProps> = props => {
  const {totalPrice, handlePayment} = useTotalCart(props);
  return (
    <View style={styles.priceWrapper}>
      <View>
        <Text style={styles.priceLabel}>Total Price</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.price}>{totalPrice.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={handlePayment}
        disabled={!Boolean(totalPrice)}
        style={
          Boolean(totalPrice)
            ? styles.addBtnContainer
            : styles.addBtnContainerDisabled
        }>
        <Text style={styles.addBtn}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TotalCart;
