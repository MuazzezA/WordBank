import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {T} from '../components/T.tsx';
import {WButton} from '../components/WButton.tsx';
import {globalStyles} from '../styles/globalStyles.ts';

export const Home = () => {
  return (
    <SafeAreaView style={globalStyles.FLEX_CENTER}>
      <T text={'word bank'} size={18} />
      <WButton
        text={'button'}
        loading={false}
        isDisable={false}
        onPress={() => console.log('test')}
      />
    </SafeAreaView>
  );
};
