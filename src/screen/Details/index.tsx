import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useDetailScreen, {DetailScreenProps} from './hook.ts';
import AddProductDetail from '../../components/AddProductDetail/index.tsx';
import ProductDetail from '../../components/ProductDetail/index.tsx';

const DetailScreen: FC<DetailScreenProps> = props => {
  const {data, handleToggleFavorite} = useDetailScreen(props);

  if (data.loading) {
    return (
      <View style={styles.detailWrapper}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.detailWrapper}>
      {!data.data ? (
        <Text>get data product error</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.detailContainer}>
          <ProductDetail
            data={data.data}
            onToggleFavorite={handleToggleFavorite}
          />
          <AddProductDetail data={data.data} />
        </ScrollView>
      )}
    </View>
  );
};

export default DetailScreen;
