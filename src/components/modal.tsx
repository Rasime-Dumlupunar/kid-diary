import { StyleSheet, Text, Modal, View } from 'react-native';
import React from 'react';
import { Colors } from '../theme/colors';
import { screenWidth } from '../utils/constants';
import { InfoCircle } from 'iconsax-react-nativejs';
import Button from './UI/button';

const Moodal: React.FC = props => {
  const {
    modalVisible,
    close,
    title,
    description,
    icon,
    closeButton = null,
    successButton = null,
  } = props;
  return (
    <Modal
      style={styles.container}
      transparent
      animationType="fade"
      visible={modalVisible}
    >
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.iconContainer}>{icon}</View>
          <View style={styles.bodyContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <View style={styles.buttonContainer}>
            {successButton}
            {closeButton}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Moodal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  body: {
    backgroundColor: Colors.WHITE,
    width: screenWidth * 0.9,
    height: screenWidth * 0.9,
    borderRadius: 10,
    shadowColor: Colors.GRAY,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    padding: 15,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
});
