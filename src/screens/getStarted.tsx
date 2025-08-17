import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import { defaultScreenStyle } from '../styles/defaultScreenStyle';
import Button from '../components/UI/button';
import TextButton from '../components/UI/textButton';
import TextTitle from '../components/UI/textTitle';
import TextDescription from '../components/UI/textDescription';
import { screenHeight, screenWidth } from '../utils/constants';
import { LOGIN, REGISTER } from '../utils/routes';

const GetStarted: React.FC = ({ navigation, route }) => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        <View style={styles.row}>
          <Image source={require('../assets/start.png')} style={styles.image} />
        </View>
        <View style={styles.middle}>
          <View style={styles.end}>
            <TextTitle title="Çocuğunuzun Dijital Anı Defteri" />
            <TextDescription description="Her gülümsemeyi, her adımı ve her özel anı güvenle saklayın. Zamansız anılar için dijital bir günlük." />
          </View>
          <View style={styles.button}>
            <Button
              title="B A Ş L A "
              onPress={() => navigation.navigate(REGISTER)}
            />
            <TextButton
              title="Giriş yapmak ister misin?"
              onPress={() => navigation.navigate(LOGIN)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default GetStarted;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 1,
  },
  end: {
    flex: 2,
    textAlign: 'center',
  },
  button: {
    flex: 1,
  },
  image: {
    width: screenWidth - 100,
    height: screenHeight / 2,
    resizeMode: 'contain',
  },
});
