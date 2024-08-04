/**
 *
 * @author Muazzez Aydın
 * @author Batuhan Orhan
 *
 * @app WordBank digital personal dictionary
 *
 */

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootNavigation from './navigator/RootNavigator.tsx';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
          <RootNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
