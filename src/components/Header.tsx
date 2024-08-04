import React from 'react';
import {StyleProp, ViewStyle, View, Dimensions, StatusBar} from 'react-native';
import {T} from './T.tsx';
import {ScaledSheet} from 'react-native-size-matters';

interface HeaderProps {
  text?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
}

export const Header = (props: HeaderProps) => {
  const {text, textColor, styles} = props;
  return (
    <View style={style.container}>
      <StatusBar backgroundColor={'red'} />
      <View style={style.tempIcon} />
      <T
        text={text ?? 'WORD-BANK'}
        size={24}
        weight={'700'}
        color={textColor ?? '#7B0F30'}
      />
    </View>
  );
};

const style = ScaledSheet.create({
  container: {
    gap: '12@s',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: '12@vs',
    left: 0,
    right: 0,
    top: 0,
  },
  tempIcon: {
    backgroundColor: '#7B0F30',
    height: '28@vs',
    width: '28@vs',
  },
});
