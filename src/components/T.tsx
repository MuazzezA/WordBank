import React from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {ScaledSheet, s, vs} from 'react-native-size-matters';
import {globalStyles} from '../styles/globalStyles.ts';
import {getFontFamily} from '../helpers/getFontFamily.ts';

interface TextProps {
  text: string;
  style?: StyleProp<TextStyle>;
  size?: number;
  weight?: '400' | '500' | '600' | '700';
  color?: string;
}

export const T = (props: TextProps) => {
  const {text, style, size, weight, color, ...res} = props;

  const resStyle = {
    fontSize: vs(size ?? (globalStyles.TEXT.fontSize as number)),
    fontWeight: weight ?? globalStyles.TEXT.fontWeight,
    fontFamily: getFontFamily(weight),
    color,
  };

  return (
    <Text
      suppressHighlighting={false}
      style={StyleSheet.flatten([globalStyles.TEXT, style, resStyle])}
      allowFontScaling={false}
      {...res}>
      {text ?? ''}
    </Text>
  );
};
