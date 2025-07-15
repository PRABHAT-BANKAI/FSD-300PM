import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("counterData")) || 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      // action
      state.value += 1;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
    multiplyByAmount: (state, action) => {
      state.value *= action.payload;
      localStorage.setItem("counterData", JSON.stringify(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, multiplyByAmount } = counterSlice.actions;

export default counterSlice.reducer;
