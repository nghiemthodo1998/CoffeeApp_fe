import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import usePaymentScreen, {PaymentScreenProps} from './hook.ts';

const PaymentScreen: FC<PaymentScreenProps> = props => {
  const {} = usePaymentScreen(props);
  return (
    <View>
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;
