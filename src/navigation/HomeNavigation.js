import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Splash from '../screens/Splash';
import Started from '../screens/Started';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Started"
        component={Started}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
