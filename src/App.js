import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import StatusBar from './components/StatusBar';
import {pushNotificationService} from './utils/push-notification';

import {enableScreens} from 'react-native-screens';
import {
  initialWindowSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import MainDrawer from './routes/MainDrawer';
import MainDrawerWithStack from './routes/MainDrawerWithStack';

enableScreens();

export default () => {
 useEffect(() => {
    pushNotificationService();
  });
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
