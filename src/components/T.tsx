import React from 'react';
import {Text, TextStyle} from 'react-native';
import {ScaledSheet, s} from 'react-native-size-matters';
import {globalStyles} from '../styles/globalStyles.ts';
import {getFontFamily} from '../helpers/getFontFamily.ts';

interface TextProps {
  text: string;
  style?: TextStyle;
  size?: number;
  weight?: '400' | '500' | '600' | '700';
  color?: string;
}

export const T = (props: TextProps) => {
  const {text, style, size, weight, color, ...res} = props;

  const resStyle = {
    fontSize: s(size ?? (globalStyles.TEXT.fontSize as number)),
    fontWeight: weight ?? globalStyles.TEXT.fontWeight,
    fontFamily: getFontFamily(weight),
    color,
    ...style,
  };

  return (
    <Text
      suppressHighlighting={false}
      style={{
        ...globalStyles.TEXT,
        ...resStyle,
      }}
      allowFontScaling={false}
      {...res}>
      {text ?? ''}
    </Text>
  );
};
