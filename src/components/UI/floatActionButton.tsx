import { useNavigation } from '@react-navigation/native';
import { Add } from 'iconsax-react-nativejs';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ADDNOTE } from '../../utils/routes';
import { Colors } from '../../theme/colors';

const FloatActionButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ADDNOTE)}
      style={styles.container}
    >
      <Add size={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: Colors.FORTH,
    padding: 20,
    borderRadius: 40,
  },
});

export default FloatActionButton;
