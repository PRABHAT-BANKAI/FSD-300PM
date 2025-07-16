import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./todolist/todoslice"
export const store = configureStore({
  reducer: {
    todolistStore:todoReducer
  },
})