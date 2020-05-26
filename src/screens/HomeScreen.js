import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ViewContainer from '../components/ViewContainer';
import FloatingButton from '../components/FloatingButton';

export default ({navigation, routes}) => {
  const goToCreateNewNote = () => {
    navigation.navigate('CreateNoteScreen');
  };

  return (
    <ViewContainer>
      <Text>Voce esta na Home Screen</Text>
      <FloatingButton onPress={goToCreateNewNote} />
    </ViewContainer>
  );
};
