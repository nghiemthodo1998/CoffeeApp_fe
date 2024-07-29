import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useDetailScreen, {DetailScreenProps} from './hook.ts';
import AddProductDetail from '../../components/AddProductDetail/index.tsx';
import ProductDetail from '../../components/ProductDetail/index.tsx';

const DetailScreen: FC<DetailScreenProps> = props => {
  const {data} = useDetailScreen(props);
  return (
    <View style={styles.detailWrapper}>
      <ScrollView contentContainerStyle={styles.detailContainer}>
        <ProductDetail data={data} />
        <AddProductDetail data={data} />
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
