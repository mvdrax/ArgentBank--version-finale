import { createSlice } from "@reduxjs/toolkit";

const profilSlice = createSlice({
  name: "profil",
  initialState: {
    email: "",
    userName: "",
    firstName: "",
    lastName: "",
    
  },
  reducers: {
    userProfil: (state, action) => {
      state.email = action.payload.info.body.email;
      state.userName = action.payload.info.body.userName;
      state.firstName = action.payload.info.body.firstName;
      state.lastName = action.payload.info.body.lastName;
      
    },
  },
});

export const { userProfil } = profilSlice.actions;
export default profilSlice.reducer;