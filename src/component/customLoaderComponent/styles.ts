import { StyleSheet, ViewStyle } from 'react-native';

export type CustomLoaderStyles = {
  container: ViewStyle;
  background: ViewStyle;
  progress: ViewStyle;
};

export const customLoaderStyles = StyleSheet.create<CustomLoaderStyles>({
  container: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: 24 / 2,
    borderWidth: 4,
    opacity: 0.25,
  },
  progress: {
    width: '100%',
    height: '100%',
    borderRadius: 24 / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 4,
    position: 'absolute',
  },
});
