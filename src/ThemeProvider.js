import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {createContext} from 'react';

import themes from './configs/themes';
import App from './App';

export const ThemeProviderContext = createContext({
  setTheme: () => {},
  theme: 'light',
});

const Providers = () => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProviderContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themes[theme]}>
        <App />
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default Providers;
