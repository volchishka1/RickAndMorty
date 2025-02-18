import { combineReducers } from '@reduxjs/toolkit';
import toolkitSlice from './slices.ts';

export enum NameSpace {
  homeScreen = 'HOME_SCREEN',
}
export const rootReducer = combineReducers({
  toolkit: toolkitSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
