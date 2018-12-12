import React, { Component } from "react";
import Header from "../../components/Header";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Text
} from "native-base";

// import { Tab, Tabs } from "native-base";
// import Tab1 from '../Cart'
// import Tab2 from '../Cart'
// import Tab3 from '../Cart'

class Homescreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header
          headerColor={"purple"}
          tabs={"true"}
          title={"Homescreen"}
          icon={"menu"}
          searchBtn={true}
          favBtn={true}
          threeDots={true}
        />
        {/* <Tabs>
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs> */}

        <Content>
          <Text>This is Content Section</Text>
        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default Homescreen;
