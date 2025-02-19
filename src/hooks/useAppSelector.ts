import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { store } from '@root/store/store.ts';
import { RootState } from '@root/store/root-reducer.ts';
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
