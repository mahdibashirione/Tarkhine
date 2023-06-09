import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: JSON.parse(localStorage.getItem("Auth_Tarkhine")) || false,
  reducers: {
    setAuth: (state, action) => {
      state = action.payload;
      localStorage.setItem("Auth_Tarkhine", JSON.stringify(state));
    },
    removeAuth: (state, action) => {
      state = false;
      localStorage.clear("Auth_Tarkhine");
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;
