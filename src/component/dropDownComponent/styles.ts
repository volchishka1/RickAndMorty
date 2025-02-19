import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type DropdownStylesProps = {
  dropdown: ViewStyle;
  placeholderStyle: TextStyle;
  selectedTextStyle: TextStyle;
  iconStyle: ImageStyle;
  inputSearchStyle: TextStyle;
};

export const dropdownStyles = StyleSheet.create<DropdownStylesProps>({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '90%',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
