// import React from "react";
// import { createStackNavigator } from "react-navigation";
// import TabNavigator from "./tabNavigator";
// // import Account from '../Screens/Account'

// export default createStackNavigator(
//   {
//     // Account,
// });



import React from "react";
import { createSwitchNavigator } from "react-navigation";
import TabNavigator from "./tabNavigator";
import DrawerNav from "./drawerNav";
// import Account from '../Screens/Account'

export default createSwitchNavigator(
  {
    TabNavigator,
    DrawerNav
});
