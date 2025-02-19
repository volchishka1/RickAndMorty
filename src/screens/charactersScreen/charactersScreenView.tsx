import React, { FC } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { CharactersScreenViewProps } from '@screens/charactersScreen/types.ts';
import { charactersScreenViewStyle } from '@screens/charactersScreen/style.ts';
import { CharacterCardComponent } from '@root/component/characterCardComponent/characterCardComponent.tsx';
import { DropdownComponent } from '@root/component/dropDownComponent/dropdownComponent.tsx';
import { LoadingSpinner } from '@root/component/customLoaderComponent/customLoaderComponent.tsx';

export const CharactersScreenView: FC<CharactersScreenViewProps> = (props) => {
  const {
    navigateToDetailsScreen = () => {},
    characters,
    onEndReached,
    getIsLoading,
    getValueItem,
  } = props;

  const filteredItems = characters.filter(
    (item) => getValueItem === '' || item.status === getValueItem || item.species === getValueItem,
    getValueItem,
  );

  return (
    <View style={charactersScreenViewStyle.rootContainer}>
      {!getIsLoading && (
        <View style={charactersScreenViewStyle.topContainer}>
          <DropdownComponent />
        </View>
      )}
      {getIsLoading ? (
        <View style={{ marginTop: '50%' }}>
          <LoadingSpinner color={'red'} />
        </View>
      ) : (
        <FlatList
          initialNumToRender={5}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          decelerationRate={'normal'}
          showsVerticalScrollIndicator={false}
          style={charactersScreenViewStyle.centerContainer}
          data={filteredItems}
          scrollEventThrottle={3}
          renderItem={(item) => (
            <CharacterCardComponent
              {...item}
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
