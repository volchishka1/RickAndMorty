import { TouchableOpacityProps } from 'react-native';

export type DetailsScreenViewProps = {
  backToCharacterScreen: TouchableOpacityProps['onPress'];
  character: any;
  getCharacterId: number;
  getIsCharacter: boolean;
};
