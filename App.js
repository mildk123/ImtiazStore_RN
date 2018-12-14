import React from "react";
import Navigator from './navigation/navigator';
// import TabNavigator from './navigation/tabNavigator';
import { Font, AppLoading } from "expo";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadingComplete: false
    };
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      await Font.loadAsync({
        // Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
      );
    } else {
      return (
          <Navigator />
      );
    }
  }
}
