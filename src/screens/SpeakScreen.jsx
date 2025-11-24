import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Header from "../components/Header";
import MessageBubble from "../components/MessageBubble";
import Keyboard from "../components/Keyboard";
const { width, height } = Dimensions.get("window");

function SpeakScreen() {
  return (
    <View style={styles.container}>
      <Header header={"AI ile Konuş"}/>
      <MessageBubble />
      <Keyboard />
    </View>
  );
}

export default SpeakScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height,
    padding: height * 0.03,
  },
});
