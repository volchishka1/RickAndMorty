import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '@root/type/action.ts';

export const setIsLoadingData = createAction(
  ActionType.SetIsLoadingData,
  (setIsLoadingData: boolean) => ({
    payload: setIsLoadingData,
  }),
);
