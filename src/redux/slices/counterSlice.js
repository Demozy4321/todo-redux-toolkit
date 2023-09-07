import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.value += 1;
    },

    decrementCounter: (state) => {
      state.value -= 1;
    },

    incrementAmount: (state, action) => {
        state.value += action.payload;
    }
  },
});

export  const {incrementCounter, decrementCounter, incrementAmount} = counterSlice.actions;

export default counterSlice.reducer;
