import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Colors } from '../../theme/colors';
import { screenHeight } from '../../utils/constants';

type Props = {
  title: string;
  onPress: () => void;
  pending: boolean | string | undefined;
};

const Button: React.FC<Props> = props => {
  const { title, pending } = props;
  return (
    <TouchableOpacity
      disabled={pending}
      activeOpacity={0.5}
      {...props}
      style={styles.container}
    >
      {pending ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SECOND,
    padding: 15,
    borderRadius: 8,
    minHeight: screenHeight / 15,
    marginTop: 5,
    marginVertical: 10,
  },
  title: {
    color: Colors.FORTH,
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Button;
