import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, AsyncStorage } from "react-native";
import { Input, Button } from "react-native-elements";

export class SignUp extends Component {
  static navigationOptions = {
    title: "Create Account",
    headerStyle: {
      backgroundColor: "#8E54E9"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  _onPress = async () => {
    await AsyncStorage.setItem("userToken", "Milad");
    this.props.navigation.navigate("App");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputDiv}>
          <Input
            label="Email"
            labelStyle={{
              margin: 5,
              fontSize: 22,
              color: "#8E54E9",
              fontStyle: "italic"
            }}
            placeholder="abec@domain.com"
            leftIcon={<Icon size={20} name="envelope-o" />}
          />
          <Input
            labelStyle={{
              margin: 5,
              fontSize: 22,
              color: "#8E54E9",
              fontStyle: "italic"
            }}
            label="Password"
            placeholder="********"
            leftIcon={<Icon size={20} name="lock" />}
          />
        </View>

        <View style={styles.btnDiv}>
          <Button
            title="Done"
            iconRight
            onPress={() => this._onPress()}
            icon={<Icon name="chevron-right" size={15} color="white" />}
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

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inputDiv: {
    marginTop: 18,
    flexDirection: "column",
    alignItems: "center"
  },
  btnDiv: {
    alignItems: "flex-end",
    margin: 25
  }
});
