import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { screenHeight } from '../../utils/constants';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import NoteItem from '../../components/notes/noteItem';
import ListEmptyComponents from '../../components/notes/listEmptyComponents';

import { fetchNotes } from '../../store/actions/noteActions';
import { Colors } from '../../theme/colors';

const NoteList: React.FC<Props> = ({ navigation, route }) => {
  const { notes, pending } = useSelector(state => state.notes);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes({ user_id: user.id }));
  }, []);
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        {pending ? (
          <ActivityIndicator size={'large'} color={Colors.GRAY} />
        ) : (
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{}}
            ListEmptyComponent={() => <ListEmptyComponents />}
            data={notes}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <NoteItem note={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  not: {
    fontSize: 22,
    marginTop: screenHeight * 0.3,
  },
});

export default NoteList;
