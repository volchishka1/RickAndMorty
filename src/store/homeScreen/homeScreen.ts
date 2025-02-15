import { createReducer } from '@reduxjs/toolkit';

import { setIsLoadingData } from '../actions';
import { HomeScreen } from '@root/type/state.ts';

const initialState: HomeScreen = {
  setLoadingData: false,
};

export const homeScreen = createReducer(initialState, (builder) => {
  builder.addCase(setIsLoadingData, (state, action) => {
    state.setLoadingData = action.payload;
  });
});
