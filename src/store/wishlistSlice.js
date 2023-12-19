import { createSlice } from "@reduxjs/toolkit";

const initialState = { wishlist: [] };

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      console.log(action.payload);
      state.wishlist.push(action.payload);
    },
    removeFromWishlist(state, action) {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const wishlistActions = wishlistSlice.actions;
