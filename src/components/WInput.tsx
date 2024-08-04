import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import React, {useMemo} from 'react';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {getFontFamily} from '../helpers/getFontFamily';
import {T} from './T';
import {useInput} from '../hooks/useInput';

interface WInputProps extends Omit<TextInputProps, 'onChange'> {
  inputTextSize?: number;
  inputTextWeight?: '400' | '500' | '600' | '700';
  inputStyle?: StyleProp<TextStyle>;

  placeholderTextSize?: number;
  placeholderTextWeight?: '400' | '500' | '600' | '700';
  placeholderTextColor?: string;
  placeholderStyle?: StyleProp<TextStyle>;

  onChange?: (t: string) => void;
}

export const WInput = ({
  inputTextSize = 16,
  inputTextWeight = '400',
  inputStyle = {},
  value = '',
  onChange,

  placeholder = '',
  placeholderTextSize = 12,
  placeholderTextWeight = '400',
  placeholderTextColor,
  placeholderStyle = {},

  ...rest
}: WInputProps) => {
  const input = useInput(value, onChange);

  const restStyles = useMemo(
    () => ({
      fontFamily: getFontFamily(inputTextWeight),
      fontSize: vs(inputTextSize),
    }),
    [inputTextWeight, inputTextSize],
  );

  return (
    <View style={styles.container}>
      <T
        text={placeholder}
        size={placeholderTextSize}
        weight={placeholderTextWeight}
        color={placeholderTextColor}
        style={placeholderStyle}
      />
      <TextInput
        style={StyleSheet.flatten([
          inputStyle,
          styles.inputContainer,
          restStyles,
        ])}
        underlineColorAndroid="transparent"
        {...input}
        {...rest}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    gap: '8@vs',
  },
  inputContainer: {
    backgroundColor: '#F4F3F3',
    borderCurve: 'continuous',
    borderRadius: '12@vs',
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth * 2,
    height: '36@vs',
    paddingHorizontal: '12@s',
  },
});
