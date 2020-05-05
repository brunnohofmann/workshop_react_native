import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import React from 'react';
import {
  initialWindowSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import StatusBar from './components/StatusBar';
import MainDrawer from './routes/MainDrawer';
import MainDrawerWithStack from './routes/MainDrawerWithStack';

enableScreens();

export default () => {
  return (
    <SafeAreaProvider initialSafeAreaInsets={initialWindowSafeAreaInsets}>
      <StatusBar />
      <NavigationContainer>
        {/*<MainDrawer />*/}
        <MainDrawerWithStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
