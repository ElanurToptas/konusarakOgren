import React from 'react'
import {View, TextInput, StyleSheet} from "react-native"

function InputItem({message, onChange}) {
  
  return (
    <View>
       <View>
        <TextInput
        placeholder='Bugün Nasılsın?'
        style={styles.inputText}
        value={message}
        onChangeText={onChange}
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