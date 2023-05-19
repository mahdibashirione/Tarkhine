import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addCart: (state, action) => {
      state.push({ ...action.payload, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const indexItem = state.findIndex(
        (product) => product.id === action.payload
      );
      if (state.length > 1) {
        state = state.splice(indexItem, 1);
        localStorage.setItem("cart", JSON.stringify(state));
      } else {
        state = state.splice(indexItem, 1);
        localStorage.clear("cart");
      }
    },
    increment: (state, action) => {
      const item = state.find((product) => product.id === action.payload);
      item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    dicrement: (state, action) => {
      const indexItem = state.findIndex(
        (product) => product.id === action.payload
      );
      if (state[indexItem].quantity > 1) {
        state[indexItem].quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    removeAllItem: (state, action) => {
      state.length = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addCart, removeItem, increment, dicrement, removeAllItem } =
  cartSlice.actions;
export default cartSlice.reducer;
