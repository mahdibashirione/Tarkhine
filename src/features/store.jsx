import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/orderSlice";
import interestsReducer from "./interests/interestsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    orders: ordersReducer,
    interests: interestsReducer,
  },
});
