import React, {FC} from 'react';
import styles from './style.ts';
import useOrderItem, {OrderItemProps} from './hook.ts';
import OrderCard from '../OrderCard/index.tsx';
import {View} from 'react-native';

const OrderItem: FC<OrderItemProps> = props => {
  const {dataOrder} = useOrderItem(props);
  return (
    <View style={styles.wrapper}>
      {dataOrder.map((order, index) => {
        return <OrderCard data={order} key={index} />;
      })}
    </View>
  );
};

export default OrderItem;
