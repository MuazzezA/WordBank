import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screens/Home.tsx';

const Stack = createNativeStackNavigator();
export default function RootNavigation() {
  return (
    <Stack.Navigator initialRouteName={'home'}>
      <Stack.Screen
        name={'home'}
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
