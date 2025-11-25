import React, { useState, useEffect } from "react";
import { View } from "react-native";
import KeyboardItem from "./KeyboardItem";
import InputItem from "./InputItem";
import { saveEntries } from "../storage/storage";
import { useSelector, useDispatch } from "react-redux";
import { setInput, addEntry } from "../redux/store/textSlice";
import { clearStorage } from "../storage/storage";

import { analyzeSentiment, warmupModel } from "../services/aiService";

function Keyboard() {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.input.entries);
  const [text, setText] = useState("");
  const [isUpper, setIsUpper] = useState(false);

  const analyzeSentiment = async (text) => {
    try {
      const res = await fetch(
        "https://router.huggingface.co/hf-inference/models/distilbert/distilbert-base-uncased-finetuned-sst-2-english",
        {
          method: "POST",
          headers: {
            Authorization: "",
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

            if (label === "positive")
              ((suggestion = "Güzel bir gün geçirmene sevindim"),
                (summary = "Bugün genel olarak olumlu bir gün geçirmişsin"));
            else if (label === "negative")
              ((suggestion = "Bügün biraz dinlenmeye ne dersin"),
                (summary = "Bugün genel olarak olumsuz bir gün geçirmişsin"));
            else
              ((suggestion = "Bir yeşil çay içmeye ne dersin"),
                (summary = "Bugün fena bir gün değil gibi"));
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
