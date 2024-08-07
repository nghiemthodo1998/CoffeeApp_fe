import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useItemOneSize, {ItemOneSizeProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Svg} from 'react-native-svg';
import DecreaseIcon from '../../../assets/icons/DecreaseIcon.tsx';
import IncreaseIcon from '../../../assets/icons/IncreaseIcon.tsx';

const ItemOneSize: FC<ItemOneSizeProps> = props => {
  const {
    data,
    navigate,
    handleIncreaseProduct,
    handleDecreaseProduct,
    handleRemoveSizeProduct,
  } = useItemOneSize(props);
  return (
    <TouchableOpacity
      onPress={e => navigate('DetailScreen', {detailId: data.id})}
      style={styles.wrapper}>
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
                <Text style={styles.size}>{data.prices[0].size}</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.currency}>{data.prices[0].currency}</Text>
                <Text style={styles.price}>{data.prices[0].price}</Text>
              </View>
            </View>
            <View style={styles.quantityWrapper}>
              {Number(data.prices[0].quantity) > 1 ? (
                <TouchableOpacity
                  onPress={e =>
                    handleDecreaseProduct(data.id, data.prices[0].size)
                  }
                  style={styles.btn}>
                  <Svg width={11} height={3}>
                    <DecreaseIcon />
                  </Svg>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.btnRemove}
                  onPress={e =>
                    handleRemoveSizeProduct(data.id, data.prices[0].size)
                  }>
                  <Svg width={11} height={11} style={styles.rotate}>
                    <IncreaseIcon />
                  </Svg>
                </TouchableOpacity>
              )}
              <View style={styles.quantityContainer}>
                <Text style={styles.quantity}>{data.prices[0].quantity}</Text>
              </View>
              <TouchableOpacity
                style={styles.btn}
                onPress={e =>
                  handleIncreaseProduct(data.id, data.prices[0].size)
                }>
                <Svg width={11} height={11}>
                  <IncreaseIcon />
                </Svg>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default ItemOneSize;
