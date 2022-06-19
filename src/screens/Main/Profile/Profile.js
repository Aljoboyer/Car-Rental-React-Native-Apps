import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';

const Profile = () => {
  return (
    <SafeAreaView>
      <MainText preset='h1' >Your Profile</MainText>
    </SafeAreaView>
  );
}

export default Profile;
