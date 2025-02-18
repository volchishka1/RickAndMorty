import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';
import { CharactersScreenViewProps } from '@screens/charactersScreen/types.ts';
import { charactersScreenViewStyle } from '@screens/charactersScreen/style.ts';
import { ResponseData } from '@screens/detailsScreen';
import { CharacterCardComponent } from '@root/component/characterCardComponent/characterCardComponent.tsx';

export const CharactersScreenView: FC<CharactersScreenViewProps> = (props) => {
  const { navigateToDetailsScreen = () => {}, results } = props;

  return (
    <View style={charactersScreenViewStyle.rootContainer}>
      <ScrollView style={charactersScreenViewStyle.centerContainer}>
        {results.map((item: ResponseData) => (
          <CharacterCardComponent
            onPress={() => navigateToDetailsScreen(item.id)}
            itemId={item.id}
            itemImage={item.image}
            itemGender={item.gender}
            itemOrigin={item.origin.name}
            itemEpisode={item.episode[0]}
            itemName={item.name}
            itemStatus={item.status}
            itemSpecies={item.species}
            itemLocationName={item.location.name}
          />
        ))}
      </ScrollView>
    </View>
  );
};
