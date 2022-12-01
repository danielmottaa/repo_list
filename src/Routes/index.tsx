import React from 'react';
import { Alert, Image, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Internal from '../screens/Internal';


const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={'Internal'}
        component={Internal}
        options={{
          headerTitle: 'repo'
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;