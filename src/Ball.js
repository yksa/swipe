import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

export class Ball extends Component {
  render() {
    return <View style={styles.ball} />;
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: "black",
  },
});

export default Ball;
