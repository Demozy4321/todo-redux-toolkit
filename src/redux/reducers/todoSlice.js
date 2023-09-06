import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log(action.payload);

      state.tasks.push(action.payload);
    },

    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.text !== action.payload);
    },
  },
});

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;
