import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
  },
});
