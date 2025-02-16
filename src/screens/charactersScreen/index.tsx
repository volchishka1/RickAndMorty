import React, { FC } from 'react';
import { CharactersScreenView } from '@screens/charactersScreen/charactersScreenView.tsx';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { ROUTES } from '@constants/routes.ts';

export type CharactersScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackScreenNavigatorParamList, ROUTES.CHARACTERS_SCREEN>,
  any
>;

export const CharactersScreen: FC<CharactersScreenProps> = ({ navigation }) => {
  const navigateToDetailsScreen = () => {
    navigation.navigate(ROUTES.DETAILS_SCREEN);
  };

  return <CharactersScreenView navigateToDetailsScreen={navigateToDetailsScreen} />;
};
