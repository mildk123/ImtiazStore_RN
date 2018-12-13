import React, { Component } from "react";
import Slideshow from "react-native-slideshow";

export default class SlideshowTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        { url: require("../../assets/Carousel/0.jpg") },
        { url: require("../../assets/Carousel/1.webp") },
        { url: require("../../assets/Carousel/2.webp") },
        { url: require("../../assets/Carousel/3.webp") },
        { url: require("../../assets/Carousel/4.webp") },
        { url: require("../../assets/Carousel/5.webp") },
        { url: require("../../assets/Carousel/6.webp") }
      ]
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <Slideshow
        arrowSize={0}
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })}
      />
    );
  }
}
