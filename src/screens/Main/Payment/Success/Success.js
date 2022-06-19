import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../../components/MainText/MainText';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../../../theme/colors';
import Buttons from '../../../../components/Buttons/Buttons';

const Success = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginHorizontal: 40}}>
        <Feather name="check-circle" size={100} color={colors.Green} />
        <MainText preset='title2' style={{color: colors.Green, marginTop: 30}}>Booked Successfully</MainText>
        <MainText preset='h6' style={{marginTop: 10}}>You've booked BMW 99 successfully Go To my bookings for more booking details</MainText>
        <Buttons customStyles={{width: 300, marginHorizontal: 10, marginVertical: 20, height: 50, borderRadius: 15}} title='Back To Home' />
      </View>
    </SafeAreaView>
  );
}

export default Success;

const styles = StyleSheet.create({
   
  });