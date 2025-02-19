import { ResponseData } from '@screens/detailsScreen';

export type CharactersScreenViewProps = {
  navigateToDetailsScreen: (arg: number) => void;
  onEndReached: ((info: { distanceFromEnd: number }) => void) | undefined;
  characters: Array<ResponseData>;
  getIsLoading: boolean;
  getValueItem: string;
};
