import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';

const MyBooking = () => {
  return (
    <SafeAreaView>
      <MainText preset='h1'>My Booking</MainText>
    </SafeAreaView>
  );
}

export default MyBooking;
