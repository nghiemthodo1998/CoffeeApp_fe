import {ScrollView, View} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useFavoritesScreen, {FavoritesScreenProps} from './hook.ts';
import HeaderScreen from '../../components/HeaderScreen/index.tsx';
import FavoriteItem from '../../components/FavoriteItem/index.tsx';

const FavoritesScreen: FC<FavoritesScreenProps> = props => {
  const {favoriteList, handleToggleFavorite} = useFavoritesScreen(props);
  return (
    <View style={styles.favoriteWrapper}>
      <ScrollView contentContainerStyle={styles.favoriteContainer}>
        <HeaderScreen />
        {favoriteList.map((item, index) => {
          console.log('item', item);
          return (
            <FavoriteItem
              key={index}
              data={item}
              onToggleFavorite={handleToggleFavorite}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
