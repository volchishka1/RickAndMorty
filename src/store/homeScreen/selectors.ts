import { NameSpace, RootState } from '../root-reducer';

export const getIsLoadingData = (state: RootState): boolean =>
  state[NameSpace.homeScreen].setLoadingData;
