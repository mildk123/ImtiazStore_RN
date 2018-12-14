import React, { Component } from "react";
import Header from "../../Helper/Header";
import Carousel from "../../components/Carousel";

import HomeGrid from "../../Helper/HomeGrid";

import { Container, Content } from "native-base";

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header
          icon={"menu"}
          headerColor={"#8E54E9"}
          title={"Explore"}
          searchBtn={false}
          favBtn={true}
          threeDots={true}
        />

        <Content>
          <Carousel />
          <HomeGrid />
        </Content>
      </Container>
    );
  }
}

export default Homescreen;
