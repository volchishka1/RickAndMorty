import React, { FC, useEffect, useState } from 'react';
import { CharactersScreenView } from '@screens/charactersScreen/charactersScreenView.tsx';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { ROUTES } from '@constants/routes.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacterId, setIsCharacter } from '@root/store/slices.ts';
import { loadAllCharacter } from '@root/store/api-actions.ts';

export type CharactersScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackScreenNavigatorParamList, ROUTES.CHARACTERS_SCREEN>,
  any
>;

export const CharactersScreen: FC<CharactersScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const [results, setResults] = useState([]);

  const data = useSelector((state) => state.toolkit.characters);

  const navigateToDetailsScreen = (index: number) => {
    navigation.navigate(ROUTES.DETAILS_SCREEN);
    dispatch(setCharacterId(index - 1));
    dispatch(setIsCharacter(true));
  };

  useEffect(() => {
    dispatch(loadAllCharacter());
  }, []);

  useEffect(() => {
    setResults(data);
  }, [data]);

  return (
    <CharactersScreenView navigateToDetailsScreen={navigateToDetailsScreen} results={results} />
  );
};
