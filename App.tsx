import 'react-native-gesture-handler';

import React, { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from '@navigation/navigator.tsx';
import { Provider } from 'react-redux';
import { store } from '@root/store/store.ts';
import { getItem } from '@constants/asyncStorage.tsx';
import { Appearance, useColorScheme } from 'react-native';
import setColorScheme = Appearance.setColorScheme;

export const App = () => {
  // Callback for taking colorTheme from AsyncStorage
  const scheme = useColorScheme();
  const getAppTheme = useCallback(async () => {
    const schemesDark = await getItem('colorSchemeDark');
    const schemesLight = await getItem('colorSchemeLight');
    scheme === 'light' ? setColorScheme(schemesLight) : setColorScheme(schemesDark);
  }, []);

  useEffect(() => {
    getAppTheme();
  }, [getAppTheme]);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};
