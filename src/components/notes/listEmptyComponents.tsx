//import liraries
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { screenHeight, screenWidth } from '../../utils/constants';
import TextTitle from '../UI/textTitle';
import TextDescription from '../UI/textDescription';
import Button from '../UI/button';
import { ADDNOTE, NOTELIST } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const ListEmptyComponents: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={require('../../assets/start.png')}
          style={styles.image}
        />
        <TextTitle title="Create Your First Note" />
        <TextDescription description="Add a note about anything (your thoughts on climate change, or your history essay)" />
      </View>

      <View style={styles.button}>
        <Button
          title="Create A Note"
          onPress={() => navigation.navigate(ADDNOTE)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight * 0.8,
  },
  row: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: screenWidth - 80,
    height: screenHeight / 2,
    resizeMode: 'contain',
  },
  button: {
    flex: 1,
  },
});

export default ListEmptyComponents;
