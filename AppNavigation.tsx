import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigation from './src/navigation/Home';
import DetailScreen from './src/screen/Details';

const HomeStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={HomeNavigation} />
      <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

export default AppNavigation;
