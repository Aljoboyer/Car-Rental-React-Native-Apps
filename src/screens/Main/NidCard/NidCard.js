import React, { useState } from 'react';
import { View, StyleSheet,Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Header';
import MainText from '../../../components/MainText/MainText';
import { colors } from '../../../theme/colors';
import {FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import Input from '../../../components/Input/Input';
import * as ImagePicker from 'expo-image-picker';
import Buttons from '../../../components/Buttons/Buttons';

const NidCard = () => {
    const [image, setImage] = useState([]);

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
          setImage([...image, result.base64]);
        }
      };

  return (
    <SafeAreaView>
      <ScrollView>
        <Header title='National ID' backbtn={true} />
        <MainText preset='h4' style={{color: colors.Green, alignSelf: 'center', marginVertical: 30}}>Upload your National ID photo</MainText>

        <View style={styles.imageContainer}>
          <View>
            {
              image.length > 0 ? <Image source={{ uri: `data:image/gif;base64,${image[0]}`}} style={{ width: 100, height: 100 }} /> :           <TouchableOpacity onPress={pickImage} style={styles.imageIcon}>
              <AntDesign name="plus" size={40} color={colors.Green} />
              </TouchableOpacity>
            }
            <MainText preset='h6' style={{alignSelf: 'center', marginVertical: 10}}>Front</MainText>
          </View>
          <View>
            {
              image.length > 1 ? <Image source={{ uri: `data:image/gif;base64,${image[1]}`}} style={{ width: 100, height: 100 }} /> :           <TouchableOpacity onPress={pickImage} style={styles.imageIcon}>
              <AntDesign name="plus" size={40} color={colors.Green} />
              </TouchableOpacity>
            }
            <MainText preset='h6' style={{alignSelf: 'center',marginVertical: 10}}>Back</MainText>
          </View>
        </View>
        <View style={styles.inputContainer}>
            <View style={styles.inputBox}>
              <FontAwesome name="drivers-license-o" size={30} color="black" />
              <Input customStyles={styles.inputs} placeholder='Your national ID card number' />
            </View>
            <Buttons title='Next' customStyles2={styles.text} customStyles={styles.buttons} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NidCard;

const styles = StyleSheet.create({
    imageIcon:{
      borderWidth: 1,
      borderColor: colors.Green,
      borderStyle:'dashed',
      padding: 40
    },
    imageContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    inputBox:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20
    },
    inputContainer:{
      marginHorizontal: 35
    },
    buttons:{
      width: 330,
      marginVertical: 30,
      height: 60,
      borderRadius: 10
    },
    text:{
      fontSize: 18
    }
  });