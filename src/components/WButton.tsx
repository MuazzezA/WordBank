import React from 'react';
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {globalStyles} from '../styles/globalStyles.ts';
import {T} from './T.tsx';
import {activityOpacity} from '../constants/General.ts';

interface WButtonProps {
  text: string;
  style?: TextStyle;
  isDisable?: boolean;
  loading?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const WButton = (props: WButtonProps) => {
  const {text, style, isDisable, loading, onPress} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activityOpacity}
      disabled={isDisable}
      style={StyleSheet.flatten([
        globalStyles.BUTTON,
        (isDisable || loading) && {
          backgroundColor: '#676f73',
        },
        style,
      ])}>
      {loading && (
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
