import React from 'react';
import {View, Text} from 'react-native';

import styled from 'styled-components';

const Container = styled(View)`
  margin: 16px;
`;
const Button = styled(View)`
  background-color: #0077C0;
  padding: 8px;
`;
const TextButton = styled(Text)`
  color: #FFFFFF;
  text-align: center;
  text-transform: uppercase;
`;
const BoxText = styled(Text)`
  background-color: #EEEEEE;
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

const App = () => (
  <Container>
    <Button>
      <TextButton> Button test </TextButton>
    </Button>
    <BoxText>
      <Title> Teste title </Title>
      <SimpleText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </SimpleText>
    </BoxText>
  </Container>
);

export default App;
