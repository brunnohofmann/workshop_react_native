import React, {useContext} from 'react';
import Button from '../components/Button';
import ViewContainer from '../components/ViewContainer';
import {ThemeProviderContext} from '../ThemeProviders';
import FloatingButton from '../components/FloatingButton';

export default () => {
  const {setTheme, theme} = useContext(ThemeProviderContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ViewContainer>
      <Button text="Trocar tema" onPress={changeTheme} />
      <FloatingButton onPress={changeTheme} />
    </ViewContainer>
  );
};
