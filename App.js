import { StyleSheet, View, Text, Image, Button } from "react-native";
import Deck from "./src/Deck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "https://picsum.photos/800/200",
  },
  {
    id: 2,
    text: "Card #2",
    uri: "https://picsum.photos/800/201",
  },
  {
    id: 3,
    text: "Card #3",
    uri: "https://picsum.photos/800/202",
  },
  {
    id: 4,
    text: "Card #4",
    uri: "https://picsum.photos/800/203",
  },
  {
    id: 5,
    text: "Card #5",
    uri: "https://picsum.photos/800/204",
  },
  {
    id: 6,
    text: "Card #6",
    uri: "https://picsum.photos/800/205",
  },
  {
    id: 7,
    text: "Card #7",
    uri: "https://picsum.photos/800/206",
  },
  {
    id: 8,
    text: "Card #8",
    uri: "https://picsum.photos/800/207",
  },
];

export default function App() {
  const renderCard = (item) => {
    return (
      <View style={styles.card} key={item.id}>
        <View></View>
        <Image source={{ uri: item.uri }} height={200} />
        <Text>{item.text}</Text>
        <Text style={{ marginBottom: 10 }}>another text</Text>
        <View style={{ marginHorizontal: 40 }}>
          <Button title="View Now!" color="#03A9F4" />
        </View>
      </View>
    );
  };

  const _onSwipeLeft = () => {};

  const _onSwipeRight = () => {};

  return (
    <View style={styles.container}>
      <Deck
        data={DATA}
        renderCard={renderCard}
        onSwipeLeft={_onSwipeLeft}
        onSwipeRight={_onSwipeRight}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  card: {
    borderWidth: 1,
    borderColor: "gray",
    margin: 4,
    marginHorizontal: 10,
    paddingBottom: 8,
  },
});
