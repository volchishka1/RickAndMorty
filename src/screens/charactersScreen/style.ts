import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type CharactersScreenViewStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
  textButtonStyle: TextStyle;
};

export const charactersScreenViewStyle = StyleSheet.create<CharactersScreenViewStyle>({
  rootContainer: {
    justifyContent: 'center',
  },
  buttonStyle: {
    marginTop: '25%',
    marginLeft: '5%',
  },
  textButtonStyle: {
    color: '#3b5496',
    fontSize: 18,
  },
});
