import 'react-native-gesture-handler';

import React, {createContext, useState} from 'react';
import {StatusBar} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {themes} from '@naturacosmeticos/natds-styles';

import Note from './components/Note';
import ViewContainer from './components/ViewContainer';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './routes/MainStack';
import MainDrawer from './routes/MainDrawer';

export const AppThemeProvider = createContext({activeTheme: 'light'});

const App = () => {
  const [activeTheme, setActiveTheme] = useState('light');

  const changeTheme = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppThemeProvider.Provider value={{activeTheme, changeTheme}}>
      <ThemeProvider theme={themes.avon[activeTheme]}>
        <StatusBar />
        <NavigationContainer>
          {/*<MainStack />*/}
          <MainDrawer />
        </NavigationContainer>
      </ThemeProvider>
    </AppThemeProvider.Provider>
  );
};

export default App;
