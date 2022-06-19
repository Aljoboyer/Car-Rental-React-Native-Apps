import React, { useState } from 'react';
import { View , Button, FlatList,  Image} from 'react-native';
import Input from '../../../components/Input/Input';
import * as ImagePicker from 'expo-image-picker';
import MainText from '../../../components/MainText/MainText';
import {useQuery, useMutation} from '@apollo/client';
import { ADD_CAR } from '../../../MutationsAndQuery/Mutation/Mutations';
import { SafeAreaView } from 'react-native-safe-area-context';

const Addcar = () => {
    const [carData, setCarData] = useState({});
    const [image, setImage] = useState(null);
    const [AddCars] = useMutation(ADD_CAR);
    const [imgdata, setImgdata] = useState({});

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
        base64: true,
      });
      
      if (!result.cancelled) {
        setImage(result);
      }
    };

    const AddCarHandler = (e) => {
      AddCars({variables:  {input: {carName: carData.carName, perDayPrice: carData.perDayPrice, location: carData.location,  seat: carData.seat,  brand: carData.brand,  description: carData.description, carimg: image.base64}}})
    }

  return (
    <SafeAreaView>
      <MainText preset='h1'>Add Car Here</MainText>
      <Input placeholder='Car name' onChangeText={(text) => {
        setCarData({...carData, carName: text})
      }} />
      <Input placeholder='Per day price' onChangeText={(text) => {
        setCarData({...carData, perDayPrice: text})
      }} />
      <Input placeholder='Location' onChangeText={(text) => {
        setCarData({...carData, location: text})
      }} />
      <Input placeholder='Seat' onChangeText={(text) => {
        setCarData({...carData, seat: text})
      }} />
      <Input placeholder='Brand' onChangeText={(text) => {
        setCarData({...carData, brand: text})
      }} />
      <Input placeholder='Description' onChangeText={(text) => {
        setCarData({...carData, description: text})
      }} />
 
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {/* {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
{/* 
      {
        cars?.GetCars.length > 0 && <><Image style={{ width: 200, height: 200 }} source={{uri: `data:image/gif;base64,${cars.GetCars[0]?.carimg}`}} /> 
        <MainText preset='h1'>{cars.GetCars[0].carName}</MainText>
        </>
      } */}
      <Button onPress={AddCarHandler} title="Add Car" />

    </SafeAreaView>
  ); 
}

export default Addcar;
