import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStack from './AppStack';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator>
    <Drawer.Screen name="AppStack" component={AppStack} />
  </Drawer.Navigator>
);
