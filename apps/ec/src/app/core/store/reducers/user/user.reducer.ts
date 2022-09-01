import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload.user;
    },
  },
});

export const userActions = userSlice.actions;
