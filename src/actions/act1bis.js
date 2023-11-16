import { createSlice } from '@reduxjs/toolkit';

const userSlicen = createSlice({
  name: 'user',
  initialState: {
    token: '',
    error: '',
  },
  reducers: {
    setToken: (state, action) => {
    
        localStorage.setItem('token', action.payload); 
      return {
        ...state,
        token: action.payload,
        
      };


    },
  },
});

export const { setToken } = userSlice.actions;

