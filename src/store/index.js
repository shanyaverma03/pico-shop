import { configureStore } from "@reduxjs/toolkit";
import { authenticationSlice } from "./authenticationSlice";
import { wishlistSlice } from "./wishlistSlice";

const store = configureStore({
  reducer: {
    authentication: authenticationSlice.reducer,
    wishlist: wishlistSlice.reducer,
  },
});

export default store;
