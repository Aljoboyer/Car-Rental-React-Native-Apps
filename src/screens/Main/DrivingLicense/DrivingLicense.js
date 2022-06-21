import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Pressable, Image, ScrollView, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import Header from '../../../components/Header/Header';
import {FontAwesome5, AntDesign, FontAwesome } from '@expo/vector-icons'; 
import Input from '../../../components/Input/Input';
import { colors } from '../../../theme/colors';
import DateTimePicker  from '@react-native-community/datetimepicker';
import Buttons from '../../../components/Buttons/Buttons';
import * as ImagePicker from 'expo-image-picker';

const DrivingLicense = ({route, navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [image, setImage] = useState([]);
  const [licenseNum, setLicenseNum] = useState(null);
  const {info} = route.params;

  const ShowPicker = (mode) => {
    setShow(true);
    setMode(mode);
  }
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

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

  const NavigationHandler = () => {
    if(image.length === 2 && date && licenseNum){
      navigation.navigate('NidCard', {info: {...info, licenseFront: image[0], licenseBack: image[1],licenseDate: date.toLocaleDateString(), licenseNum: licenseNum}})
    }
    else{
      Alert.alert('Please enter your driving license information properly')
    }
  }
  return (
    <SafeAreaView>
      <ScrollView>
      <Header title='Driving License' backbtn={true} />
      <MainText preset='h4' style={{color: colors.Green, alignSelf: 'center', marginVertical: 30}}>Upload your Lisense ID photo</MainText>
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
              <Input customStyles={styles.inputs} placeholder='Your license number' onChangeText={(text) => setLicenseNum(text)} />
            </View>
            <Pressable onPress={() => ShowPicker('date') } style={styles.inputBox}>
              <FontAwesome5 name="calendar-alt" size={37} color="black" />
            {date.toLocaleDateString() === new Date().toLocaleDateString() ? <MainText style={{color: 'gray', paddingLeft: 10}}>License expiredate</MainText>  : <MainText style={{color: 'gray', paddingLeft: 10}}>{date.toLocaleDateString()}</MainText>} 
            </Pressable>
            {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
            )}
            <Buttons onPress={NavigationHandler} title='Next' customStyles2={styles.text} customStyles={styles.buttons} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default DrivingLicense;

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