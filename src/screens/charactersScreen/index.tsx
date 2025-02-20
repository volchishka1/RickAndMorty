import React, { FC, useEffect } from 'react';
import { CharactersScreenView } from '@screens/charactersScreen/charactersScreenView';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { MainStackScreenNavigatorParamList } from '@navigation/types';
import { ROUTES } from '@constants/routes.ts';
import { useDispatch } from 'react-redux';
import { setCharacterItem, setIsCharacter } from '@root/store/slices';
import { useAppSelector, useFetchCharacters } from '@root/hooks';
import { NetInfoState, useNetInfo } from '@react-native-community/netinfo';
import { Alert } from 'react-native';

export type CharactersScreenProps = CompositeScreenProps<
  StackScreenProps<MainStackScreenNavigatorParamList, ROUTES.CHARACTERS_SCREEN>,
  any
>;

export const CharactersScreen: FC<CharactersScreenProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const internetState: NetInfoState = useNetInfo();

  const { characters, onEndReached } = useFetchCharacters();
  const getIsLoading = useAppSelector((state) => state.toolkit.isLoading);
  const getValueItem = useAppSelector((state) => state.toolkit.valueItem);

  // function for navigate to detailScreen

  const navigateToDetailsScreen = (index: number) => {
    navigation.navigate(ROUTES.DETAILS_SCREEN);
    dispatch(setCharacterItem(characters[index - 1]));
    dispatch(setIsCharacter(true));
  };

  //Function for check internet connection

  const checkInternetConnection = () => {
    if (internetState.isConnected === false) {
      Alert.alert(`no internet connection`, `sorry`, [{ text: `okay` }]);
    }
  };

  useEffect(() => {
    checkInternetConnection();
  }, [internetState]);

  return (
    <CharactersScreenView
      navigateToDetailsScreen={navigateToDetailsScreen}
      characters={characters}
      onEndReached={onEndReached}
      getIsLoading={getIsLoading}
      getValueItem={getValueItem}
    />
  );
};
