import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Button from '../../components/UI/button';
import TextButton from '../../components/UI/textButton';
import TextTitle from '../../components/UI/textTitle';
import TextDescription from '../../components/UI/textDescription';
import { screenHeight, screenWidth } from '../../utils/constants';
import { LOGIN, REGISTER } from '../../utils/routes';
import { TickCircle, Ticket } from 'iconsax-react-nativejs';
import { Colors } from '../../theme/colors';

const Premium: React.FC = ({ navigation, route }) => {
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        <View style={styles.row}>
          <Image
            source={require('../../assets/start.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.middle}>
          <View style={styles.end}>
            <TextTitle title="Dijital Anı Defterini En İyi haliyle kullanmak istersen Premium'a geçebilirsin!" />
            <View style={styles.tick}>
              <TickCircle />
              <TextDescription description=" Sava unlimited" />
            </View>
            <View style={styles.tick}>
              <TickCircle />
              <TextDescription description=" Sava unlimited" />
            </View>
            <View style={styles.tick}>
              <TickCircle />
              <TextDescription description=" Sava unlimited" />
            </View>
          </View>
          <View style={styles.prices}>
            <View style={styles.rowprice}>
              <Text style={styles.subtitle}>Annual</Text>
              <Text style={styles.price}>$79.99</Text>
              <Text style={styles.text}>her yıl</Text>
            </View>
            <View style={styles.rowprice}>
              <Text style={styles.subtitle}>Monthly</Text>
              <Text style={styles.price}>$7.99</Text>
              <Text style={styles.text}>her ay</Text>
            </View>
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

export default Premium;

const styles = StyleSheet.create({
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middle: {
    flex: 2,
  },
  end: {
    flex: 2,
    textAlign: 'center',
  },
  button: {
    flex: 1,
  },
  image: {
    width: screenWidth / 2,
    height: screenHeight / 2,
    resizeMode: 'contain',
  },
  tick: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  prices: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowprice: {
    backgroundColor: Colors.WHITE,
    width: screenWidth / 3,
    height: screenHeight / 7,
    margin: screenWidth / 16,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  price: {
    fontSize: 30,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 20,
  },
  text: {
    fontSize: 16,
  },
});
