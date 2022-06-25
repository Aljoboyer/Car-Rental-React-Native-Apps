import { useLazyQuery, useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '../../../components/Buttons/Buttons';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import MainText from '../../../components/MainText/MainText';
import useFirebase from '../../../FirebaseSetup/FirebaseAuth';
import { GET_USER_INFO } from '../../../MutationsAndQuery/Query/Querys';
import { colors } from '../../../theme/colors';
import * as ImagePicker from 'expo-image-picker';
import { UPDATE_PROFILE } from '../../../MutationsAndQuery/Mutation/Mutations';
import { ProfileDetailstyles } from '../../../Styles/ProfileStyle';

const EditProfile = ({navigation}) => {
    const {user} = useFirebase();
    const [GetUser, {data: userInfo}, refetch] = useLazyQuery(GET_USER_INFO);
    const [UpdateProfile] = useMutation(UPDATE_PROFILE);
    
    useEffect(() => {
      GetUser({variables: {
        email: user?.email
    }} )
    },[user?.email]);

    const [editData, setEditData] = useState({});

    console.log('data', editData)

    useEffect(() => {
      setEditData({...userInfo?.User})
    },[userInfo?.User])

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
  
      if (!result.cancelled) {
        setEditData({...editData, img: result.base64})
      }
    };

    const SubmitHandler = () => {
      UpdateProfile({variables: {input: {name: editData.name, phone: editData.phone, id: editData.id, img: editData.img ?  editData.img : ''}}})
    }

  return ( 
    <SafeAreaView>
        <ScrollView>
        <Header backbtn={true} title="Edit Profile" />
        <TouchableOpacity onPress={pickImage} style={{alignSelf: 'center'}}>
          {
          editData?.img ? <Image style={ProfileDetailstyles.ProfileImg} source={{ uri: `data:image/gif;base64,${editData?.img}`}} /> :  <Image style={ProfileDetailstyles.ProfileImg} source={require('../../../../assets/profileBlank.jpg')} />
          }
          <MainText preset='title3' style={{color: colors.Green, textAlign: 'center'}}>Change</MainText>
        </TouchableOpacity>
        <View style={ProfileDetailstyles.inputView}>
          <TextInput editable={true} defaultValue={editData.name} style={ProfileDetailstyles.inputs} onChangeText={(text) => {
            setEditData({...editData, name: text})
          }} />
          <TextInput editable={true} defaultValue={editData.phone} style={ProfileDetailstyles.inputs} onChangeText={(text) => {
            setEditData({...editData, phone: text})
          }} />
          <Buttons onPress={SubmitHandler} title="Submit" customStyles2={ProfileDetailstyles.buttons2} customStyles={ProfileDetailstyles.buttons} />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}

export default EditProfile;
