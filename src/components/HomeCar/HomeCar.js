import React from 'react';
import {Image, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Buttons from '../Buttons/Buttons';
import MainText from '../MainText/MainText';
import { MaterialCommunityIcons ,MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../theme/colors';
import { HomeCarstyles } from '../../Styles/HomeStyle';

const HomeCar = ({cars, navigation, horizontal}) => {

const CarItem = ({ item }) => (
    <View style={HomeCarstyles.carItem}>
        <Image style={HomeCarstyles.CarImg} source={{uri: `https://car-rental-server-delta.vercel.app/${item.carimg}`}} />
        <MainText preset='h4' style={HomeCarstyles.CarName}>{item.carName}</MainText>

        <View style={HomeCarstyles.InfoContianer}>
          <MainText style={HomeCarstyles.carText}> <MaterialCommunityIcons name="refresh-auto" size={20} color="gray" />Automatic</MainText>

          <MainText style={{ marginLeft: 100, fontSize: 15,color: 'gray',fontWeight: 'bold',}}> <MaterialCommunityIcons name="car-child-seat" size={20} color="gray" />{item.seat} Seats</MainText>
        </View>

        <View style={HomeCarstyles.FlexContainer}>
          <MainText preset='h5' style={HomeCarstyles.CarName}>$ {item.perDayPrice}/day</MainText>
          <Buttons onPress={() => navigation.navigate('CarDetails', {car: item})} title="View details" customStyles={HomeCarstyles.buttons}/>
        </View>
    </View>
    );
      
  return (
        <FlatList
          data={cars}
          renderItem={CarItem}
          keyExtractor={item => item.index}
          horizontal={horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        />
       
  );
}

export default HomeCar;

