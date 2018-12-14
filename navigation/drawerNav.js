import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Homescreen from "../Screens/Homescreen";
import Messages from "../Screens/Messages";
import Cart from "../Screens/Cart";
import Account from "../Screens/Account";

export default createDrawerNavigator({
  Homescreen,
  Messages,
  Cart,
  Account
});
