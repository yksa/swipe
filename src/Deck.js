import React, { Component } from "react";
import { View, Animated, PanResponder } from "react-native";

export class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        console.log(gestureState);
      },
      onPanResponderRelease: () => {},
    });

    this.panResponder = panResponder;
  }
  renderCards() {
    return this.props.data.map((item) => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return <View>{this.renderCards()}</View>;
  }
}

export default Deck;
