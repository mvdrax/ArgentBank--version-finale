import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
    token: "",
  },

  reducers: {
    

    userEditandDisplay: (state, action) => {
      state.firstName = action.payload.data.firstName;
      state.lastName = action.payload.data.lastName;
      state.userName = action.payload.data.userName;
      if (action.payload.data.token) {
        state.token = action.payload.data.token;
      }
    },

    logout: (state) => {
        state.firstName = "";
        state.lastName = "";
        state.userName = "";
        state.token = "";
      },
  },
});

export default userSlice.reducer