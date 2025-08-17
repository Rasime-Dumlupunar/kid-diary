import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import TextTitle from '../../components/UI/textTitle';
import TextDescription from '../../components/UI/textDescription';
import Button from '../../components/UI/button';
import TextButton from '../../components/UI/textButton';
import Input from '../../components/UI/textInput';
import { LOGIN, REGISTER } from '../../utils/routes';
import { screenHeight } from '../../utils/constants';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../store/actions/authActions';
import Moodal from '../../components/modal';
import { InfoCircle } from 'iconsax-react-nativejs';
import { Colors } from '../../theme/colors';
import { closeModal } from '../../store/slice/authSlice';

const Login: React.FC = ({ navigation, route }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Geçersiz email').required('Zorunlu'),
    password: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalı')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])/,
        'Şifre en az bir harf, bir rakam ve bir özel karakter içermelidir',
      )
      .required('Şifre zorunludur'),
  });
  const { pendingLogin, error, info, visible } = useSelector(
    state => state.auth,
  );
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={defaultScreenStyle.safeContainer}>
      <View style={defaultScreenStyle.container}>
        <Moodal
          icon={
            <InfoCircle
              size={50}
              color={info?.success ? Colors.THIRT : Colors.SECOND}
              variant="Bold"
            />
          }
          title="Bilgilendirme"
          description={info?.message}
          close={() => dispatch(closeModal(false))}
          modalVisible={visible}
          successButton={
            <Button
              title="Tekrar Dene"
              onPress={() => {
                dispatch(closeModal());
              }}
            />
          }
        />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.row}>
            <TextTitle title="Çocuğunun anı defterini doldurmaya başla!" />
            <TextDescription description="Her anı tarihleriyle kayıt altına al, en değerli varlığının hiçbir anısını unutma!" />
          </View>
          <Formik
            initialValues={{ email: 'rasime@gmail.com', password: '123!Rasa' }}
            validationSchema={LoginSchema}
            onSubmit={values => dispatch(fetchUser(values))}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <View style={styles.name}>
                  <Input
                    error={errors.email}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    label="E-mail"
                    placeholder="E-mail Giriniz"
                  />
                  <Input
                    error={errors.password}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    label="Şifre"
                    placeholder="Şifre Giriniz"
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    pending={pendingLogin}
                    title="Giriş Yap"
                    onPress={handleSubmit}
                  />
                  <TextButton
                    title="Henüz bir hesabınız yok mu?"
                    onPress={() => navigation.navigate(REGISTER)}
                  />
                </View>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    marginTop: screenHeight * 0.03,
  },
  name: {
    flex: 3,
    marginTop: screenHeight * 0.05,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Login;
