import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { detailsScreenViewStyle } from '@screens/detailsScreen/style';
import { DetailsScreenViewProps } from '@screens/detailsScreen/types';
import { CharacterCardComponent } from '@root/component/characterCardComponent/characterCardComponent';
import { BackIconSvg } from '@assets/back.tsx';

export const DetailsScreenView: FC<DetailsScreenViewProps> = (props) => {
  const { backToCharacterScreen, character, getIsCharacter } = props;

  return (
    <View style={detailsScreenViewStyle.rootContainer}>
      <View>
        <TouchableOpacity
          style={detailsScreenViewStyle.buttonStyle}
          onPress={backToCharacterScreen}
        >
          <BackIconSvg />
          <Text style={detailsScreenViewStyle.textButtonStyle}>{'Back'}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <CharacterCardComponent
          getIsCharacter={getIsCharacter}
          itemGender={character?.gender}
          itemLocationName={character?.location?.name}
          itemImage={character?.image}
          itemId={character?.id}
          itemName={character?.name}
          itemEpisode={character?.episode[0]}
          itemStatus={character?.status}
          itemSpecies={character?.species}
          itemOrigin={character?.origin.name}
          cardContainerStyle={detailsScreenViewStyle.cardContainerStyle}
          cardStyle={detailsScreenViewStyle.cardStyle}
          imageContainerStyle={detailsScreenViewStyle.imageContainerStyle}
          imageStyle={detailsScreenViewStyle.imageStyle}
          textHeaderContainerStyle={detailsScreenViewStyle.textHeaderContainerStyle}
        />
      </View>
    </View>
  );
};
