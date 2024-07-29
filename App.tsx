import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './src/screen/Details';
import HomeNavigation from './src/navigation/Home';

const HomeStack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{headerShown: false}}>
        <HomeStack.Screen name="HomeScreen" component={HomeNavigation} />
        <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
