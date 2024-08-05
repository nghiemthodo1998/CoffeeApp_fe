import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useItemMoreSize, {ItemMoreSizeProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Svg} from 'react-native-svg';
import DecreaseIcon from '../../../assets/icons/DecreaseIcon.tsx';
import IncreaseIcon from '../../../assets/icons/IncreaseIcon.tsx';

const ItemMoreSize: FC<ItemMoreSizeProps> = props => {
  const {data} = useItemMoreSize(props);
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
            <View style={styles.roastContainer}>
              <Text style={styles.roast}>{data.roasted}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          {data.prices.map((price, index) => {
            return (
              <View style={styles.priceWrapper} key={index}>
                <View style={styles.sizeWrapper}>
                  <Text style={styles.size}>{price.size}</Text>
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.currency}>{price.currency}</Text>
                  <Text style={styles.price}>{price.price}</Text>
                </View>
                <View style={styles.btn}>
                  <Svg width={11} height={3}>
                    <DecreaseIcon />
                  </Svg>
                </View>
                <View style={styles.quantityContainer}>
                  <Text style={styles.quantity}>{price.quantity}</Text>
                </View>
                <View style={styles.btn}>
                  <Svg width={11} height={11}>
                    <IncreaseIcon />
                  </Svg>
                </View>
              </View>
            );
          })}
        </View>
      </LinearGradient>
    </View>
  );
};

export default ItemMoreSize;
