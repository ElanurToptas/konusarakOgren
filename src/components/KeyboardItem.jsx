import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const up = <Ionicons name="arrow-up" size={18} color="black" />;
const del = <Ionicons name="backspace-outline" size={18} color="black" />;
const down = <Ionicons name="return-down-back" size={18} color="black" />;
const { width, height } = Dimensions.get("window");

const lettersOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const lettersTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const lettersThree = ["up", "Z", "X", "C", "V", "B", "N", "M", "del"];
const lettersFour = ["123", ",", " ", ".", "down"];

function KeyboardItem({ letter, isUpper }) {
  return (
    <View>
      <View>
        {[lettersOne, lettersTwo, lettersThree, lettersFour].map(
          (letters, index) => (
            <View
              key={index}
              style={[
                style.container,
                { paddingHorizontal: letters === lettersTwo ? 10 : 0 },
              ]}
            >
              {letters.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    style.keyboardButtons,
                    {
                      width:
                        letters === lettersFour && item === " "
                          ? width * 0.5
                          : width * 0.08,
                    },
                  ]}
                  onPress={() => letter(item)}
                >
                  {item === "up" ? (
                    up
                  ) : item === "del" ? (
                    del
                  ) : item === "down" ? (
                    down
                  ) : typeof item === "string" ? (
                    <Text>
                      {isUpper ? item.toUpperCase() : item.toLowerCase()}
                    </Text>
                  ) : (
                    item
                  )}
                </TouchableOpacity>
              ))}
            </View>
          )
        )}
      </View>
    </View>
  );
}

export default KeyboardItem;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  keyboardButtons: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.72,
    height: height * 0.04,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "blue",
    marginBottom: 10,
  },
});
