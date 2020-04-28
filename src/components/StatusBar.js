import React, {useContext} from 'react';
import {Platform, StatusBar} from 'react-native';
import {ThemeContext} from 'styled-components';

export default () => {
  const themeContext = useContext(ThemeContext);

  if (
    Platform.OS === 'ios' ||
    (Platform.OS === 'android' && Platform.Version >= 23)
  ) {
    return (
      <StatusBar
        barStyle={themeContext.statusBar.barStyle}
        backgroundColor={themeContext.statusBar.backgroundColor}
        translucent
        fade
      />
    );
  }

  return null;
};
