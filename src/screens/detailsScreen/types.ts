import { TouchableOpacityProps } from 'react-native';

export type DetailsScreenViewProps = {
  backToCharacterScreen: TouchableOpacityProps['onPress'];
  results: any;
  getCharacterId: number;
  getIsCharacter: boolean;
};
