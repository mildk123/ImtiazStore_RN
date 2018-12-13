import React, { Component } from "react";
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

class FooterComp extends Component {
  render() {
    return (
        <Footer>
        {console.log(this)}
        <FooterTab style={{ backgroundColor: "purple" }}>
          <Button
            onPress={() => this.props.navigation.replace("Homescreen")}
            active
            vertical
          >
            <Icon name="md-home" />
            <Text>Home</Text>
          </Button>

          <Button
            onPress={() => this.props.navigation.replace("MessageScreen")}
            badge
            vertical
          >
            <Badge>
              <Text>3</Text>
            </Badge>
            <Icon name="md-chatboxes" />
            <Text>Messages</Text>
          </Button>

          <Button
            onPress={() => this.props.navigation.replace("CartScreen")}
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
            onPress={() => this.props.navigation.replace("AccountScreen")}
            vertical
          >
            <Icon name="md-person" />
            <Text>Account</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterComp;
