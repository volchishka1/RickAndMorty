import { NavigationContainer } from '@react-navigation/native';
import { MainScreenTabNavigator } from '@root/bottom-tabs/MainScreen.tsx';

export const Navigator = () => {
  return (
    <NavigationContainer>
      <MainScreenTabNavigator />
    </NavigationContainer>
  );
};
