import React from 'react';
import {ActivityIndicator, TextStyle, TouchableOpacity} from 'react-native';
import {s, ScaledSheet} from 'react-native-size-matters';
import {globalStyles} from '../styles/globalStyles.ts';
import {T} from './T.tsx';
import {activityOpacity} from '../constants/General.ts';

interface WButtonProps {
  text: string;
  style?: TextStyle;
  isDisable?: boolean;
  displayLoading?: boolean;
  onPress?: (data?: unknown) => void;
}

export const WButton = (props: WButtonProps) => {
  const {text, style, isDisable, displayLoading, onPress} = props;

  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      activeOpacity={activityOpacity}
      disabled={isDisable}
      style={{
        ...globalStyles.BUTTON,
        ...((isDisable || displayLoading) && {
          backgroundColor: '#676f73',
        }),
        ...style,
      }}>
      {displayLoading && (
        <ActivityIndicator
          color={'white'}
          // @ts-ignore
          style={styles.indicator}
        />
      )}
      <T text={text} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  indicator: {
    position: 'absolute',
    right: '4%',
    padding: 8,
  },
});
