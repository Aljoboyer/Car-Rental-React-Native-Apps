import React from 'react';
import {Image, View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Buttons from '../Buttons/Buttons';
import MainText from '../MainText/MainText';
import { MaterialCommunityIcons ,MaterialIcons } from '@expo/vector-icons'; 
import { colors } from '../../theme/colors';

const Car = ({cars, navigation}) => {

const CarItem = ({ item }) => (
    <View style={styles.carItem}>
        <Image style={styles.CarImg} source={{uri: `http://192.168.43.45:4000/${item.carimg}`}} />
        <MainText preset='h4' style={styles.CarName}>{item.carName}</MainText>

        <View style={styles.InfoContianer}>
          <MainText style={styles.carText}> <MaterialCommunityIcons name="refresh-auto" size={20} color="gray" />Automatic</MainText>

          <MainText style={{ marginLeft: 100, fontSize: 15,color: 'gray',fontWeight: 'bold',}}> <MaterialCommunityIcons name="car-child-seat" size={20} color="gray" />{item.seat} Seats</MainText>
        </View>

        <View style={styles.FlexContainer}>
          <MainText preset='h5' style={styles.CarName}>$ {item.perDayPrice}/day</MainText>
          <Buttons onPress={() => navigation.navigate('CarDetails', {car: item})} title="View details" customStyles={styles.buttons}/>
        </View>
    </View>
    );
      
  return (
       <View style={styles.carContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, paddingBottom: 30, alignItems: 'center'}}>
            <MainText preset="h2" style={styles.containerTitle}>Available car</MainText>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems:  'center'}}> 
              <MainText preset='title4' style={{ color: 'gray'}} >View All </MainText><MaterialIcons name="keyboard-arrow-right" size={28} color="gray" />
            </TouchableOpacity>
          </View>
          {
            cars && <FlatList
            data={cars.GetCars}
            renderItem={CarItem}
            keyExtractor={item => item.index}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
          }
        </View>
  );
}

export default Car;

const styles = StyleSheet.create({
  carContainer:{
    paddingTop: 50,
    paddingBottom: 15
  },
    CarImg: {
      height: 200,
      width: 300,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    buttons:{
      borderTopLeftRadius: 20,
      borderBottomRightRadius: 20,
      width: 120,
      
    },
    FlexContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      paddingLeft: 5
    },
    CarName: {
      fontWeight: 'bold',
      paddingLeft: 5,
      color: colors.Green
    },
    carText:{
      fontSize: 15,
      color: 'gray',
      fontWeight: 'bold',
    },
    carItem:{
      paddingHorizontal: 5,
      marginHorizontal: 10
    },
    InfoContianer:{
      flexDirection: 'row',
      marginTop: 10,
      marginRight: 5
    },
    containerTitle:{
      paddingLeft: 20,
      color: colors.Green
    }
  });