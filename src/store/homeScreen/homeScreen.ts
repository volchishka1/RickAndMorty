import { createReducer } from '@reduxjs/toolkit';

import { HomeScreen } from '../../types/state';

const initialState: HomeScreen = {};

export const homeScreen = createReducer(initialState, () => {

});
