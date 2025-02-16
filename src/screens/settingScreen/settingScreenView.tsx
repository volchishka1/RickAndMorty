import React from 'react';
import { Appearance, Button, Text, useColorScheme, View } from 'react-native';
import setColorScheme = Appearance.setColorScheme;
import { saveItem } from '@constants/asyncStorage.tsx';

export const SettingScreenView = () => {
  const scheme = useColorScheme();

  // function for switch and add colorScheme of the app to asyncStorage
  const switchTheme = () => {
    scheme === 'dark' ? setColorScheme('light') : setColorScheme('dark');
    scheme === 'dark' ? saveItem('colorScheme', 'light') : saveItem('colorScheme', 'dark');
  };

  return (
    <View
      style={{ top: '50%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}
    >
      <Text>{'SettingScreen'}</Text>
      <Button title={'changeScheme'} onPress={switchTheme}></Button>
    </View>
  );
};
