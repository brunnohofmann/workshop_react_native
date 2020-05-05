import React, {useContext} from 'react';
import Button from '../components/Button';
import ViewContainer from '../components/ViewContainer';
import {ThemeProviderContext} from '../ThemeProviders';
import FloatingButton from '../components/FloatingButton';

import {routes} from '../routes/routes';

export default ({navigation}) => {
  navigation.setOptions({
    title: 'Home',
  });

  const {setTheme, theme} = useContext(ThemeProviderContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const goToCreateNoteScreen = () => {
    navigation.navigate(routes.CREATE_NOTE_SCREEN);
  };

  return (
    <ViewContainer>
      <FloatingButton onPress={goToCreateNoteScreen} />
    </ViewContainer>
  );
};
