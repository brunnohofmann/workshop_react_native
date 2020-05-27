import React, {useContext} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styled from 'styled-components';

import {AppThemeProvider} from '../App';

const CustomView = styled(View)`
  background: ${({theme}) => theme.palette.background.default};
  border: solid 1px #aaa;
  margin: 16px;
  padding: 24px;
  flex-basis: 0;
  flex-grow: 1;
`;

const Title = styled(Text)`
  color: ${({theme}) => theme.palette.text.primary};
  font-weight: bold;
  font-size: 18px;
`;

const Note = ({title, note}) => {
  const {changeTheme} = useContext(AppThemeProvider);

  return (
    <CustomView>
      <Title> {title} </Title>
      <Text> {note} </Text>
    </CustomView>
  );
};

export default Note;
