import 'react-native-gesture-handler';
import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@root/store/store.ts';
import { Navigator } from '@navigation/Navigator.tsx';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App = () => {
  console.log("WTF")

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigator />
      </SafeAreaProvider>
    </Provider>
  );
}
