import React, { Component } from "react";
import { View, Animated, PanResponder, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.3 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

// export class Deck extends Component {
//   constructor(props) {
//     super(props);

//     const position = new Animated.ValueXY();

//     const panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderMove: (evt, gestureState) => {
//         position.setValue({ x: gestureState.dx, y: gestureState.dy });
//       },
//       onPanResponderRelease: () => {
//         this._resetPosition();
//       },
//     });

//     this.panResponder = panResponder;
//     // this.position = position;
//     this.state = { position };
//   }

//   _resetPosition() {
//     Animated.spring(this.position, {
//       toValue: { x: 0, y: 0 },
//     });
//   }

//   _getCardStyle() {
//     const position = this.state.position;
//     const rotate = position.x.interpolate({
//       inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
//       outputRange: ["-120deg", "0deg", "120deg"],
//     });

//     return {
//       ...position.getLayout(),
//       transform: [{ rotate }],
//     };
//   }

//   renderCards() {
//     return this.props.data.map((item, index) => {
//       if (index === 0) {
//         return (
//           <Animated.View
//             key={item.id}
//             style={this._getCardStyle()}
//             {...this.panResponder.panHandlers}
//           >
//             {this.props.renderCard(item)}
//           </Animated.View>
//         );
//       }
//       return this.props.renderCard(item);
//     });
//   }
//   render() {
//     return <View>{this.renderCards()}</View>;
//   }
// }

const Deck = (props) => {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > SWIPE_THRESHOLD) {
        _forceSwipe("right");
      } else if (gestureState.dx < -SWIPE_THRESHOLD) {
        _forceSwipe("left");
      } else _resetPosition();
    },
  });

  const _resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: true,
    }).start();
  };

  const _forceSwipe = (direction) => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      useNativeDriver: true,
      duration: SWIPE_OUT_DURATION,
    }).start();
  };

  const _getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      transform: [...position.getTranslateTransform(), { rotate }],
    };
  };

  const renderCards = () => {
    return props.data.map((item, index) => {
      if (index === 0) {
        return (
          <Animated.View
            key={item.id}
            style={_getCardStyle()}
            {...panResponder.panHandlers}
          >
            {props.renderCard(item)}
          </Animated.View>
        );
      }
      return props.renderCard(item);
    });
  };

  return <View>{renderCards()}</View>;
};

export default Deck;
