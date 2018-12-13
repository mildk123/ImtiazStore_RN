import React, { Component } from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

import HomeGrid from "../../Helper/HomeGrid";

import Footer from '../../Helper/Footer'

import {
  Container,
  Content
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

        <Footer />
      </Container>
    );
  }
}

export default Homescreen;
