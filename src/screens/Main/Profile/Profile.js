import React, { useCallback, useEffect } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '../../../components/Buttons/Buttons';
import Header from '../../../components/Header/Header';
import MainText from '../../../components/MainText/MainText';
import useFirebase from '../../../FirebaseSetup/FirebaseAuth';
import { GET_USER_INFO } from '../../../MutationsAndQuery/Query/Querys';
import { colors } from '../../../theme/colors';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useLazyQuery, useQuery } from '@apollo/client';
import { useFocusEffect, useIsFocused} from '@react-navigation/native';
import { Profilestyles } from '../../../Styles/ProfileStyle';

const ProfileScreen = ({title, iconName, navigation, routes}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routes)} style={Profilestyles.profileScreenView}>
      <MainText preset='h5'><AntDesign name={iconName} size={20} color='gray' />  {title}</MainText>
      <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
    </TouchableOpacity>
  )
}

const Profile = ({navigation}) => {
  const {LogOut} = useFirebase();
  const {user} = useFirebase();
  const {GettUser, data: userInfo, refetch} = useQuery(GET_USER_INFO, {variables: {
    email: user?.email
}});
  const isVisible = useIsFocused();

  useEffect(() => {;
  if (isVisible) {
    refetch()
    console.log('visible')
  }
  },[user?.email, isVisible])

  const LogOutHandler = () => {
    LogOut()
  }
  return (
    <SafeAreaView>
      <Header title='Profile' />
      <View style={Profilestyles.ProfileDetails}> 
          {
          userInfo?.User?.img ? <Image style={Profilestyles.ProfileImg2} source={{ uri: `data:image/gif;base64,${userInfo?.User?.img}`}}/> :  <Image style={Profilestyles.ProfileImg} source={require('../../../../assets/profileBlank.jpg')} />
          }
          <View>
            <MainText preset='h4' style={{color: colors.Green, fontWeight: 'bold'}}>{userInfo?.User?.name}</MainText>
            <MainText preset='h6' style={{color: 'gray'}}>{userInfo?.User?.phone}</MainText>
            <MainText preset='h6' style={{color: 'gray'}}>{userInfo?.User?.email}</MainText>
          </View>
      </View>
      <View style={Profilestyles.specificationView}>
          <ProfileScreen title='Edit Profile' iconName="profile" navigation={navigation} routes="EditProfile" />
          <ProfileScreen title='Saved' iconName="save" navigation={navigation} />
          <ProfileScreen title='Notification' iconName="notification" navigation={navigation} />
          <ProfileScreen title='Terms & Condition' iconName="filetext1" navigation={navigation} />
          <ProfileScreen title='FAQs' iconName="questioncircleo" navigation={navigation} routes="Faq" />
      </View>
      <Buttons customStyles2={Profilestyles.buttons2} customStyles={Profilestyles.buttons} title='LogOut'  onPress={LogOutHandler}/>
    </SafeAreaView>
  );
}

export default Profile;

