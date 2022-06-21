import React from 'react';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Header from '../../../components/Header/Header';
import { colors } from '../../../theme/colors';
import Buttons from '../../../components/Buttons/Buttons';

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
        <Image style={styles.CarImg} source={{uri: `http://192.168.43.45:4000/${car.carimg}`}} />
        </View>
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 10, alignItems: 'center', flexWrap: 'wrap'}}>
                <View>
                    <MainText preset='h3' style={{paddingLeft: 10,  color: colors.Green}}>{car.carName}</MainText>
                    <MainText preset='h5' style={{paddingLeft: 10,fontWeight: 'bold', color: 'gray'}}>${car.perDayPrice} Per Day</MainText>
                </View>
                <TouchableOpacity onPress={NavigationHandler} style={styles.continueBtn}>
                    <MainText preset='h5' style={{color: 'white'}}>Continue</MainText>
                    <MaterialIcons name="keyboard-arrow-right" size={28} color="white" />
                </TouchableOpacity>
            </View>
            <MainText preset='h4' style={{paddingLeft: 10, paddingTop: 30,  color: colors.Green, fontWeight: 'bold'}}>Car Features</MainText>
            <View style={styles.featureContainer}>
                <MainText style={styles.featureText}><MaterialCommunityIcons name="refresh-auto" size={26} color={colors.Green} />Automatic</MainText>
                <MainText style={styles.featureText}><MaterialCommunityIcons name="car-speed-limiter" size={29} color={colors.Green} />420KM</MainText>
                <MainText style={styles.featureText}><MaterialCommunityIcons name="fuel" size={29} color={colors.Green} />Diesel</MainText>
                <MainText style={styles.featureText}> <MaterialCommunityIcons name="car-child-seat" size={29} color={colors.Green} />{car.seat} Seats</MainText>
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

const styles = StyleSheet.create({
    CarImg: {
        height: 250,
    },
    featureText: {fontSize: 16,color: 'gray',fontWeight: 'bold', marginLeft: 10},
    featureContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingTop: 15
    },
    continueBtn:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.Green,
        paddingLeft: 20,
        borderRadius: 5,
        paddingTop: 5,
        paddingBottom: 7,
        paddingRight: 5
    }
});