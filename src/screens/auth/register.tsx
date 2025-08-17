import React from 'react';
import { StyleSheet, SafeAreaView, View, ScrollView } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import TextTitle from '../../components/UI/textTitle';
import TextDescription from '../../components/UI/textDescription';
import Button from '../../components/UI/button';
import TextButton from '../../components/UI/textButton';
import Input from '../../components/UI/textInput';
import { LOGIN } from '../../utils/routes';
import { screenHeight } from '../../utils/constants';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Moodal from '../../components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../store/actions/authActions';
import { closeModal } from '../../store/slice/authSlice';
import { InfoCircle } from 'iconsax-react-nativejs';
import { Colors } from '../../theme/colors';

const Register: React.FC = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Çok kısa!')
      .max(50, 'Çok uzun!')
      .required('Zorunlu'),
    email: Yup.string().email('Geçersiz email').required('Zorunlu'),
    cocuk_ismi: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    password: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalı')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])/,
        'Şifre en az bir harf, bir rakam ve bir özel karakter içermelidir',
      )
      .required('Şifre zorunludur'),
  });
  const { info, visible } = useSelector(state => state.auth);

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
              title="Giriş Yap"
              onPress={() => {
                dispatch(closeModal());
                navigation.navigate(LOGIN);
              }}
            />
          }
        />
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.row}>
            <TextTitle title="Ücretsiz bir hesap oluştur!" />
            <TextDescription description="Kid Diary dünyasına ücretsiz katılın. Çocuğunuzun anılarıyla sınırsız notlar oluşturun." />
          </View>
          <Formik
            initialValues={{
              username: 'Rasime Dumlupunar',
              email: 'rasime@gmail.com',
              password: '123!Rasa',
              cocuk_ismi: 'Ceyda',
            }}
            validationSchema={SignupSchema}
            onSubmit={values => dispatch(createUser(values))}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
                <View style={styles.name}>
                  <Input
                    error={errors.username}
                    value={values.username}
                    onBlur={handleBlur('username')}
                    onChangeText={handleChange('username')}
                    label="İsim"
                    placeholder="İsim Giriniz"
                  />
                  <Input
                    error={errors.email}
                    value={values.email}
                    onBlur={handleBlur('email')}
                    onChangeText={handleChange('email')}
                    label="E-mail"
                    placeholder="E-mail Giriniz"
                  />
                  <Input
                    error={errors.cocuk_ismi}
                    value={values.cocuk_ismi}
                    onBlur={handleBlur('cocuk_ismi')}
                    onChangeText={handleChange('cocuk_ismi')}
                    label="Çocuk İsmi"
                    placeholder="Çocuğunuzun İsmini Giriniz"
                  />
                  <Input
                    error={errors.password}
                    value={values.password}
                    onBlur={handleBlur('password')}
                    onChangeText={handleChange('password')}
                    label="Şifre"
                    placeholder="Şifre Giriniz"
                  />
                </View>

                <View style={styles.button}>
                  <Button title="Hesap Oluştur" onPress={handleSubmit} />
                  <TextButton
                    title="Zaten bir hesabınız var mı?"
                    onPress={() => navigation.navigate(LOGIN)}
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
    justifyContent: 'center',
    marginTop: screenHeight * 0.03,
  },
  row: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    flex: 3,
    paddingTop: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default Register;
