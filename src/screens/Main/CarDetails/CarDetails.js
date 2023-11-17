import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Header from '../../../components/Header/Header';
import { colors } from '../../../theme/colors';
import Buttons from '../../../components/Buttons/Buttons';
import { CarDetailstyles } from '../../../Styles/CarDetailsStyle';

const CarDetails = ({route, navigation}) => {
    const {car} = route.params;

    const NavigationHandler = () => {
        navigation.navigate('BookingInfo',{info: {carName: car.carName,carimg: car.carimg, seat: car.seat, price: car.perDayPrice}})
    }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView> 
        <Header backbtn={true} />
        <View>
        <Image style={CarDetailstyles.CarImg} source={{uri: `https://car-rental-server-delta.vercel.app/${car.carimg}`}} />
        </View>
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, alignItems: 'center', flexWrap: 'wrap'}}>
                <View>
                    <MainText preset='h3' style={{paddingLeft: 10,  color: colors.Green}}>{car.carName}</MainText>
                    <MainText preset='h5' style={{paddingLeft: 10,fontWeight: 'bold', color: 'gray'}}>${car.perDayPrice} Per Day</MainText>
                </View>
                <TouchableOpacity onPress={NavigationHandler} style={CarDetailstyles.continueBtn}>
                    <MainText preset='h5' style={{color: 'white'}}>Continue</MainText>
                    <MaterialIcons name="keyboard-arrow-right" size={28} color="white" />
                </TouchableOpacity>
            </View>
            <MainText preset='h4' style={{paddingLeft: 10, paddingTop: 30,  color: colors.Green, fontWeight: 'bold'}}>Car Features</MainText>
            <View style={CarDetailstyles.featureContainer}>
                <MainText style={CarDetailstyles.featureText}><MaterialCommunityIcons name="refresh-auto" size={26} color={colors.Green} />Automatic</MainText>
                <MainText style={CarDetailstyles.featureText}><MaterialCommunityIcons name="car-speed-limiter" size={29} color={colors.Green} />420KM</MainText>
                <MainText style={CarDetailstyles.featureText}><MaterialCommunityIcons name="fuel" size={29} color={colors.Green} />Diesel</MainText>
                <MainText style={CarDetailstyles.featureText}> <MaterialCommunityIcons name="car-child-seat" size={29} color={colors.Green} />{car.seat} Seats</MainText>
            </View>
        </View>
        <View  style={{paddingHorizontal: 15, paddingVertical: 30}}>
            <MainText preset='h4' style={{fontWeight: 'bold', color: colors.Green}}>Info</MainText>
            <MainText preset='p' style={{color: 'gray', paddingTop: 10}}>{car.description}</MainText>
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CarDetails;

