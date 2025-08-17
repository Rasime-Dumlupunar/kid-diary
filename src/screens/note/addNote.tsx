import React, { useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
} from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { screenHeight } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import Button from '../../components/UI/button';
import { ADDNOTE, NOTELIST } from '../../utils/routes';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { insertNoteDb } from '../../utils/db';
import { fetchNotes } from '../../store/actions/noteActions';
import * as Yup from 'yup';
import Input from '../../components/UI/textInput';

const AddNote: React.FC<Props> = ({ navigation, route }) => {
  const NoteSchema = Yup.object().shape({
    title: Yup.string().required('Zorunludur'),
    description: Yup.string().required('Zorunludur'),
  });
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(fetchNotes({ user_id: user.id }));
    };
  });
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        <ScrollView>
          <Formik
            validationSchema={NoteSchema}
            initialValues={{
              user_id: user.id,
              title: '',
              description: '',
            }}
            onSubmit={values => insertNoteDb(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <View>
                <TextInput
                  error={errors.title}
                  value={values.title}
                  onChangeText={handleChange('title')}
                  onBlur={handleBlur('title')}
                  style={[styles.input, styles.inputTitle]}
                  placeholder="Anı Başlığı"
                  placeholderTextColor={Colors.GRAY}
                />
                {errors.title && (
                  <Text style={styles.error}>{errors.title}</Text>
                )}
                <TextInput
                  multiline
                  error={errors.description}
                  value={values.description}
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  style={[styles.input, styles.inputDescription]}
                  placeholder="Anı açıklaması"
                  placeholderTextColor={Colors.GRAY}
                />
                {errors.description && (
                  <Text style={styles.error}>{errors.description}</Text>
                )}
                <Button title="ANI EKLE" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: screenHeight * 0.06,
    padding: 10,
    marginVertical: screenHeight * 0.01,
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    shadowColor: Colors.GRAY,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  inputTitle: {
    fontWeight: '700',
    fontSize: 24,
  },
  inputDescription: {
    fontSize: 16,
    height: screenHeight * 0.6,
    marginBottom: screenHeight * 0.01,
    textAlignVertical: 'top',
  },
  error: {
    color: Colors.SECOND,
    fontWeight: '700',
    marginHorizontal: 2,
    marginBottom: 3,
    marginTop: -5,
  },
});

export default AddNote;
