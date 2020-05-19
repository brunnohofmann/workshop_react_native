import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, ActivityIndicator} from 'react-native';

import styled from 'styled-components';
import ThemeProvider, {ThemeProviderContext} from './ThemeProvider';
import ChangeThemeButton from './components/ChangeThemeButton';
import ViewContainer from './components/ViewContainer';
import Note from './components/Note';
import {getNotes} from './services/NoteService';

const CustomActivityIndicator = styled(ActivityIndicator)`
  margin-bottom: 36px;
`;

const App = () => {
  const [activeTheme, setActiveTheme] = useState('light');
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

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
    <ThemeProviderContext.Provider value={{activeTheme, setActiveTheme}}>
      <ThemeProvider>
        <ViewContainer>
          <SafeAreaView>
            <ChangeThemeButton />
            <FlatList
              data={notes}
              renderItem={({item}) => <Note item={item} />}
              keyExtractor={(item) => item._id}
              numColumns={2}
              onEndReached={getListNotes}
              onEndReachedThreshold={0.1}
              ListFooterComponent={loading && <CustomActivityIndicator color="#00f" size="large" />}
            />
          </SafeAreaView>
        </ViewContainer>
      </ThemeProvider>
    </ThemeProviderContext.Provider>
  );
};

export default App;
