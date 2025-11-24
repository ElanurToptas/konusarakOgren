import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
  name: "input",
  initialState: {
    input: "",
    entries: [],
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    addEntry(state, action) {
      state.entries.push(action.payload);
    },
    setEntries(state, action) {
      state.entries = action.payload;
    },
  },
});

export const { setInput, addEntry, setEntries } = textSlice.actions;
export default textSlice.reducer;
