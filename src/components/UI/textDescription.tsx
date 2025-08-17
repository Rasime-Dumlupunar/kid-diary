import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../theme/colors';

type Props = {
  description: string;
};

const TextDescription: React.FC<Props> = ({ description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.BLACK,
  },
});

export default TextDescription;
