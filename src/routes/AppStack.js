import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';
import {ThemeContext} from 'styled-components';

const Stack = createStackNavigator();

export default () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{...themeContext.stackHeader}}
        name="CreateNoteScreen"
        component={CreateNoteScreen}
      />
    </Stack.Navigator>
  );
};
