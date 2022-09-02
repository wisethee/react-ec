import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesMap: null,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategoriesMap(state, action) {
      state.categoriesMap = action.payload;
    },
  },
});

export const categoriesAction = categoriesSlice.actions;
