import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import HomeScreen from './src/screen/Home';
import BeanDetailsScreen from './src/screen/BeanDetails';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Path, Svg} from 'react-native-svg';
import HomeIcon from './src/assets/icons/HomeIcon';
import CartScreen from './src/screen/Cart';
import Bag2Icon from './src/assets/icons/Bag2Icon';
import FavoritesScreen from './src/screen/Favorites';
import OrderHistoryScreen from './src/screen/OrderHistory';
import HeartIcon from './src/assets/icons/HeartIcon';
import NotificationIcon from './src/assets/icons/NotificationIcon';
import {theme} from './src/common/theme';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.button.orange,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.color.background,
            borderColor: theme.color.background,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => {
              return (
                <Svg height="24px" width="24px">
                  <HomeIcon color={color} />
                </Svg>
              );
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size}) => {
              return (
                <Svg height="24px" width="24px">
                  <Bag2Icon color={color} />
                </Svg>
              );
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({color, size}) => {
              return (
                <Svg height="24px" width="24px">
                  <HeartIcon color={color} />
                </Svg>
              );
            },
          }}
        />
        <Tab.Screen
          name="Order History"
          component={OrderHistoryScreen}
          options={{
            tabBarLabel: 'Order',
            tabBarIcon: ({color, size}) => {
              return (
                <Svg height="24px" width="24px">
                  <NotificationIcon color={color} />
                </Svg>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
