import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { CharactersScreenViewProps } from '@screens/charactersScreen/types.ts';
import { charactersScreenViewStyle } from '@screens/charactersScreen/style.ts';

export const CharactersScreenView: FC<CharactersScreenViewProps> = (props) => {
  const { navigateToDetailsScreen } = props;

  return (
    <View style={charactersScreenViewStyle.rootContainer}>
      <TouchableOpacity
        style={charactersScreenViewStyle.buttonStyle}
        onPress={navigateToDetailsScreen}
      >
        <Text style={charactersScreenViewStyle.textButtonStyle}>{'Characters'}</Text>
      </TouchableOpacity>
    </View>
  );
};
