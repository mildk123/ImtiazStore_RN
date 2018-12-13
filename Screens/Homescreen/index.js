import React, { Component } from "react";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, Image } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {}

  render() {
    return (
      <Container>
        <Header
          icon={"menu"}
          headerColor={"purple"}
          title={"Homescreen"}
          searchBtn={true}
          favBtn={true}
          threeDots={true}
        />

        <Content>
          <Carousel />

          <Grid style={{backgroundColor: 'lightblue'}}>
            <Col style={{ backgroundColor: "green" }}>
              <Row style={{backgroundColor: 'red'}}>
                <Card source={require("../../assets/Trending/heads.jpg")} />
              </Row>
            </Col>

            <Col style={{ backgroundColor: "#00CE9F" }}>
              <Row>
                <Card source={require("../../assets/Trending/watch1.jpg")} />
              </Row>
            </Col>
          </Grid>


          <Grid>
            <Col style={{ backgroundColor: "#635DB7" }}>
              <Row>
                <Card source={require("../../assets/Trending/heads.jpg")} />
              </Row>
            </Col>

            <Col style={{ backgroundColor: "#00CE9F" }}>
              <Row>
                <Card source={require("../../assets/Trending/watch1.jpg")} />
              </Row>
            </Col>
          </Grid>
        </Content>

        {/* <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer> */}
      </Container>
    );
  }
}

export default Homescreen;
