import React from "react";
import { View, StyleSheet, Dimensions, ScrollView } from "react-native";
import Header from "../components/Header";
import Report from "../components/Report";

const { width, height } = Dimensions.get("window");

function ReportScreen() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header header={"Report"} />
        <Report />
      </View>
    </ScrollView>
  );
}

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height,
    padding: height * 0.04,
  },
});
