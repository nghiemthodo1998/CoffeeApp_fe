import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useBeanDetailsScreen, {BeanDetailsScreenProps} from './hook.ts';

const BeanDetailsScreen: FC<BeanDetailsScreenProps> = props => {
  const {} = useBeanDetailsScreen(props);
  return (
    <View>
      <Text>BeanDetailsScreen</Text>
    </View>
  );
};

export default BeanDetailsScreen;
