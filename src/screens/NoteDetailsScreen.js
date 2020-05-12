import React from 'react';
import ViewContainer from '../components/ViewContainer';
import Title from '../components/Typography/Title';
import Text from '../components/Typography/Text';

export default ({navigation, route}) => {
  const {note} = route.params;

  navigation.setOptions({
    title: note?.title,
  });

  return (
    <ViewContainer>
      <Title>{note.title}</Title>
      <Text>{note.note}</Text>
    </ViewContainer>
  );
};
