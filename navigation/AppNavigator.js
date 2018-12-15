import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoading from '../Screens/AuthLoading'
import Authentication from '../Screens/Auth';

export default createSwitchNavigator({
  AuthLoading : AuthLoading,
  Auth: Authentication,
  App: MainTabNavigator,
});