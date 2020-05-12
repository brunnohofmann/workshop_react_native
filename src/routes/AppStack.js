import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import ListNotesScreen from '../screens/ListNotesScreen';
import {ThemeContext} from 'styled-components';
import NoteDetailsScreen from '../screens/NoteDetailsScreen';
import {routes} from './routes';

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Stack.Navigator initialRouteName="ListNotesScreen">
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name={routes.HOME_SCREEN}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name={routes.CREATE_NOTE_SCREEN}
        component={CreateNoteScreen}
      />
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name={routes.LIST_NOTES_SCREEN}
        component={ListNotesScreen}
      />
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name={routes.NOTE_DETAILS_SCREEN}
        component={NoteDetailsScreen}
      />
    </Stack.Navigator>
  );
};
