import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator, FlatList} from 'react-native';
import styled from 'styled-components';

import ViewContainer from '../components/ViewContainer';
import {getNotes} from '../services/NoteService';
import {routes} from '../routes/routes';
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
  margin-bottom: 20px;
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
    <ViewContainer>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={notes}
          renderItem={({item}) => <Item value={item} />}
          keyExtractor={(item) => item._id}
        />
      )}
      <FloatingButton onPress={goToCreateNoteScreen} />
    </ViewContainer>
  );
};
