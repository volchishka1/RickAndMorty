import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from '@root/stack/MainStack.tsx';

export const Navigator = () => {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
