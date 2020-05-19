import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styled from 'styled-components';
import ThemeProvider, {ThemeProviderContext} from './ThemeProvider';
import ChangeThemeButton from './components/ChangeThemeButton';
import ViewContainer from './components/ViewContainer';

const BoxText = styled(Text)`
  padding: 16px;
  margin-top: 24px;
`;
const SimpleText = styled(Text)`
  color: #919191;
`;
const Title = styled(Text)`
  color: #111111;
  flex: 1;
  margin: 10px;
`;

const App = () => {
  const [activeTheme, setActiveTheme] = useState('dark');

  return (
    <ThemeProviderContext.Provider value={{activeTheme, setActiveTheme}}>
      <ThemeProvider>
        <ViewContainer>
          <SafeAreaView>
            <ChangeThemeButton />
            {/*<Button>*/}
            {/*  <TextButton> Button test </TextButton>*/}
            {/*</Button>*/}
            <BoxText>
              <Title> Teste title </Title>
              <SimpleText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </SimpleText>
            </BoxText>
          </SafeAreaView>
        </ViewContainer>
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default App;
