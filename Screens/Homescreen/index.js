import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import { Header, StatusBar } from "react-native-elements";

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "search", color: "#fff" }}
        />
        <ScrollView>
          <Text>123123</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Homescreen;
