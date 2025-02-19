import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type DetailsScreenViewStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
  cardContainerStyle: ViewStyle;
  cardStyle: ViewStyle;
  imageContainerStyle: ViewStyle;
  imageStyle: ImageStyle;
  textHeaderContainerStyle: TextStyle;
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
  cardContainerStyle: {
    marginHorizontal: 25,
    height: 550,
    alignItems: 'center',
    marginBottom: 50,
    borderWidth: 10,
  },
  cardStyle: {
    flexDirection: 'column',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  imageContainerStyle: {
    marginVertical: 25,
    marginBottom: 50,
  },
  imageStyle: {
    width: 280,
    height: 280,
    borderRadius: 20,
  },
  textHeaderContainerStyle: {
    marginTop: 35,
  },
  textButtonStyle: {
    color: '#3b5496',
    fontSize: 18,
  },
});
