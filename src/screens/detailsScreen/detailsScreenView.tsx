import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { detailsScreenViewStyle } from '@screens/detailsScreen/style.ts';
import { DetailsScreenViewProps } from '@screens/detailsScreen/types.ts';
import { CharacterCardComponent } from '@root/component/characterCardComponent/characterCardComponent.tsx';
import { BackIconSvg } from '@assets/back.tsx';

export const DetailsScreenView: FC<DetailsScreenViewProps> = (props) => {
  const { backToCharacterScreen, results, getIsCharacter } = props;

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
          itemGender={results?.gender}
          itemLocationName={results?.location?.name}
          itemImage={results?.image}
          itemId={results?.id}
          itemName={results?.name}
          itemEpisode={results?.episode[0]}
          itemStatus={results?.status}
          itemSpecies={results?.species}
          itemOrigin={results?.origin.name}
          cardContainerStyle={{
            marginHorizontal: 25,
            height: '85%',
            alignItems: 'center',
            marginBottom: 50,
          }}
          cardStyle={{
            flexDirection: 'column',
            height: '100%',
            borderRadius: 20,
            justifyContent: 'space-around',
          }}
          imageContainerStyle={{ marginVertical: 25, marginBottom: 50 }}
          imageStyle={{ width: 280, height: 280, borderRadius: 20 }}
          textHeaderContainerStyle={{
            marginTop: 35,
          }}
        />
      </View>
    </View>
  );
};
