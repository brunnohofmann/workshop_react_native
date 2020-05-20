import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';

const BoxText = styled(View)`
  padding: 16px;
  border: solid 1px #ccc;
  margin: 16px;
  flex-basis: 0;
  flex-grow: 1;
  background-color: ${(props) => props.theme.primaryColor};
`;
const SimpleText = styled(Text)`
  color: ${(props) => props.theme.text.color};
`;
const Title = styled(Text)`
  color: ${(props) => props.theme.text.color};
  font-weight: bold;
`;

const Note = ({item}) => (
  <BoxText>
    <Title> {item.title} </Title>
    <SimpleText> {item.note}</SimpleText>
  </BoxText>
);

export default Note;
