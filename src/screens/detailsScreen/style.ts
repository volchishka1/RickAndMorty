import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DetailsScreenViewStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
  textButtonStyle: TextStyle;
};

export const detailsScreenViewStyle = StyleSheet.create<DetailsScreenViewStyle>({
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
