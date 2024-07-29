import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useHeaderScreen, {HeaderScreenProps} from './hook.ts';
import LinearGradient from 'react-native-linear-gradient';
import {Svg} from 'react-native-svg';
import Window from '../../assets/icons/Window.tsx';

const HeaderScreen: FC<HeaderScreenProps> = props => {
  const {} = useHeaderScreen(props);
  return (
    <View style={styles.stackWrapper}>
      <LinearGradient
        colors={['#21262E', '#21262E00']}
        style={styles.windowWrapper}>
        <Svg height="14px" width="14px">
          <Window />
        </Svg>
      </LinearGradient>
      <LinearGradient
        colors={['#21262E', '#21262E00']}
        style={styles.windowWrapper}>
        <Svg height="14px" width="14px">
          <Window />
        </Svg>
      </LinearGradient>
    </View>
  );
};

export default HeaderScreen;
