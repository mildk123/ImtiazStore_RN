import React from "react";
import { createSwitchNavigator } from "react-navigation";

import AuthLoading from "../Screens/AuthLoading";

import AuthStackNavigator from "../Screens/Auth/index";

import AppDrawerNavigator from "./AppDrawerNavigator";

import Header from '../Helper/Header'

export default createSwitchNavigator({
  AuthLoading: AuthLoading,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator,
  Header : Header
});
