import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import styled from 'styled-components';

import { getNotes } from '../services/NoteService';
import { routes } from '../routes/routes';
import FloatingButton from '../components/FloatingButton';
import OpenDrawerIcon from '../components/OpenDrawerIcon';
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

const ViewContainerList = styled(View)`
  display: flex;
  flex: 1;
  margin: 0px;
  padding: 0 16px;
  background-color: ${(props) => props.theme.backgroundList};
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

export default ({ navigation }) => {
  navigation.setOptions({
    title: 'My notes',
    headerLeft: () => <OpenDrawerIcon />,
  });

  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const notes = await getNotes();
    setNotes(notes);
    setLoading(false);
  };

  const goToCreateNoteScreen = () => {
    navigation.navigate(routes.CREATE_NOTE_SCREEN);
  };

  useEffect(async () => {
    await loadNotes();
  }, []);

  return (
    <ViewContainerList>
      {loading ? (
        <ActivityIndicator color="#ccc" size="large" />
      ) : (
          <FlatList
            data={notes}
            numColumns={2}
            renderItem={({ item }) => <Item value={item} />}
            keyExtractor={(item) => item._id}
          />
        )}
      <FloatingButton onPress={goToCreateNoteScreen} />
    </ViewContainerList>
  );
};
