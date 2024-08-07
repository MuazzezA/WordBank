import {useState, useRef} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';

export const useInput = (
  initialValue: string,
  callback?: (t: string) => void,
) => {
  const [value, setValue] = useState(initialValue);
  const ref = useRef();

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    setValue(event.nativeEvent.text);
    callback && callback(event.nativeEvent.text);
  };

  return {
    value,
    onChange: handleChange,
    setValue,
    forwardedRef: ref,
  };
};
