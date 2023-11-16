import { createSlice } from '@reduxjs/toolkit';


const userSlice2 = createSlice({
    name: 'profile',
    initialState: {
      email: "",
      userName: "",
      firstName: "",
      lastName: "",
    },
    reducers: {
      setProfileData: (state, action) => {
        return {
          ...state,
          email: action.payload.infos.body.email,
          firstName:  action.payload.infos.body.firstName,
          lastName:  action.payload.infos.body.lastName,
          userName:  action.payload.infos.body.email,

        };
      },
    },
  });
  
  export const { setProfileData } = userSlice2.actions;
  export default userSlice2.reducer;