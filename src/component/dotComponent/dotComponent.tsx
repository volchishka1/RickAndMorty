import React, { FC } from 'react';
import { View, ViewProps } from 'react-native';

export type DotProps = {
  status?: ViewProps['children'];
};

export const DotComponent: FC<DotProps> = (props) => {
  const { status } = props;

  return (
    <View
      style={{
        backgroundColor: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'grey',
        width: 10,
        height: 10,
        borderRadius: 10,
        marginRight: 5,
      }}
    ></View>
  );
};
