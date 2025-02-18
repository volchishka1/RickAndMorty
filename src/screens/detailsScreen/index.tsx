import React, { FC, useEffect, useState } from 'react';
import { DetailsScreenView } from '@screens/detailsScreen/detailsScreenView.tsx';
import { ROUTES } from '@constants/routes.ts';
import { CompositeScreenProps } from '@react-navigation/native';
import { MainStackScreenNavigatorParamList } from '@navigation/types.ts';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppSelector } from '@root/hooks/hooks.ts';
import { loadAllCharacter } from '@root/store/api-actions.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setCharacterId, setIsCharacter } from '@root/store/slices.ts';

export type DetailsScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackScreenNavigatorParamList, ROUTES.DETAILS_SCREEN>,
  any
>;

export interface ResponseData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string, string];
  url: string;
  created: string;
}

export const DetailsScreen: FC<DetailsScreenProps> = ({ navigation }) => {
  const [results, setResults] = useState<ResponseData>();
  const dispatch = useDispatch();

  const data: ResponseData[] = useSelector((state) => state.toolkit.characters);
  const getCharacterId = useAppSelector((state) => state.toolkit.character);
  const getIsCharacter = useAppSelector((state) => state.toolkit.isCharacter);

  const backToCharacterScreen = () => {
    navigation.navigate(ROUTES.CHARACTERS_SCREEN);
    dispatch(setCharacterId(0));
    dispatch(setIsCharacter(false));
  };

  useEffect(() => {
    dispatch(loadAllCharacter());
  }, []);

  useEffect(() => {
    setResults(data[getCharacterId]);
  }, [data]);

  return (
    <DetailsScreenView
      backToCharacterScreen={backToCharacterScreen}
      results={results}
      getCharacterId={getCharacterId}
      getIsCharacter={getIsCharacter}
    />
  );
};
