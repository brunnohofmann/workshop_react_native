import React, {useState} from 'react';
import {View, ActivityIndicator, AsyncStorage} from 'react-native';
import {Formik} from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';

import ViewContainer from '../components/ViewContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import {createNote} from '../services/NoteService';
import Text from '../components/Typography/Text';

import {getDeviceToken} from '../utils/push-notification';

const FormItem = styled(View)`
  padding: 10px 0px 10px 0px;
`;

const NoteSchema = Yup.object().shape({
  title: Yup.string().min(2, 'Too Short!').required('Required'),
  note: Yup.string(),
});

const initialState = {title: '', note: ''};

export default ({navigation}) => {
  navigation.setOptions({title: 'Create Note'});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    if (values && values.note) {
      setLoading(true);
      const tokenDevice = await getDeviceToken();
      const response = await createNote(values, tokenDevice);
      setLoading(false);
      console.log(response);
    }
  };

  return (
    <ViewContainer>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Formik
          validationSchema={NoteSchema}
          initialValues={initialState}
          onSubmit={onSubmit}>
          {({handleChange, handleSubmit, values, setFieldTouched, errors}) => (
            <>
              <FormItem>
                <Input
                  placeholder="Title"
                  onChangeText={handleChange('title')}
                  onBlur={() => setFieldTouched('title')}
                  value={values.title}
                />
                {errors.title ? (
                  <Text style={{color: 'red'}}>{errors.title}</Text>
                ) : null}
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
