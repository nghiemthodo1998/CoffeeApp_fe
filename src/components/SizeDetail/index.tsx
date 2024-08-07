import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useSizeDetail, {SizeDetailProps} from './hook.ts';

const SizeDetail: FC<SizeDetailProps> = props => {
  const {key, size} = useSizeDetail(props);
  return (
    <View style={styles.wrapper} key={key}>
      <View style={styles.leftContainer}>
        <View style={styles.sizeWrapper}>
          <View style={styles.sizeContainer}>
            <Text style={styles.text}>{size.size}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.subText}>{size.currency}</Text>
            <Text style={styles.text}>{size.price}</Text>
          </View>
        </View>
        <View style={[styles.sizeWrapper, {gap: 5}]}>
          <Text style={styles.subText}>X</Text>
          <Text style={styles.text}>{size.quantity}</Text>
        </View>
      </View>
      <Text style={[styles.subText, {paddingRight: 10}]}>
        {((size.quantity || 1) * Number(size.price)).toFixed(2)}
      </Text>
    </View>
  );
};

export default SizeDetail;
