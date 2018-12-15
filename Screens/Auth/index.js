import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

class Authentication extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.picSize} source={require("../../assets/icon.png")} />
        </View>

        <View style={styles.btnContainer}>
          <Button
            title="Sign Up"
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
            title="Log In"
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

export default Authentication;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ACBDD',
    justifyContent: 'flex-start'
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
    flexDirection: 'row',
    margin: 50,
    alignItems: "flex-end",
    justifyContent: 'center'
  }
});
