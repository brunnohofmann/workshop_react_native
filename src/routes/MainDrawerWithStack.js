import React, {useContext} from 'react';
import {View, Switch, Text} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import AppStack from './AppStack';
import {routes} from '../routes/routes';
import {ThemeProviderContext} from '../ThemeProviders';

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator drawerContent={(props) => <CustomDrawerComp {...props} />}>
    <Drawer.Screen name="AppStack" component={AppStack} />
  </Drawer.Navigator>
);

export const CustomDrawerComp = (props) => {
  const {
    navigation: {navigate},
  } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        <DrawerItem
          label="Início"
          hasBottomDivider
          onPress={() => navigate(routes.HOME_SCREEN)}
        />
        <DrawerItem
          label="Editar Perfil"
          hasBottomDivider
          onPress={() => navigate(routes.CREATE_NOTE_SCREEN)}
        />
      </View>
      <View>
        <InvertThemeOption />
      </View>
    </DrawerContentScrollView>
  );
};

const InvertThemeOption = () => {
  const {setTheme, theme} = useContext(ThemeProviderContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const label = theme === 'light' ? 'Modo Escuro' : 'Modo Claro';
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{padding: 20}}>{label}</Text>
      <Switch onChange={changeTheme} value={theme === 'light'} />
    </View>
  );
};
