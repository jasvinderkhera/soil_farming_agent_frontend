import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("role")) || [] // Load initial state from localStorage
};

export const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("role", JSON.stringify(state.value)); // Save state to localStorage
    }
  }
});

export const { add } = roleSlice.actions;
export default roleSlice.reducer;
