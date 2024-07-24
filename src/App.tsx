/**
 *
 * @author Muazzez Aydın
 * @author Batuhan Orhan
 *
 * @app WordBank digital personal dictionary
 *
 */

import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigation from './navigator/RootNavigator.tsx';

const App = () => {
  return (
    <SafeAreaProvider>
      <RootNavigation />
    </SafeAreaProvider>
  );
};

export default App;
