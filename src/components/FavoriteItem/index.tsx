import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useFavoriteItem, {FavoriteItemProps} from './hook.ts';
import ProductDetail from '../ProductDetail/index.tsx';
import LinearGradient from 'react-native-linear-gradient';

const FavoriteItem: FC<FavoriteItemProps> = props => {
  const {data} = useFavoriteItem(props);
  return (
    <View style={styles.favoriteWrapper}>
      <ProductDetail data={data} borderRadiusImage={25} />
      <LinearGradient
        colors={['#262B33', '#262B3300']}
        style={styles.descriptionWrapper}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{data.description}</Text>
      </LinearGradient>
    </View>
  );
};

export default FavoriteItem;
