import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useOrderHistoryScreen, {OrderHistoryScreenProps} from './hook.ts';

const OrderHistoryScreen: FC<OrderHistoryScreenProps> = props => {
  const {} = useOrderHistoryScreen(props);
  return (
    <View>
      <Text>OrderHistoryScreen</Text>
    </View>
  );
};

export default OrderHistoryScreen;
