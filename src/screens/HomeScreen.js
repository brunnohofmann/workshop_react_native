
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import FloatingButton from '../components/FloatingButton';
import Note from '../components/Note';
import {getNotes} from '../services/NoteService';

const HomeScreen = ({navigation, routes}) => {
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const goToCreateNewNote = () => {
    navigation.navigate('CreateNoteScreen');
  };

  const getListNotes = async () => {
    setLoading(true);
    const pagination = `?page=${page}&per_page=8`;
    const list = await getNotes(pagination);

    setNotes([...notes, ...list]);
    setPage(page + 1);
    setLoading(false);
  };

  useEffect(() => {
    getListNotes();
  }, []);

  return (
    <ViewContainer>
      <FlatList 
        data={notes}
        renderItem={({item}) => <Note title={item.title} note={item.note} />}
        keyExtractor={(d) => d._id}
        numColumns={2}
        onEndReached={getListNotes}
        onEndReachedThreshold={0.1}
        ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
      />

      <FloatingButton onPress={goToCreateNewNote} />
    </ViewContainer>
  );
};

export default HomeScreen;
