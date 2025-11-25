import React, { useState, useEffect } from "react";
import { View } from "react-native";
import KeyboardItem from "./KeyboardItem";
import InputItem from "./InputItem";
import { saveEntries } from "../storage/storage";
import { useSelector, useDispatch } from "react-redux";
import { setInput, addEntry } from "../redux/store/textSlice";
import { clearStorage } from "../storage/storage";
import { HF_TOKEN } from "@env";

// import { analyzeSentiment, warmupModel } from "../services/aiService";

const analyzeSentiment = async (text) => {
  try {
    const res = await fetch(
      "https://router.huggingface.co/hf-inference/models/distilbert/distilbert-base-uncased-finetuned-sst-2-english",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: text }),
      }
    );

    const data = await res.json();
    console.log("HF RAW:", data);

    if (Array.isArray(data) && Array.isArray(data[0])) {
      const best = data[0].sort((a, b) => b.score - a.score)[0];
      return best;
    }

    return null;
  } catch (err) {
    console.log("API ERROR:", err);
    return null;
  }
};

function Keyboard() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.input.entries);
  const [text, setText] = useState("");
  const [isUpper, setIsUpper] = useState(false);

  // useEffect(() => {
  //   warmupModel();
  // }, []);

  const handleLetter = async (item) => {
    switch (item) {
      case "up":
        setIsUpper(!isUpper);
        break;
      case "del":
        setText(text.slice(0, -1));
        break;
      case "Analiz Et":
        if (text.trim() !== "") {
          const aiResult = await analyzeSentiment(text);
          console.log("AI Result:", aiResult);

          let suggestion = "";
          let summary = "";

          if (aiResult && aiResult.label) {
            const label = aiResult.label.toLowerCase();

            if (label === "positive") {
              suggestion = "I'm glad you're having a good day!";
              summary = "It seems like you've had a generally positive day.";
            } else if (label === "negative") {
              suggestion = "Maybe take a little time to rest today.";
              summary = "It seems like you've had a rather difficult day.";
            } else {
              suggestion = "How about taking a short break with a cup of tea?";
              summary = "It seems like your day was neither good nor bad.";
            }
          }

          const newEntry = {
            id: Date.now(),
            text,
            aiResult,
            suggestion,
            summary,
            aiResult,
            suggestion,
            date: new Date().toISOString(),
          };

          dispatch(addEntry(newEntry));
          dispatch(setInput(text));

          await saveEntries([...entries, newEntry]);

          setText("");
        }
        break;

      case " ":
        setText(text + " ");
        break;
      case "AC":
        clearStorage();
        break;
      default:
        const letterToAdd =
          isUpper && typeof item === "string"
            ? item.toUpperCase()
            : item.toLowerCase();
        setText(text + letterToAdd);
    }
  };

  return (
    <View>
      <InputItem message={text} onChange={setText} />
      <KeyboardItem letter={handleLetter} isUpper={isUpper} />
    </View>
  );
}

export default Keyboard;
