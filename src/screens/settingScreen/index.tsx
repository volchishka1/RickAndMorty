import React from 'react';
import { SettingScreenView } from '@screens/settingScreen/settingScreenView.tsx';
import { Appearance, useColorScheme } from 'react-native';
import { saveItem } from '@constants/asyncStorage.tsx';
import setColorScheme = Appearance.setColorScheme;

export const SettingScreen = () => {
  const scheme = useColorScheme();

  // function for switch and add colorScheme of the app to asyncStorage
  const switchTheme = () => {
    scheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
    scheme === 'dark' ? saveItem('colorScheme', 'light') : saveItem('colorScheme', 'dark');
  };

  return <SettingScreenView switchTheme={switchTheme} />;
};
