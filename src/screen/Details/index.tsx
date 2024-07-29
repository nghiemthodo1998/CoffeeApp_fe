import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useDetailScreen, {DetailScreenProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Svg} from 'react-native-svg';
import Window from '../../assets/icons/Window.tsx';
import BackArrowIcon from '../../assets/icons/backArrowIcon.tsx';
import RedHeartIcon from '../../assets/icons/RedHeartIcon.tsx';
import {theme} from '../../common/theme.ts';
import DetailInfo from '../../components/FlatListItem/DetailInfo/index.tsx';
import AddProductDetail from '../../components/AddProductDetail/index.tsx';

const DetailScreen: FC<DetailScreenProps> = props => {
  const {data, handleBack} = useDetailScreen(props);
  return (
    <View style={styles.detailWrapper}>
      <ScrollView contentContainerStyle={styles.detailContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          source={data?.imagelink_portrait}>
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
          </View>
        </ImageBackground>
        <View style={styles.detailInfoWrapper}>
          <DetailInfo data={data} />
          <AddProductDetail data={data} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
