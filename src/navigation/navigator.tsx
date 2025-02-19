import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { MainScreenTabNavigator } from '@root/bottom-tabs/MainScreen';
import { useColorScheme } from 'react-native';

export const Navigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MainScreenTabNavigator />
    </NavigationContainer>
  );
};
