import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useHomeItem, {HomeItemProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Svg} from 'react-native-svg';
import Plus from '../../../assets/icons/Plus.tsx';
import StarIcon from '../../../assets/icons/StarIcon.tsx';

const HomeItem: FC<HomeItemProps> = props => {
  const {
    data,
    price,
    isShowRating = false,
    handleNavigateDetail,
    handleAddToCart,
  } = useHomeItem(props);
  return (
    <TouchableOpacity onPress={handleNavigateDetail}>
      <LinearGradient
        style={styles.homeItemWrapper}
        colors={['#252A32', '#262B3300']}>
        <ImageBackground
          source={{uri: data.imagelink_square}}
          style={styles.imageBackground}
          imageStyle={styles.image}>
          {isShowRating && (
            <View style={styles.ratingWrapper}>
              <Svg height="10px" width="10px">
                <StarIcon />
              </Svg>
              <Text style={styles.rating}>{data.average_rating}</Text>
            </View>
          )}
        </ImageBackground>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.special}>{data.special_ingredient}</Text>
        <View style={styles.priceWrapper}>
          <View style={styles.priceContainer}>
            <Text style={styles.currency}>{price.currency}</Text>
            <Text style={styles.price}>{price.price}</Text>
          </View>
          <TouchableOpacity style={styles.add} onPress={handleAddToCart}>
            <Svg height="10px" width="10px">
              <Plus />
            </Svg>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeItem;
