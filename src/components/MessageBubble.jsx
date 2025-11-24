import React from 'react'
import {View, Text,StyleSheet, Dimensions} from "react-native"
const { width, height } = Dimensions.get("window");

function MessageBubble() {
  return (
     <View>
       <View style={style.container}> 

       </View>
       </View>
  )
}

export default MessageBubble

const style =  StyleSheet.create({
  container:{
    height:height*0.53,
  }
})