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

class Messages extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header
          icon={"menu"}
          headerColor={"purple"}
          title={"Messages"}
          searchBtn={false}
          favBtn={false}
          threeDots={false}
        />

        <Content>
          <Text>Messages</Text>
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
            active
              onPress={() => this.props.navigation.push("MessageScreen")}
              badge
              vertical
            >
              <Badge >
                <Text>3</Text>
              </Badge>
              <Icon active name="md-chatboxes" />
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
              onPress={() => this.props.navigation.push("AccountScreen")}
              vertical
            >
              <Icon name="md-person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Messages;
