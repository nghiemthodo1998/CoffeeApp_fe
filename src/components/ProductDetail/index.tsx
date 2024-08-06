import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useProductDetail, {ProductDetailProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import BackArrowIcon from '../../assets/icons/backArrowIcon.tsx';
import {Svg} from 'react-native-svg';
import RedHeartIcon from '../../assets/icons/RedHeartIcon';
import DetailInfo from '../FlatListItem/DetailInfo/index.tsx';
import {theme} from '../../common/theme.ts';

const ProductDetail: FC<ProductDetailProps> = props => {
  const {
    data,
    borderRadiusImage = 0,
    handleBack,
    onToggleFavorite,
  } = useProductDetail(props);
  return (
    <ImageBackground
      style={styles.backgroundImage}
      imageStyle={{
        borderTopLeftRadius: borderRadiusImage,
        borderTopRightRadius: borderRadiusImage,
      }}
      source={data?.imagelink_portrait as ImageSourcePropType}>
      <View style={styles.stackWrapper}>
        <LinearGradient
          colors={['#21262E', '#0C0F14']}
          style={styles.windowWrapper}>
          <TouchableOpacity onPress={handleBack}>
            <Svg height="21px" width="21px">
              <BackArrowIcon />
            </Svg>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity onPress={e => onToggleFavorite(data?.id)}>
          <LinearGradient
            colors={['#21262E', '#0C0F14']}
            style={styles.windowWrapper}>
            <Svg height="19px" width="19px">
              <RedHeartIcon
                color={
                  data?.favourite ? theme.color.red : theme.color.lightGray
                }
              />
            </Svg>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.detailInfoWrapper}>
        <DetailInfo data={data} />
      </View>
    </ImageBackground>
  );
};

export default ProductDetail;
