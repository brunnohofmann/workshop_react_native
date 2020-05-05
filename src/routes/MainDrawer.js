import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    <Drawer.Screen name="CreateNoteScreen" component={CreateNoteScreen} />
  </Drawer.Navigator>
);
