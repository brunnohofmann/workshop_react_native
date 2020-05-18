import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import Title from '../components/Typography/Title';
import Text from '../components/Typography/Text';

const NoteItem = styled(View)`
  padding: 10px 0px 10px 20px;
  border-bottom-color: #eee;
  border-bottom-width: 2px;
  border-left-color: #eee;
  border-left-width: 1px;
  background-color: #fff;
  border-radius: 10px;
  margin: 8px;
  flex-basis: 0;
  flex-grow: 1;
`;

const Item = ({ value }) => {
  return (
    (value && (value.note || value.title) && (
      <NoteItem>
        <Title>{value.title}</Title>
        <Text>{value.note}</Text>
      </NoteItem>
    )) || <Text />
  );
};

export default Item;