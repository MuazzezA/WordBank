import React from 'react';
import {StyleProp, ViewStyle, View, TouchableOpacity} from 'react-native';
import {T} from './T.tsx';
import {ScaledSheet} from 'react-native-size-matters';
import ChevronLeft from '../assets/icons/chevron-left.svg';
interface HeaderProps {
  title?: string;
  titleSize?: number;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  activeBack?: boolean;
  appIcon?: boolean;
}

export const Header = (props: HeaderProps) => {
  const {title, textColor, appIcon, titleSize, styles, activeBack} = props;
  return (
    <View style={style.container}>
      {/*<StatusBar backgroundColor={'red'} />*/}
      {activeBack && (
        <TouchableOpacity activeOpacity={0.9}>
          <ChevronLeft height={28} width={28} />
        </TouchableOpacity>
      )}
      {appIcon && <View style={style.tempIcon} />}
      <T
        text={title ?? 'WORD-BANK'}
        size={titleSize ?? 24}
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
