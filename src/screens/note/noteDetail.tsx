import React, { useEffect } from 'react';
import {
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
import { NOTELIST } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDiary, fetchNotes } from '../../store/actions/noteActions';
import { Trash } from 'iconsax-react-nativejs';
import Moodal from '../../components/modal';
import { closeModal } from '../../store/slice/noteSlice';

const NoteDetail: React.FC = ({ navigation, route }) => {
  const { note } = route.params;
  const { info, visible } = useSelector(state => state.notes);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(fetchNotes({ user_id: user?.id }));
    };
  }, [navigation, note.title]);
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        <Moodal
          icon={
            <Trash
              size={50}
              color={info?.success ? Colors.THIRT : Colors.SECOND}
              variant="Bold"
            />
          }
          title="Bilgilendirme"
          description={info?.message}
          close={() => dispatch(closeModal(false))}
          modalVisible={visible}
          successButton={
            <Button
              title="Tamam"
              onPress={() => {
                dispatch(closeModal());
                navigation.goBack();
              }}
            />
          }
        />
        <ScrollView>
          <TextInput
            value={note.title}
            style={[styles.input, styles.inputTitle]}
            placeholder="Anı Başlığı"
            placeholderTextColor={Colors.GRAY}
          />
          <TextInput
            multiline
            style={[styles.input, styles.inputDescription]}
            placeholder="Anı açıklaması"
            placeholderTextColor={Colors.GRAY}
            value={note.description}
          />
          <Button
            title="ANI GÜNCELLE"
            onPress={() => navigation.navigate(NOTELIST)}
          />
          <Button
            title="ANI SİL"
            onPress={() => dispatch(deleteDiary(note.id))}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    minHeight: screenHeight * 0.04,
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
    height: screenHeight * 0.55,
    marginBottom: screenHeight * 0.02,
  },
});

export default NoteDetail;
