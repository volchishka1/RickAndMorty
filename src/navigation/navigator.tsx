import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MainScreenTabNavigator } from '@root/bottom-tabs/MainScreen.tsx';
import { useColorScheme } from 'react-native';

export const Navigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : DarkTheme}>
      <MainScreenTabNavigator />
    </NavigationContainer>
  );
};
