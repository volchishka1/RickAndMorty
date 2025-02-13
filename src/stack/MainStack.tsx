import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { MainScreen } from '@screens/mainScreen/mainScreen.tsx';

export const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator<MainStackScreenNavigatorParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={ROUTES.MAIN_SCREEN} component={MainScreen} />
    </Stack.Navigator>
  );
};
