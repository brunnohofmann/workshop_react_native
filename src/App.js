import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
enableScreens();

import React, {useContext} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ViewContainer from './components/ViewContainer';
import Button from './components/Button';
import {ThemeProviderContext} from './ThemeProviders';
import StatusBar from './components/StatusBar';

export default () => {
  const {setTheme, theme} = useContext(ThemeProviderContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <SafeAreaProvider>
      <StatusBar />
      <ViewContainer>
        <Button text="Trocar tema" onPress={changeTheme} />
      </ViewContainer>
    </SafeAreaProvider>
  );
};
