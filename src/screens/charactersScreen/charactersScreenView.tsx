import React, { FC } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { CharactersScreenViewProps } from '@screens/charactersScreen/types.ts';
import { charactersScreenViewStyle } from '@screens/charactersScreen/style.ts';
import { CharacterCardComponent } from '@root/component/characterCardComponent/characterCardComponent.tsx';

export const CharactersScreenView: FC<CharactersScreenViewProps> = (props) => {
  const { navigateToDetailsScreen = () => {}, characters, onEndReached, getIsLoading } = props;

  return (
    <View style={charactersScreenViewStyle.rootContainer}>
      {getIsLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          decelerationRate={'normal'}
          showsVerticalScrollIndicator={false}
          style={charactersScreenViewStyle.centerContainer}
          data={characters.filter((item) => item.status === 'Alive')}
          scrollEventThrottle={3}
          renderItem={(item) => (
            <CharacterCardComponent
              onPress={() => navigateToDetailsScreen(item.item.id)}
              itemId={item.item.id}
              itemImage={item.item.image}
              itemGender={item.item.gender}
              itemOrigin={item.item.origin.name}
              itemEpisode={item.item.episode[0]}
              itemName={item.item.name}
              itemStatus={item.item.status}
              itemSpecies={item.item.species}
              itemLocationName={item.item.location.name}
            />
          )}
        />
      )}
    </View>
  );
};
