import { TouchableOpacityProps } from 'react-native';
import { ResponseData } from '@screens/detailsScreen';

export type CharactersScreenViewProps = {
  navigateToDetailsScreen: TouchableOpacityProps['onPress'];
  results: Array<ResponseData>;
};
