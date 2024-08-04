import React from 'react';
import {T} from '../components/T.tsx';
import {WInput} from '../components/WInput.tsx';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../components/Header.tsx';
import {View} from 'react-native';
import {ListHeader} from '../components/ListHeader.tsx';
import {WordHeader} from '../components/WordHeader.tsx';

export const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <Header activeBack={true} appIcon={true} />
      <T text={'word bank'} size={18} />
      <WInput placeholder="Test" weight="400" />
      <ListHeader
        listName={'Software C Level'}
        listDescription={"Words I don't know in Software Doc"}
        wordCount={12}
        listDescriptionColor={'black'}
      />
      <WordHeader
        word={'Success'}
        phonetic={'/səkˈsɛs/'}
        wordMean={
          'a · degree or measure of succeeding ; b · satisfactory completion of something ; \n' +
          'c · the gaining of wealth, respect, or fame.'
        }
        badgeColor={'green'}
      />
    </View>
  );
};
