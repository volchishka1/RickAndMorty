import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CharacterSvg } from '@assets/character.tsx';
import { SettingSvg } from '@assets/setting';
import { ROUTES } from '@constants/routes';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { SettingScreen } from '@screens/settingScreen';
import { DetailsStackNavigator } from '@root/stack/detailsStack.tsx';
import { useAppSelector } from '@root/hooks/hooks.ts';

export const MainScreenTabNavigator = () => {
  const Tab = createBottomTabNavigator<MainStackScreenNavigatorParamList>();

  const getIsCharacter = useAppSelector((state) => state.toolkit.character);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { display: getIsCharacter !== 0 ? 'none' : 'flex' },
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: '#3b5496',
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.DETAILS_STACK_SCREEN}
        component={DetailsStackNavigator}
        options={{
          tabBarLabel: `Characters`,
          tabBarIcon: () => {
            return <CharacterSvg />;
          },
        }}
      />
      <Tab.Screen
        name={ROUTES.SETTING_SCREEN}
        component={SettingScreen}
        options={{
          tabBarLabel: `Setting`,
          tabBarIcon: () => {
            return <SettingSvg />;
          },
        }}
      />
    </Tab.Navigator>
  );
};
