import { configureStore } from '@reduxjs/toolkit';

import { api } from '@root/services/api.ts';
import { rootReducer } from '@root/store/root-reducer.ts';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
