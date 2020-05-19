import React, {useContext} from 'react';
import {TouchableOpacity, Button, View, Text} from 'react-native';
import {ThemeContext} from 'styled-components';
import {ThemeProviderContext} from '../ThemeProvider';
import styled from 'styled-components';

// const Button = styled(View)`
//   background-color: ${(props) => props.theme.button.background};
//   padding: 8px;
// `;

export default () => {
  const {setActiveTheme, activeTheme} = useContext(ThemeProviderContext);
  const theme = useContext(ThemeContext);

  const changeTheme = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      color={theme.button.background}
      title={'Trocar Tema'}
      onPress={changeTheme}
    />
  );

  // return (
  //   <TouchableOpacity onPress={changeTheme}>
  //     <Button>
  //       <Text>Trocar Tema</Text>
  //     </Button>
  //   </TouchableOpacity>
  // );
};
