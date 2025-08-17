import { Notepad2 } from 'iconsax-react-nativejs';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NOTEDETAIL } from '../../utils/routes';
import { Colors } from '../../theme/colors';
import { screenWidth } from '../../utils/constants';

const NoteItem = ({ note }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(NOTEDETAIL, { note: note })}
    >
      <View style={styles.icon}>
        <Notepad2 size="30" color="#9B177E" variant="Bold" />
      </View>
      <View style={styles.row}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description} numberOfLines={8}>
          {note.description}
        </Text>
        <Text style={styles.date}>{note.date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.WHITE,
    alignItems: 'flex-start',
    paddingVertical: 15,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 8,
    width: screenWidth / 2,
    margin: 3,
  },
  icon: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 3,
    marginRight: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: Colors.FORTH,
  },
  description: {
    fontSize: 16,
    color: Colors.DARKGRAY,
    flexWrap: 'wrap',
  },

  date: {
    fontSize: 14,
    color: Colors.DARKGRAY,
    marginVertical: 8,
    fontWeight: '600',
    color: Colors.THIRT,
  },
});

export default NoteItem;
