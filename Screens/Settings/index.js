import React, { Component } from "react";
import Header from '../../Helper/Header';

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon,
  Badge
} from "native-base";

class Settings extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header
          icon={"menu"}
          headerColor={"#8E54E9"}
          title={"Settings"}
          searchBtn={false}
          favBtn={false}
          threeDots={false}
        />

        <Content>
          <Text>Settings</Text>
        </Content>

       
      </Container>
    );
  }
}

export default Settings;
