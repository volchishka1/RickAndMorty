import React, { FC } from 'react';
import { CharactersScreenView } from '@screens/charactersScreen/charactersScreenView.tsx';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { ROUTES } from '@constants/routes.ts';
import { useDispatch } from 'react-redux';
import { setCharacterId, setIsCharacter } from '@root/store/slices.ts';
import { useFetchCharacters } from '@root/hooks';

export type CharactersScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackScreenNavigatorParamList, ROUTES.CHARACTERS_SCREEN>,
  any
>;

export const CharactersScreen: FC<CharactersScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const { characters, onEndReached } = useFetchCharacters();

  const navigateToDetailsScreen = (index: number) => {
    navigation.navigate(ROUTES.DETAILS_SCREEN);
    dispatch(setCharacterId(index - 1));
    dispatch(setIsCharacter(true));
  };

  return (
    <CharactersScreenView
      navigateToDetailsScreen={navigateToDetailsScreen}
      characters={characters}
      onEndReached={onEndReached}
    />
  );
};
