import React, {useContext} from 'react';
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
    <>
      <StatusBar />
      <ViewContainer>
        <Button text="Trocar tema" onPress={changeTheme} />
      </ViewContainer>
    </>
  );
};
