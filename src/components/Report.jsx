import React from 'react'
import { View, Text, StyleSheet } from "react-native";

import { useSelector } from "react-redux";

function Report() {
    const entries = useSelector((state) => state.input.entries);
  return (
    <View>
         {entries.map((entry) => (
                <View key={entry.id} style={[styles.container , { backgroundColor: entry.aiResult.label === "POSITIVE" ? "#d2e896ff" : "gray"}]} >
                  <Text>Kullanıcı:  {entry.text}</Text>
                  <Text>Öneri: {entry.suggestion}</Text>
                  <Text>Özet: {entry.summary}</Text>
                </View>
              ))}
    </View>
  )
}

export default Report

const styles= StyleSheet.create({
    container:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:20,
        padding:10,
        marginBottom:10
    }
})