import React, { useState } from "react";
import { View } from "react-native";
import KeyboardItem from "./KeyboardItem";

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
        setText(text + "\n");
        break;
          case " ":
        setText(text + " ");
        break;
      default:
        setText(text + item);
    }
  };
  return (
    <View>
      <KeyboardItem letter={handleLetter} isUpper={isUpper}/>
    </View>
  );
}

export default Keyboard;
