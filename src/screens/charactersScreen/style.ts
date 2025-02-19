import { StyleSheet, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type CharactersScreenViewStyle = {
  rootContainer: ViewStyle;
  topContainer: ViewStyle;
  centerContainer: ViewStyle;
};

const insets = useSafeAreaInsets();

export const charactersScreenViewStyle = StyleSheet.create<CharactersScreenViewStyle>({
  rootContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    flex: 1,
  },
  topContainer: {
    width: '90%',
    alignItems: 'center',
  },
  centerContainer: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: -35,
  },
});
