import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { screenHeight, screenWidth } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import {
  Convertshape,
  Cup,
  Edit2,
  Logout,
  LogoutCurve,
  Notification,
  SecuritySafe,
} from 'iconsax-react-nativejs';
import MenuItem from '../../components/profile/menuItem';
import { PREMIUM, PROFILE, PROFILEEDIT } from '../../utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import Moodal from '../../components/modal';
import { closeModal } from '../../store/slice/authSlice';
import Button from '../../components/UI/button';

const Profile = ({ navigation, route }) => {
  const { user } = useSelector(state => state.auth);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const profileMenu = [
    {
      id: 1,
      icon: <Cup size={25} color={Colors.THIRT} variant="Bold" />,
      title: 'Premium Yükselt',
      onPress: () => navigation.navigate(PREMIUM),
    },
    {
      id: 2,
      icon: <Edit2 size={25} color={Colors.THIRT} variant="Bold" />,
      title: 'Profili Düzenle',
      onPress: () => navigation.navigate(PROFILEEDIT),
    },
    {
      id: 3,
      icon: <Convertshape size={25} color={Colors.THIRT} variant="Bold" />,
      title: 'Tema Değiştir',
    },
    {
      id: 4,
      icon: <Notification size={25} color={Colors.THIRT} variant="Bold" />,
      title: 'Alarm Kur',
    },

    {
      id: 5,
      icon: <SecuritySafe size={25} variant="Bold" color={Colors.THIRT} />,
      title: 'Gizlilik',
    },
    {
      id: 6,
      icon: <Logout size={25} variant="Bold" color={Colors.THIRT} />,
      title: 'Çıkış',
      onPress: () => setVisible(true),
    },
  ];
  console.log('User:', user);
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        <Moodal
          icon={<LogoutCurve size={50} color={Colors.SECOND} variant="Bold" />}
          title="Çıkış Yap!"
          description={'Çıkış yapmak istediğinize emin misiniz?'}
          close={() => setVisible(false)}
          modalVisible={visible}
          successButton={
            <Button
              title="Çıkış Yap"
              onPress={() => {
                dispatch(logOut());
              }}
            />
          }
        />
        <ScrollView>
          <View style={styles.infoContainer}>
            <Image
              source={require('../../assets/profil.png')}
              style={styles.image}
            />
            <Text style={styles.name}>{user.user_name}</Text>
            <Text style={styles.kidsname}>{user.cocuk_ismi}</Text>
          </View>
          <View>
            {profileMenu.map((item, index) => (
              <MenuItem
                onPress={item.click || item.onPress}
                item={item}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: screenWidth / 3 + 10,
    height: screenWidth / 3 + 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 100,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: screenHeight / 3,
  },
  name: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 15,
  },
  kidsname: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Profile;
