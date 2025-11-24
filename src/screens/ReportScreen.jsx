import React from 'react'
import {View, StyleSheet, Dimensions, Text} from "react-native"
import Header from '../components/Header';

import { useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

function ReportScreen() {
   const entries = useSelector((state) => state.input.entries);

  return (
   <View style={styles.container}>
    <Header header={"Report"}/>
     {entries.map((entry) => (
        <View key={entry.id} style={styles.entryContainer}>
          <Text>{entry.text}</Text>
        </View>
      ))}
   </View>
  )
}

export default ReportScreen

const styles =  StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: height,
    padding: height * 0.04,
  },
})