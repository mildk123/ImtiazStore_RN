import React, { Component } from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

import HomeGrid from '../../Helper/HomeGrid'

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text,
  Icon
} from "native-base";

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };


  render() {
    return (
      <Container>
        <Header
          icon={"menu"}
          headerColor={"purple"}
          title={"Homescreen"}
          searchBtn={false}
          favBtn={true}
          threeDots={true}
        />

        <Content>
          <Carousel />
          <HomeGrid />
        </Content>

        <Footer style={{backgroundColor: 'purple'}}>
          <FooterTab>
            <Button>
            <Icon active name="md-home" />
              <Text>Home</Text>
            </Button>
            <Button >
            <Icon active name="md-search" />
              <Text>Search</Text>
            </Button>
            <Button >
            <Icon active name="md-cart" />
              <Text>Cart</Text>
            </Button>
            <Button >
            <Icon active name="md-person" />
              <Text>Account</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Homescreen;
