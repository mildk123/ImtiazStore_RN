import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";

import { Icon } from "native-base";

import Homescreen from "../Screens/Homescreen";
import Messages from "../Screens/Messages";
import Cart from "../Screens/Cart";
import Account from "../Screens/Account";

const HomeStack = createStackNavigator({
  Home: {
    screen: Homescreen
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <Ionicons size={28} name='ios-home' />
  ),
};

const MessagesStack = createStackNavigator({
  Messages: Messages
});

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <Ionicons size={28} name='ios-chatbubbles' />

  ),
};

const CartStack = createStackNavigator({
  Cart: Cart
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <Ionicons size={28} name='md-cart' />

  ),
};

const AccountStack = createStackNavigator({
  Account: Account
});

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <Ionicons size={28} name='ios-person' />
  ),
};

export default createBottomTabNavigator(
  {
    HomeStack,
    MessagesStack,
    CartStack,
    AccountStack
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    }
  }
);
