import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const CustomView = styled(View)`
  background: #eee;
  border: solid 1px #aaa;
  margin: 16px;
  padding: 24px;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 18px;
`;

const Note = ({title, note}) => (
  <CustomView>
    <Title> {title} </Title>
    <Text> {note} </Text>
  </CustomView>
);

export default Note;
