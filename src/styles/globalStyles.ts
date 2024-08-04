import {TextStyle, ViewStyle} from 'react-native';
import {s, vs} from 'react-native-size-matters';

export const globalStyles = {
  FLEX_CENTER: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  FLEX_PADDING: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(12),
    paddingHorizontal: s(12),
  } as ViewStyle,
  TEXT: {
    fontSize: 14,
    weight: '400',
    color: 'black', // TODO : tema gelince düzelt burayı
  } as TextStyle,
  BUTTON: {
    height: vs(34),
    backgroundColor: '#263238',
    borderRadius: 20,
    paddingHorizontal: s(12),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,
};
