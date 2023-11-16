import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../actions/actions";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;