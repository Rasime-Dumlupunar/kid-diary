//import liraries
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import {
  ADDNOTE,
  GETSTARTED,
  LOGIN,
  NOTEDETAIL,
  NOTELIST,
  PREMIUM,
  PROFILE,
  PROFILEEDIT,
  REGISTER,
} from '../utils/routes';
import NoteList from '../screens/note/noteList';
import NoteDetail from '../screens/note/noteDetail';
import AddNote from '../screens/note/addNote';
import GetStarted from '../screens/getStarted';
import Login from '../screens/auth/login';
import Register from '../screens/auth/register';
import Profile from '../screens/profile/profile';
import { Colors } from '../theme/colors';
import {
  AddCircle,
  ProfileCircle,
  SearchNormal1,
} from 'iconsax-react-nativejs';
import Premium from '../screens/sale/premium';
import { useSelector } from 'react-redux';
import ProfileEdit from '../screens/profile/profileEdit';

const Stack = createNativeStackNavigator();
const RootNavigator: React.FC = () => {
  const { isLogin } = useSelector(state => state.auth);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.FIRST,
        },
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 22,
        },
      }}
    >
      {isLogin ? (
        <Stack.Group>
          <Stack.Screen
            options={({ navigation }) => ({
              headerRight: () => (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                  }}
                >
                  <Pressable
                    style={{ marginHorizontal: 5 }}
                    onPress={() => navigation.navigate(ADDNOTE)}
                  >
                    <AddCircle size={27} color="black" />
                  </Pressable>
                  <Pressable
                    onPress={() => navigation.navigate(ADDNOTE)}
                    style={{ marginHorizontal: 5 }}
                  >
                    <SearchNormal1 size={27} color="black" />
                  </Pressable>
                </View>
              ),
              headerLeft: () => (
                <View style={{ flex: 1 }}>
                  <Pressable
                    style={{}}
                    onPress={() => navigation.navigate(PROFILE)}
                  >
                    <ProfileCircle size={27} color="black" />
                  </Pressable>
                </View>
              ),
            })}
            name={NOTELIST}
            component={NoteList}
          ></Stack.Screen>
          <Stack.Screen name={PROFILE} component={Profile}></Stack.Screen>

          <Stack.Screen name={NOTEDETAIL} component={NoteDetail}></Stack.Screen>
          <Stack.Screen name={ADDNOTE} component={AddNote}></Stack.Screen>
          <Stack.Screen name={PREMIUM} component={Premium}></Stack.Screen>
          <Stack.Screen
            name={PROFILEEDIT}
            component={ProfileEdit}
          ></Stack.Screen>
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen name={GETSTARTED} component={GetStarted}></Stack.Screen>
          <Stack.Screen name={LOGIN} component={Login}></Stack.Screen>
          <Stack.Screen name={REGISTER} component={Register}></Stack.Screen>
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default RootNavigator;
