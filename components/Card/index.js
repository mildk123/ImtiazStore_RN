import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Random Item Name</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem cardBody>
              <Image source={this.props.source} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>

              <Left>
                <Button transparent>
                  {/* <Icon active name="thumbs-up" /> */}
                  <Text>Rs. 'PRICE'</Text>
                </Button>
              </Left>

            </CardItem>

          </Card>
        </Content>
      </Container>
    );
  }
}