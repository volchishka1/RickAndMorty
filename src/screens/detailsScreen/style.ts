import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type DetailsScreenViewStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
  textButtonStyle: TextStyle;
};

const insets = useSafeAreaInsets();

export const detailsScreenViewStyle = StyleSheet.create<DetailsScreenViewStyle>({
  rootContainer: {
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '5%',
  },
  textButtonStyle: {
    color: '#3b5496',
    fontSize: 18,
  },
});
