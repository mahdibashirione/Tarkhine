import { createSlice } from "@reduxjs/toolkit";
import getTime from "../../utils/getTime";
import getPersianDate from "../../utils/getPersianDate";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: JSON.parse(localStorage.getItem("orders")) || [],
  reducers: {
    addOrder: (state, action) => {
      state.push({
        id: Math.floor(Math.random() * 1000),
        status: "Current",
        time: getTime(),
        date: getPersianDate(),
        branch: "اکباتان",
        ...action.payload,
      });
      localStorage.setItem("orders", JSON.stringify(state));
    },
  },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
