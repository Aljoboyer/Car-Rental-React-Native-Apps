import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Header';
import HomeCar from '../../../components/HomeCar/HomeCar';
import MainText from '../../../components/MainText/MainText';
import { GET_ALL_CARS } from '../../../MutationsAndQuery/Query/Querys';
import { ViewAllFilterStyles } from '../../../Styles/HomeStyle';
import { AntDesign, MaterialCommunityIcons} from '@expo/vector-icons'; 
import Buttons from '../../../components/Buttons/Buttons';

const ViewAllFilter = ({route, navigation}) => {
    const {name} = route.params;
    const [seats, setSeats] = useState(null);
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const {data: carData} = useQuery(GET_ALL_CARS);
    const [cars, setCars] = useState([]);

    useEffect(() => {
      setCars(carData.GetCars)
    },[name])

    const filterHandler = () => {
      if(seats && min && max){
        const filterData = carData.GetCars.filter(car =>
          {
            return parseInt(car.price) > parseInt(min) && parseInt(max) > parseInt(car.price) && seats === car.seat
          });
        setCars(filterData)
        console.log('first dukse', filterData)
      }
      else if(min && max){
        const filterData = carData.GetCars.filter(car =>
          {
           return parseInt(car.perDayPrice) >= parseInt(min) && parseInt(max) >= parseInt(car.perDayPrice)
          })
        setCars(filterData)
        console.log('second dukse', filterData)
        console.log('max', max, min)
      }
      else if (seats){
        const filterData = carData.GetCars.filter(car => seats === car.seat)
        setCars(filterData)
      }
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header title={name} backbtn={true} />
      <MainText preset='h5' style={ViewAllFilterStyles.filterTitle}><AntDesign name="filter" size={20} color="gray" /> Filter car by rental price</MainText>
      <View style={ViewAllFilterStyles.inputContainer}> 
        <TextInput onChangeText={(text) => setMin(text)} style={ViewAllFilterStyles.inputs} placeholder='Enter minimum rent' />
        <TextInput onChangeText={(text) => setMax(text)} style={ViewAllFilterStyles.inputs} placeholder='Enter maximum rent' />
      </View>
      <View style={ViewAllFilterStyles.seatInput}>
        <MainText preset='h5' style={ViewAllFilterStyles.filterTitle2}>Filter car <MaterialCommunityIcons name="car-child-seat" size={20} color="gray" /> seat</MainText>
        <TextInput onChangeText={(text) => setSeats(text)}  style={ViewAllFilterStyles.inputs} placeholder='Enter total seat' />
        <Buttons onPress={filterHandler} title='Filter' customStyles={ViewAllFilterStyles.filterBtn} />
      </View>
      {
        cars.length > 0 ? <HomeCar cars={cars} navigation={navigation} horizontal={false} /> : <MainText preset='title1' style={{color: '#D14C32', alignSelf: 'center', marginTop: 100}}>No cars Available...</MainText>
      }
    </SafeAreaView>
  );
}

export default ViewAllFilter;
