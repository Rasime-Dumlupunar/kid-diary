//import liraries
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';

type Props = {
  title: string;
  onPress: () => void;
};

const TextButton: React.FC<Props> = props => {
  const { title } = props;
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <Text style={styles.title}>{title} </Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 10,
  },
  title: {
    color: Colors.THIRT,
    fontSize: 16,
    fontWeight: '600',
  },
});

//make this component available to the app
export default TextButton;
