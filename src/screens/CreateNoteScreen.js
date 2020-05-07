import React, {useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import styled from 'styled-components';

import ViewContainer from '../components/ViewContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import {createNote} from '../services/NoteService';

const FormItem = styled(View)`
  padding: 10px 0px 10px 0px;
`;

export default ({navigation}) => {
  navigation.setOptions({title: 'Create Note'});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    if (values && values.note) {
      setLoading(true);
      const response = await createNote(values);
      setLoading(false);
      console.log(response);
    }
  };

  return (
    <ViewContainer>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Formik initialValues={{title: '', note: ''}} onSubmit={onSubmit}>
          {({handleChange, handleSubmit, values, setFieldTouched}) => (
            <>
              <FormItem>
                <Input
                  placeholder="Title"
                  onChangeText={handleChange('title')}
                  onBlur={() => setFieldTouched('title')}
                  value={values.title}
                />
              </FormItem>
              <FormItem>
                <Input
                  multiline
                  placeholder="Note"
                  onChangeText={handleChange('note')}
                  onBlur={() => setFieldTouched('note')}
                  value={values.note}
                />
              </FormItem>
              <FormItem>
                <Button onPress={handleSubmit} text="Salvar" />
              </FormItem>
            </>
          )}
        </Formik>
      )}
    </ViewContainer>
  );
};
