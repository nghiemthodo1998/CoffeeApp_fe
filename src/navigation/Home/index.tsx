import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../../common/theme';
import {Svg} from 'react-native-svg';
import HomeIcon from '../../assets/icons/HomeIcon';
import CartScreen from '../../screen/Cart';
import Bag2Icon from '../../assets/icons/Bag2Icon';
import FavoritesScreen from '../../screen/Favorites';
import HeartIcon from '../../assets/icons/HeartIcon';
import OrderHistoryScreen from '../../screen/OrderHistory';
import NotificationIcon from '../../assets/icons/NotificationIcon';
import HomeScreen from '../../screen/Home';

const Tab = createBottomTabNavigator();

const HomeNavigation: FC = props => {
  return (
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
        name="CartScreen"
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
  );
};

export default HomeNavigation;
