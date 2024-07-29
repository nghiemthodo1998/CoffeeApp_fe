import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useDetailInfo, {DetailInfoProps} from './hook.ts';
import SpecialProduct from '../SpecialProduct/index.tsx';
import {Svg} from 'react-native-svg';
import BigStarIcon from '../../../assets/icons/BigStarIcon.tsx';

const DetailInfo: FC<DetailInfoProps> = props => {
  const {data} = useDetailInfo(props);
  return (
    <View style={styles.detailInfoContainer}>
      <View style={styles.detailInfo}>
        <View>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.special}>{data?.special_ingredient}</Text>
        </View>
        <View>
          <SpecialProduct type={data?.type} ingredients={data?.ingredients} />
        </View>
      </View>
      <View style={styles.detailInfo}>
        <View style={styles.ratingContainer}>
          <Svg height="23px" width="23px">
            <BigStarIcon />
          </Svg>
          <Text style={styles.rating}>{data?.average_rating}</Text>
          <Text style={styles.subRating}>({data?.ratings_count})</Text>
        </View>
        <View style={styles.roastContainer}>
          <Text style={styles.roast}>{data?.roasted}</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailInfo;
