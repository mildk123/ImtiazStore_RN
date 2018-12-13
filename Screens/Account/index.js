import React, { Component } from "react";
import Header from "../../components/Header";

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
          headerColor={"purple"}
          title={"Settings"}
          searchBtn={false}
          favBtn={false}
          threeDots={false}
        />

        <Content>
          <Text>Settings</Text>
        </Content>

        <Footer>
          <FooterTab style={{ backgroundColor: "purple" }}>
            <Button
              onPress={() => this.props.navigation.push("Homescreen")}
              vertical
            >
              <Icon name="md-home" />
              <Text>Home</Text>
            </Button>

            <Button
              onPress={() => this.props.navigation.push("MessageScreen")}
              badge
              vertical
            >
              <Badge >
                <Text>3</Text>
              </Badge>
              <Icon name="md-chatboxes" />
              <Text>Messages</Text>
            </Button>

            <Button
              onPress={() => this.props.navigation.push("CartScreen")}
              badge
              vertical
            >
              <Badge danger>
                <Text>2</Text>
              </Badge>
              <Icon name="md-cart" />
              <Text>Cart</Text>
            </Button>

            <Button
              active
              onPress={() => this.props.navigation.push("AccountScreen")}
              vertical
            >
              <Icon active name="md-person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Settings;
