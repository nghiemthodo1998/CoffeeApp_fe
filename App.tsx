import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailScreen from './src/screen/Details';
import HomeNavigation from './src/navigation/Home';
import {Provider} from 'react-redux';
import store from './src/store';

const HomeStack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
          <HomeStack.Screen name="HomeScreen" component={HomeNavigation} />
          <HomeStack.Screen name="DetailScreen" component={DetailScreen} />
        </HomeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
