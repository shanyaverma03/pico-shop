import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authenticationSlice";
import { wishlistSlice } from "./wishlistSlice";
import { cartSlice } from "./cartSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    wishlist: wishlistSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
