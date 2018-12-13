import React from 'react'
import { createStackNavigator } from 'react-navigation'
// import WelcomeScreen from '../Screens/Welcome'
import Homescreen from '../Screens/Homescreen'
import Messages from '../Screens/Messages'
import Cart from '../Screens/Cart'
import Account from '../Screens/Account'

import Footer from '../Helper/Footer'

export default createStackNavigator({
    Homescreen: Homescreen,
    MessageScreen : Messages,
    CartScreen : Cart,
    AccountScreen : Account,
    Foot : Footer
  });