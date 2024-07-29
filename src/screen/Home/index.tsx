import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import styles from './style.ts';
import useHomeScreen, {HomeScreenProps} from './hook.ts';
import Window from '../../assets/icons/Window.tsx';
import {Svg} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from '../../assets/icons/SearchIcon.tsx';
import {theme} from '../../common/theme.ts';
import HomeItem from '../../components/FlatListItem/HomeItem/index.tsx';
import BeansData from '../../data/BeansData.ts';
import EmptyItem from '../../components/FlatListItem/EmptyItem/index.tsx';
import HeaderScreen from '../../components/HeaderScreen/index.tsx';

const HomeScreen: FC<HomeScreenProps> = props => {
  const {
    isFocusSearch,
    categoriesList,
    textSearch,
    categorySelected,
    coffeeList,
    coffeeRef,
    handleFocusSearch,
    handleBlurSearch,
    handleSearchCoffee,
    handleSelectCategory,
  } = useHomeScreen(props);
  return (
    <View style={styles.homeWrapper}>
      <ScrollView style={styles.homeContainer}>
        <View style={styles.headerWrapper}>
          <HeaderScreen />
        </View>
        <Text style={styles.textSearch}>Find the best{`\n`}coffee for you</Text>
        <View style={styles.inputSearchWrapper}>
          <View style={styles.inputSearchContainer}>
            <Svg height="20px" width="20px">
              <SearchIcon
                color={
                  isFocusSearch || textSearch
                    ? theme.button.orange
                    : theme.button.gray
                }
              />
            </Svg>
            <TextInput
              value={textSearch}
              onFocus={handleFocusSearch}
              onBlur={handleBlurSearch}
              style={styles.inputSearch}
              placeholder="Find Your Coffee..."
              placeholderTextColor={theme.text.gray}
              onChangeText={text => handleSearchCoffee(text)}
            />
          </View>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.categoriesListContainer}>
          {categoriesList.map((item, index) => {
            return (
              <View key={index} style={styles.categoryWrapper}>
                <TouchableOpacity
                  style={styles.categoryContainer}
                  onPress={() => handleSelectCategory(item)}>
                  <Text
                    style={
                      categorySelected === item
                        ? [styles.categoryName, styles.categoryNameActive]
                        : styles.categoryName
                    }>
                    {item}
                  </Text>
                  {categorySelected === item && (
                    <View style={styles.categoryActive}></View>
                  )}
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <FlatList
          ref={coffeeRef}
          ListEmptyComponent={<EmptyItem text="Coffee not available" />}
          horizontal
          contentContainerStyle={styles.coffeeContainer}
          data={coffeeList}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <HomeItem data={item} isShowRating={true} />;
          }}
        />
        <View style={styles.beansWrapper}>
          <Text style={styles.beansLabel}>Coffee beans</Text>
          <FlatList
            horizontal
            ListEmptyComponent={<EmptyItem text="Bean not available" />}
            contentContainerStyle={styles.beansContainer}
            data={BeansData}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return <HomeItem data={item} />;
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
