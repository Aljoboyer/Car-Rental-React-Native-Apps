import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '../../../components/Buttons/Buttons';
import MainText from '../../../components/MainText/MainText';
import useFirebase from '../../../FirebaseSetup/FirebaseAuth';

const Profile = () => {
  const {LogOut} = useFirebase();

  const LogOutHandler = () => {
    LogOut()
  }
  return (
    <SafeAreaView>
      <MainText preset='h1' >Your Profile</MainText>
      <Buttons title='LogOut'  onPress={LogOutHandler}/>
    </SafeAreaView>
  );
}

export default Profile;
