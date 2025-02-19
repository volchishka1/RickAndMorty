import React from 'react';

import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { ROUTES } from '@constants/routes';
import { DetailsScreen } from '@screens/detailsScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { CharactersScreen } from '@screens/charactersScreen';

export const DetailsStackNavigator = () => {
  const Stack = createStackNavigator<MainStackScreenNavigatorParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={ROUTES.CHARACTERS_SCREEN} component={CharactersScreen}></Stack.Screen>
      <Stack.Screen name={ROUTES.DETAILS_SCREEN} component={DetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
