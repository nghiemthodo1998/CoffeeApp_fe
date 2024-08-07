import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useOrderHistoryScreen, {OrderHistoryScreenProps} from './hook.ts';
import HeaderScreen from '../../components/HeaderScreen/index.tsx';
import OrderItem from '../../components/OrderItem/index.tsx';
import moment from 'moment';

const OrderHistoryScreen: FC<OrderHistoryScreenProps> = props => {
  const {orderHistory} = useOrderHistoryScreen(props);
  return (
    <View style={styles.orderWrapper}>
      <ScrollView style={styles.orderContainer}>
        <HeaderScreen />
        {!Boolean(orderHistory.length) && (
          <View style={styles.emptyContainer}>
            <Text style={styles.empty}>History order is empty!!!</Text>
          </View>
        )}
        <View style={styles.wrapper}>
          {orderHistory.map((order, index) => {
            return (
              <View key={index}>
                <View style={styles.orderInfo}>
                  <View>
                    <Text style={styles.text}>Order Date</Text>
                    <Text style={styles.subText}>
                      {moment(order.created_at).format('Do MMMM YYYY, HH:mm')}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.text}>Total Amount</Text>
                    <Text style={styles.price}>
                      $ {order.totalPrice.toFixed(2)}
                    </Text>
                  </View>
                </View>
                <OrderItem dataOrder={order.listOrder} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHistoryScreen;
