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
const { width, height } = Dimensions.get("window");

const lettersOne = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const lettersTwo = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const lettersThree = ["up", "Z", "X", "C", "V", "B", "N", "M", "del"];
const lettersFour = ["123", ",", " ", ".", "Analiz Et"];

function KeyboardItem({ letter, isUpper }) {
  return (
    <View>
      <View>
        {[lettersOne, lettersTwo, lettersThree, lettersFour].map(
          (letters, index) => (
            <View
              key={index}
              style={[
                styles.container,
                { paddingHorizontal: letters === lettersTwo ? 10 : 0 },
              ]}
            >
              {letters.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.keyboardButtons,
                    {
                      width:
                        letters === lettersFour && item === " " || item === "Analiz Et"
                          ? width * 0.25
                          : width * 0.08,
                        backgroundColor: item === "Analiz Et" ? "#309dff" : "transparent",
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  keyboardButtons: {
    alignItems: "center",
    justifyContent: "center",
    height: height * 0.04,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#309dff",
    marginBottom: 10,
  },
});
