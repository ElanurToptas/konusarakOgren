import React from 'react'
import {View,Text, TextInput, StyleSheet,TouchableOpacity} from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons";

function InputItem({message}) {

     const handleEnter = () => {
    
  };
  
  return (
    <View>
       <View>
        <TextInput
        placeholder='Bugün Nasılsın?'
        style={styles.inputText}
        value={message}
        >
        </TextInput>
       </View>
    </View>
  )
}

export default InputItem

const styles =  StyleSheet.create({
inputText:{
    borderColor:"gray",
    borderWidth:0.5,
    borderRadius:10,
    paddingHorizontal:10,
    marginBottom:7,
},

})