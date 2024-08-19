import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useOrderCard, {OrderCardProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import SizeDetail from '../SizeDetail/index.tsx';

const OrderCard: FC<OrderCardProps> = props => {
  const {data, key, totalAllSize} = useOrderCard(props);
  return (
    <LinearGradient
      colors={['#262B33', '#262B3300']}
      key={key}
      style={styles.orderWrapper}>
      <View style={styles.infoWrapper}>
        <View style={styles.infoContainer}>
          <Image source={{uri: data.imagelink_square}} style={styles.images} />
          <View>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.special}>{data.special_ingredient}</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.price}>{totalAllSize.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.allSizeWrapper}>
        {data.prices.map((size, index) => (
          <SizeDetail size={size} key={index} />
        ))}
      </View>
    </LinearGradient>
  );
};

export default OrderCard;
