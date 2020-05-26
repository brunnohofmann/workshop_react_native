import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CreateNoteScreen from '../screens/CreateNoteScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default () => (
  <Drawer.Navigator drawerContent={CustomDrawerComp}>
    <Drawer.Screen name="AppScreens" component={AppScreensStack} />
  </Drawer.Navigator>
);

const AppScreensStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CreateNoteScreen" component={CreateNoteScreen} />
    </Stack.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const {
    navigation: {navigate},
    routes,
  } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        <DrawerItem
          label="Home"
          hasBottomDivider
          onPress={() => navigate('HomeScreen')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
