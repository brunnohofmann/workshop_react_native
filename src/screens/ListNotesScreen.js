import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList, Text} from 'react-native';
import styled from 'styled-components';

import ViewContainer from '../components/ViewContainer';
import Button from '../components/Button';
import {getNotes} from '../services/NoteService';

const NoteItem = styled(View)`
  padding: 10px 0px 10px 20px;
  border-bottom-color: #eee;
  border-bottom-width: 2px;
  border-left-color: #eee;
  border-left-width: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Title = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`;

const Item = ({value}) => {
  return (
    (value && (value.note || value.title) && (
      <NoteItem>
        <Title>{value.title}</Title>
        <Text>{value.note}</Text>
      </NoteItem>
    )) || <Text />
  );
};

export default ({navigation}) => {
  navigation.setOptions({title: 'My notes'});

  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
    setLoading(false);
  };

  const reload = async () => {
    console.log('atualizar');
    setLoading(true);
    await loadNotes();
  };

  useEffect(async () => {
    await loadNotes();
  }, []);

  return (
    <ViewContainer>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <ViewContainer>
          <FlatList
            data={notes}
            renderItem={({item}) => <Item value={item} />}
            keyExtractor={(item) => item._id}
          />
          <Button onPress={reload} text="Atualizar" />
        </ViewContainer>
      )}
    </ViewContainer>
  );
};
