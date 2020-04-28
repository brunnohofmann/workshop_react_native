import React, {useContext} from 'react';
import ViewContainer from './components/ViewContainer';
import Button from './components/Button';
import {ThemeProviderContext} from './ThemeProvider';

export default () => {
  const {setTheme, theme} = useContext(ThemeProviderContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ViewContainer>
      <Button text="Trocar tema" onPress={changeTheme} />
    </ViewContainer>
  );
};
