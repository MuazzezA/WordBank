import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {T} from '../components/T.tsx';

export const Home = () => {
  return (
    <SafeAreaView>
      <T text={'word bank'} size={18} />
    </SafeAreaView>
  );
};
