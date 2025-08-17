import { StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: Colors.FIRST,
    fontFamily: 'Comfortaa',
  },
  container: {
    paddingHorizontal: 15,
    flex: 1,
  },
});

export { defaultScreenStyle };
