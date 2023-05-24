import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import ordersReducer from "./orders/orderSlice";
import interestsReducer from "./interests/interestsSlice";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    orders: ordersReducer,
    interests: interestsReducer,
  },
});
