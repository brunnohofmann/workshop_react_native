import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="CreateNoteScreen" component={CreateNoteScreen} />
  </Stack.Navigator>
);
