import React, { useEffect, useRef } from 'react';
import { View, ColorValue, Animated, Easing } from 'react-native';
import { customLoaderStyles } from '@root/component/customLoaderComponent/styles.ts';

interface Props {
  color?: ColorValue;
  durationMs?: number;
}

const startRotationAnimation = (durationMs: number, rotationDegree: Animated.Value): void => {
  Animated.loop(
    Animated.timing(rotationDegree, {
      toValue: 360,
      duration: durationMs,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();
};

export const LoadingSpinner = ({ color, durationMs = 1000 }: Props): JSX.Element => {
  const rotationDegree = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation(durationMs, rotationDegree);
  }, [durationMs, rotationDegree]);

  return (
    <View style={customLoaderStyles.container} accessibilityRole='progressbar'>
      <View style={[customLoaderStyles.background, { borderColor: color }]} />
      <Animated.View
        style={[
          customLoaderStyles.progress,
          { borderTopColor: color },
          {
            transform: [
              {
                rotateZ: rotationDegree.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};
