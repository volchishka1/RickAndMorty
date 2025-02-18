import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type CharacterCardComponentStyleProps = {
  cardContainer: ViewStyle;
  cardStyle: ViewStyle;
  imageContainer: ViewStyle;
  imageStyle: ImageStyle;
  textHeaderContainer: ViewStyle;
  textHeaderNameStyle: TextStyle;
  textHeaderStatusContainerStyle: ViewStyle;
  textHeaderStatusStyle: TextStyle;
  textDescriptionStyle: TextStyle;
  textStyle: TextStyle;
};

export const characterCardComponentStyle = StyleSheet.create<CharacterCardComponentStyleProps>({
  cardContainer: {
    marginHorizontal: 10,
    borderRadius: 20,
    borderColor: 'pink',
    borderWidth: 1,
    marginBottom: 30,
  },
  cardStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    borderRadius: 10,
    height: 200,
  },
  imageStyle: {
    width: 150,
    height: 200,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  textHeaderContainer: {
    height: 200,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'space-around',
    marginLeft: 10,
  },
  textHeaderNameStyle: {
    color: '#3468f8',
    fontSize: 26,
  },
  textHeaderStatusContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textHeaderStatusStyle: {
    color: '#3468f8',
    fontSize: 14,
  },
  textDescriptionStyle: {
    color: '#153dab',
    fontSize: 16,
  },
  textStyle: {
    color: '#3468f8',
    fontSize: 14,
  },
});
