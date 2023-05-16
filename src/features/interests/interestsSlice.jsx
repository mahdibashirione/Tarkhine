import { createSlice } from "@reduxjs/toolkit";

export const interestsSlice = createSlice({
  name: "interests",
  initialState: JSON.parse(localStorage.getItem("interests")) || [],
  reducers: {
    addInterests: (state, action) => {
      state.push(action.payload.id);
      localStorage.setItem("interests", JSON.stringify(state));
    },
    removeInterests: (state, action) => {
      const indexTarget = state.findIndex((item) => item == action.payload.id);
      if (state.length === 1) {
        state = state.splice(indexTarget, 1);
        localStorage.clear("interests");
      } else {
        state = state.splice(indexTarget, 1);
        localStorage.setItem("interests", JSON.stringify(state));
      }
    },
  },
});

export const { addInterests, removeInterests } = interestsSlice.actions;
export default interestsSlice.reducer;
