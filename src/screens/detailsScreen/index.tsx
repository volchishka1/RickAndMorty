import React, { FC, useEffect, useState } from 'react';
import { DetailsScreenView } from '@screens/detailsScreen/detailsScreenView';
import { ROUTES } from '@constants/routes.ts';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { StackScreenProps } from '@react-navigation/stack';
import { useAppSelector } from '@root/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setCharacterId, setIsCharacter } from '@root/store/slices';
import { useFetchCharacters } from '@root/hooks';

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

export const DetailsScreen: FC<DetailsScreenProps> = () => {
  const [character, setCharacter] = useState<ResponseData>();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { characters } = useFetchCharacters();

  const getCharacterId = useAppSelector((state) => state.toolkit.character);
  const getIsCharacter = useAppSelector((state) => state.toolkit.isCharacter);
  const getCharacter = useAppSelector((state) => state.toolkit.characterItem);

  const backToCharacterScreen = () => {
    navigation.goBack();
    dispatch(setCharacterId(0));
    dispatch(setIsCharacter(false));
  };

  useEffect(() => {
    setCharacter(getCharacter);
  }, [characters]);

  return (
    <DetailsScreenView
      backToCharacterScreen={backToCharacterScreen}
      character={character}
      getCharacterId={getCharacterId}
      getIsCharacter={getIsCharacter}
    />
  );
};
