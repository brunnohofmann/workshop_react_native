import 'react-native-gesture-handler';

import React, {useState, createContext} from 'react';
import {SafeAreaView, Button} from 'react-native';

import {ThemeProvider} from 'styled-components';
import {themes} from '@naturacosmeticos/natds-styles';

import Note from './components/Note';
import ViewContainer from './components/ViewContainer';

export const AppThemeProvider = createContext({activeTheme: 'light'});

const App = () => {
  const [activeTheme, setActiveTheme] = useState('light');

  const changeTheme = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <AppThemeProvider.Provider value={{activeTheme, changeTheme}}>
      <ThemeProvider theme={themes.avon[activeTheme]}>
        <ViewContainer>
          <Note title="tarefa 2" note="tenho muita coisa pra fazer hoje"></Note>
        </ViewContainer>
      </ThemeProvider>
    </AppThemeProvider.Provider>
  );
};

export default App;
