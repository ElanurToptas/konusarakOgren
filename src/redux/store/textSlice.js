import { createSlice } from "@reduxjs/toolkit";

export const textSlice =  createSlice({
    name:"input",
    initialState:{
        input: "",
    },
    reducers:{
        input:(state, action) => {
            state.input= action.payload;
        }
    }
})

export const {input} = textSlice.actions;
export default textSlice.reducer;