import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SettingScreenViewProps } from '@screens/settingScreen/types';
import { settingScreenViewStyle } from '@screens/settingScreen/style';

export const SettingScreenView: FC<SettingScreenViewProps> = (props) => {
  const { switchTheme = () => {} } = props;

  return (
    <View style={settingScreenViewStyle.rootContainer}>
      <TouchableOpacity style={settingScreenViewStyle.buttonStyle} onPress={switchTheme}>
        <Text style={settingScreenViewStyle.textButtonStyle}>{'Change color scheme'}</Text>
      </TouchableOpacity>
    </View>
  );
};
