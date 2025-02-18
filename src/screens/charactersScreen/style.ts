import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type CharactersScreenViewStyle = {
  rootContainer: ViewStyle;
  centerContainer: ViewStyle;
};

const insets = useSafeAreaInsets();

export const charactersScreenViewStyle = StyleSheet.create<CharactersScreenViewStyle>({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    flex: 1,
  },
  centerContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: -35,
  },
});
