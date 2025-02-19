import { ResponseData } from '@screens/detailsScreen';
import { TouchableOpacityProps } from 'react-native';

export type CharactersScreenViewProps = {
  navigateToDetailsScreen: TouchableOpacityProps['onPress'];
  onEndReached: any;
  characters: Array<ResponseData>;
  getIsLoading: boolean;
  getValueItem: string;
};
