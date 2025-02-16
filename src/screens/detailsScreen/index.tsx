import React, { FC } from 'react';
import { DetailsScreenView } from '@screens/detailsScreen/detailsScreenView.tsx';
import { ROUTES } from '@constants/routes.ts';
import { CompositeScreenProps } from '@react-navigation/native';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { StackScreenProps } from '@react-navigation/stack';

export type DetailsScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackScreenNavigatorParamList, ROUTES.DETAILS_SCREEN>,
  any
>;

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation }) => {
  const backToCharacterScreen = () => {
    navigation.navigate(ROUTES.CHARACTERS_SCREEN);
  };

  return <DetailsScreenView backToCharacterScreen={backToCharacterScreen} />;
};
