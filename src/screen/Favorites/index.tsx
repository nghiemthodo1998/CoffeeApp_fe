import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useFavoritesScreen, {FavoritesScreenProps} from './hook.ts';

const FavoritesScreen: FC<FavoritesScreenProps> = props => {
  const {} = useFavoritesScreen(props);
  return (
    <View>
      <Text>FavoritesScreen</Text>
    </View>
  );
};

export default FavoritesScreen;
