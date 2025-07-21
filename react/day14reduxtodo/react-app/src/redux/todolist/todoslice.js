import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProductData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data, "data");
  return response.data;
});

const initialState = {
  todo: JSON.parse(localStorage.getItem("todoDatas")) || [],
  product: [],
};

export const todoSlice = createSlice({
  name: "todoData",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todo = [...state.todo, action.payload];
      localStorage.setItem("todoDatas", JSON.stringify(state.todo));
    },
    updateTodo: (state, action) => {
      state.todo = state.todo.map((item, i) =>
        i == action.payload.editIndex ? action.payload.inputText : item
      );
      localStorage.setItem("todoDatas", JSON.stringify(state.todo));
    },
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((item, i) => i != action.payload);

      localStorage.setItem("todoDatas", JSON.stringify(state.todo));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.product = [...action.payload];

      builder.addCase(fetchProducts.rejected, (state, action) => {
        console.log(action.payload);
      });
    });
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
