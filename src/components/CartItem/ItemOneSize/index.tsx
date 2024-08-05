import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useItemOneSize, {ItemOneSizeProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Svg} from 'react-native-svg';
import DecreaseIcon from '../../../assets/icons/DecreaseIcon.tsx';
import IncreaseIcon from '../../../assets/icons/IncreaseIcon.tsx';

const ItemOneSize: FC<ItemOneSizeProps> = props => {
  const {data} = useItemOneSize(props);
  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['#262B33', '#262B3300']}
        style={styles.background}>
        <View style={styles.infoItemWrapper}>
          <Image
            source={data.imagelink_square as ImageSourcePropType}
            style={styles.image}
          />
          <View style={styles.infoItem}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.special}>{data.special_ingredient}</Text>
            <View style={styles.priceWrapper}>
              <View style={styles.sizeWrapper}>
                <Text style={styles.size}>M</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.currency}>$</Text>
                <Text style={styles.price}>6.20</Text>
              </View>
            </View>
            <View style={styles.quantityWrapper}>
              <View style={styles.btn}>
                <Svg width={11} height={3}>
                  <DecreaseIcon />
                </Svg>
              </View>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>1</Text>
              </View>
              <View style={styles.btn}>
                <Svg width={11} height={11}>
                  <IncreaseIcon />
                </Svg>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ItemOneSize;
