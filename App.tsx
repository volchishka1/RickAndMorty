import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigator } from '@navigation/navigator.tsx';
import { Provider } from 'react-redux';
import { store } from '@root/store/store.ts';

export const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
};
