import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Colors } from '../../theme/colors';

type Props = {
  label: string;
  placeholder: string;
};

const Input: React.FC<Props> = props => {
  const { label, error, editable = true } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={Colors.GRAY}
        {...props}
        style={[
          styles.input,
          { backgroundColor: editable ? Colors.WHITE : Colors.GRAY },
        ]}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 10,
    fontSize: 15,
  },
  label: {
    fontSize: 12,
    paddingVertical: 10,
  },
  error: {
    color: Colors.SECOND,
    marginTop: 5,
  },
});

export default Input;
