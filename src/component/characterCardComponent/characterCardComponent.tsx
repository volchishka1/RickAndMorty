import {
  Image,
  ImageProps,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from 'react-native';
import { DotComponent } from '@root/component/dotComponent/dotComponent';
import React, { FC } from 'react';
import { characterCardComponentStyle } from '@root/component/characterCardComponent/style';

export interface CharacterCardComponentProps {
  itemId: TouchableOpacityProps['nextFocusForward'];
  onPress?: TouchableOpacityProps['onPress'];
  getIsCharacter?: TouchableOpacityProps['children'];
  itemImage: ImageProps['src'];
  itemName: TextProps['children'];
  itemGender: TextProps['children'];
  itemOrigin: TextProps['children'];
  itemStatus: ViewProps['children'];
  itemSpecies: TextProps['children'];
  itemLocationName: TextProps['children'];
  itemEpisode: TextProps['children'];
  cardContainerStyle?: ViewProps['style'];
  cardStyle?: ViewProps['style'];
  imageContainerStyle?: ViewProps['style'];
  textHeaderContainerStyle?: ViewProps['style'];
  imageStyle?: ImageProps['style'];
}

export const CharacterCardComponent: FC<CharacterCardComponentProps> = React.memo((props) => {
  const {
    itemId,
    itemImage,
    itemName,
    itemGender,
    itemOrigin,
    itemStatus,
    itemSpecies,
    itemLocationName,
    itemEpisode,
    onPress,
    cardStyle,
    imageContainerStyle,
    imageStyle,
    cardContainerStyle,
    textHeaderContainerStyle,
    getIsCharacter,
  } = props;
  return (
    <TouchableOpacity
      key={itemId}
      style={[characterCardComponentStyle.cardContainer, cardContainerStyle]}
      onPress={onPress}
    >
      <View style={[characterCardComponentStyle.cardStyle, cardStyle]}>
        <View style={[characterCardComponentStyle.imageContainer, imageContainerStyle]}>
          <Image
            style={[characterCardComponentStyle.imageStyle, imageStyle]}
            source={{ uri: itemImage }}
          />
        </View>
        <View style={[characterCardComponentStyle.textHeaderContainer, textHeaderContainerStyle]}>
          <Text style={characterCardComponentStyle.textHeaderNameStyle}>{itemName}</Text>
          <View style={characterCardComponentStyle.textHeaderStatusContainerStyle}>
            <DotComponent status={itemStatus} />
            <Text style={characterCardComponentStyle.textHeaderStatusStyle}>
              {itemStatus} - {itemSpecies}({itemGender})
            </Text>
          </View>
          {getIsCharacter && (
            <View>
              <Text style={characterCardComponentStyle.textDescriptionStyle}>{'Origin: '}</Text>
              <Text style={characterCardComponentStyle.textStyle}>{itemOrigin}</Text>
            </View>
          )}
          <View>
            <Text style={characterCardComponentStyle.textDescriptionStyle}>
              {'Last know location'}
            </Text>
            <Text style={characterCardComponentStyle.textStyle}>{itemLocationName}</Text>
          </View>
          <View>
            <Text style={characterCardComponentStyle.textDescriptionStyle}>{'First seen'}</Text>
            <Text style={characterCardComponentStyle.textStyle}>{itemEpisode}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
});
