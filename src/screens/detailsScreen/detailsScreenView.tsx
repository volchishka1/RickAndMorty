import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { detailsScreenViewStyle } from '@screens/detailsScreen/style.ts';
import { DetailsScreenViewProps } from '@screens/detailsScreen/types.ts';

export const DetailsScreenView: FC<DetailsScreenViewProps> = (props) => {
  const { backToCharacterScreen } = props;

  return (
    <View style={detailsScreenViewStyle.rootContainer}>
      <TouchableOpacity style={detailsScreenViewStyle.buttonStyle} onPress={backToCharacterScreen}>
        <Text style={detailsScreenViewStyle.textButtonStyle}>{'Details'}</Text>
      </TouchableOpacity>
    </View>
  );
};
