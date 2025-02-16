import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export type SettingScreenViewStyle = {
  rootContainer: ViewStyle;
  buttonStyle: ViewStyle;
  textButtonStyle: TextStyle;
};

export const settingScreenViewStyle = StyleSheet.create<SettingScreenViewStyle>({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-between',
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
