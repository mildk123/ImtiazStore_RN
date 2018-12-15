import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { createStackNavigator } from "react-navigation";


import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

class Authentication extends Component {
  static navigationOptions = {
    header: null
  };
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.picSize}
            source={require("../../assets/icon.png")}
          />
        </View>

        <View style={styles.btnContainer}>
          <Button
            onPress={() => this.props.navigation.push("SignUp")}
            title="Sign Up"
            iconRight
            icon={<Icon name="keyboard-return" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#8E54E9",
              width: 150,
              height: 55,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          />
          <Button
            onPress={() => this.props.navigation.push("SignIn")}
            title="Login"
            iconRight
            icon={<Icon name="keyboard-return" size={15} color="white" />}
            buttonStyle={{
              backgroundColor: "#8E54E9",
              width: 150,
              height: 55,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
          />
        </View>
      </View>
    );
  }
}


export default AuthStackNavigator = createStackNavigator({
  Auth: Authentication,
  SignIn: SignIn,
  SignUp: SignUp
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-start"
  },
  imgContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  picSize: {
    maxHeight: 360,
    maxWidth: 360
  },
  btnContainer: {
    flexDirection: "row",
    margin: 50,
    alignItems: "center",
    justifyContent: "space-evenly"
  }
});
