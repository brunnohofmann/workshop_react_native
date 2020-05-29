import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {createContext} from 'react';

import themes from './configs/themes';
import App from './App';
import codePush from "react-native-code-push";


const DEFAULT_THEME = 'light';

export const ThemeProviderContext = createContext({
  setTheme: () => {},
  theme: DEFAULT_THEME,
});

const Providers = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  return (
    <ThemeProviderContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themes[theme]}>
        <App />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default codePush(Providers);
