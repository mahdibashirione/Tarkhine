import { createSlice } from "@reduxjs/toolkit";
import getTime from "../../utils/getTime";
import getPersianDate from "../../utils/getPersianDate";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: JSON.parse(localStorage.getItem("orders")) || [],
  reducers: {
    addOrder: (state, action) => {
      state.push({
        time: getTime(),
        date: getPersianDate(),
        branch: "اکباتان",
        ...action.payload,
      });
      localStorage.setItem("orders", JSON.stringify(state));
    },
    cancelOrder: (state, action) => {
      const filterOrders = state.filter((order) => order.id !== action.payload);
      state = filterOrders;
      localStorage.setItem("orders", JSON.stringify(state));
    },
  },
});

export const { addOrder, cancelOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
