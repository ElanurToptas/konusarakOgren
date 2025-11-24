import React, { useState } from "react";
import { View } from "react-native";
import KeyboardItem from "./KeyboardItem";
import InputItem from "./InputItem";

function Keyboard() {
  const [text, setText] = useState("");
  const [isUpper, setIsUpper] = useState(false);

  const handleLetter = (item) => {
    switch (item) {
      case "up":
        setIsUpper(!isUpper);
        break;
      case "del":
        setText(text.slice(0, -1));
        break;
      case "down":
        setText("");
        break;
          case " ":
        setText(text + " ");
        break;
      default:
       const letterToAdd = isUpper && typeof item === "string" ? item.toUpperCase() : item.toLowerCase();
      setText(text + letterToAdd);
    }
  };
  return (
    <View>
      <InputItem message={text} />
      <KeyboardItem letter={handleLetter} isUpper={isUpper}/>
    </View>
  );
}

export default Keyboard;
