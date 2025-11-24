import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";

import { useDispatch } from "react-redux";
import { loadEntries } from "./src/storage/storage";
import { setEntries } from "./src/redux/store/textSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    loadEntries().then((stored) => {
      dispatch(setEntries(stored));
    });
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

