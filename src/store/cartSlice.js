import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      //if item is already there, increase the quantity, else push
      const addedProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (addedProduct) {
        state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const cartActions = cartSlice.actions;
