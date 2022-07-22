import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
    };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        state.items.find((item) => item.id === action.payload.id).quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
      state.totalPrice += action.payload.price;
      state.totalQuantity += 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        if (item.quantity > 1) {
          state.items.map((item) => {
            if (item.id === action.payload) {
              item.quantity -= 1;
            }

            return item;
          });
        } else {
          state.items = state.items.filter((item) => {
            return item.id !== action.payload;
          });
        }

        state.totalPrice -= item.price;
        state.totalQuantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
