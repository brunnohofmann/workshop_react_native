import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import ViewContainer from './components/ViewContainer';
import {Formik} from 'formik';
import * as yup from 'yup';

const NoteSchema = yup.object().shape({
  note: yup.string().required(),
  title: yup
    .string()
    .min(5)
    .max(10, 'Só podemos incluir 10 caracteres')
    .required(),
});

const AddNoteScreen = () => {
  return (
    <ViewContainer>
      <ScrollView>
        <Formik
          validationSchema={NoteSchema}
          initialValues={{title: '', note: ''}}
          onSubmit={(values) => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              <TextInput
                placeholder="Titulo"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              {errors.title && (
                <Text style={{color: 'red'}}>{errors.title}</Text>
              )}

              <TextInput
                placeholder="Nota"
                numberOfLines={5}
                multiline
                onChangeText={handleChange('note')}
                onBlur={handleBlur('note')}
                value={values.note}
              />
              {errors.note && <Text style={{color: 'red'}}>{errors.note}</Text>}
              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </ViewContainer>
  );
};

export default AddNoteScreen;
