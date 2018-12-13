import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import Homescreen from '../Screens/Homescreen'
import Messages from '../Screens/Messages'
import Cart from '../Screens/Cart'
import Account from '../Screens/Account';


const HomeStack = createStackNavigator({
  Home: {
    screen : Homescreen,
  }
},{
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    backgroundColor: 'red',
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};



const MessagesStack = createStackNavigator({
    Messages: Messages
});

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}
    />
  ),
};


const CartStack = createStackNavigator({
    Cart: Cart,
  });
  
  CartStack.navigationOptions = {
    tabBarLabel: 'Cart',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
      />
    ),
  };

const AccountStack = createStackNavigator({
    Account: Account
});

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  MessagesStack,
  CartStack,
  AccountStack,
});