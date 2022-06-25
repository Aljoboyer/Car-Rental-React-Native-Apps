import React, { useState } from 'react';
import { View , StyleSheet, Button, TouchableOpacity, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Header';
import Input from '../../../components/Input/Input';
import DateTimePicker  from '@react-native-community/datetimepicker';
import { FontAwesome5 , MaterialCommunityIcons } from '@expo/vector-icons';
import MainText from '../../../components/MainText/MainText';
import { colors } from '../../../theme/colors';
import Buttons from '../../../components/Buttons/Buttons';
import { Ionicons } from '@expo/vector-icons'; 
import { BookingInfostyles } from '../../../Styles/CarDetailsStyle';

const BookingInfo = ({route, navigation}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false)
    const [location, setLocation] = useState('')
    const {info} = route.params;
    
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setStartDate(currentDate);
    };
    const onChange2 = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow2(false);
      setEndDate(currentDate);
    };

    const ShowPicker = (mode) => {
      setShow(true);
      setMode(mode);
    }

    const ShowPicker2 = (mode) => {
      setShow2(true);
      setMode(mode);
    }

    //counting days between two dates
    const dats = new Date(startDate.toLocaleDateString())
    const dats2 = new Date(endDate.toLocaleDateString())
    const seting1 = ((dats.getMonth() > 8) ? (dats.getMonth() + 1) : ('0' + (dats.getMonth() + 1))) + '/' + ((dats.getDate() > 9) ? dats.getDate() : ('0' + dats.getDate())) + '/' + dats.getFullYear()
    const seting2 = ((dats2.getMonth() > 8) ? (dats2.getMonth() + 1) : ('0' + (dats2.getMonth() + 1))) + '/' + ((dats2.getDate() > 9) ? dats2.getDate() : ('0' + dats2.getDate())) + '/' + dats2.getFullYear()

    const date1 = new Date(seting1);
    const date2 = new Date(seting2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const NavigationHandler = () => {
      if(diffDays && endDate && startDate && location){
        navigation.navigate('DrivingLicense', {info: {...info, location: location, diffDays: diffDays, startDate: startDate.toLocaleString(), endDate: endDate.toLocaleString()}})
      }
      else{
        Alert.alert("Please enter booking info correctly");
      }
    }
  return (
    <SafeAreaView>
    <Header title='Time & Location' backbtn={true} />
    <View style={{marginHorizontal: 45}}>
        <Input onChangeText={(text) => setLocation(text)} customStyles={BookingInfostyles.inputs} placeholder='Enter Your Location'/>
    </View>

    <MainText preset='h4' style={BookingInfostyles.tripTitle}>Start Trip</MainText>
    <View style={BookingInfostyles.DateTimeContainer}>
        <View style={BookingInfostyles.icons}>
            <TouchableOpacity onPress={() => ShowPicker('date') }>
                <FontAwesome5 name="calendar-alt" size={40} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => ShowPicker('time') }>
                <MaterialCommunityIcons name="clock-time-eight-outline" size={40} color="black" />
            </TouchableOpacity>
        </View>
        <MainText style={BookingInfostyles.dateText}>Selected: {startDate.toLocaleString()}</MainText>
    </View>

    <MainText preset='h4' style={BookingInfostyles.tripTitle}>End Trip</MainText>
    <View style={BookingInfostyles.DateTimeContainer}>
    <View style={BookingInfostyles.icons}>
        <TouchableOpacity onPress={() => ShowPicker2('date') }>
            <FontAwesome5 name="calendar-alt" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => ShowPicker2('time') }>
            <MaterialCommunityIcons name="clock-time-eight-outline" size={40} color="black" />
        </TouchableOpacity>
    </View>
    <MainText  style={BookingInfostyles.dateText}>Selected: {endDate.toLocaleString()}</MainText>
    </View>

    <Buttons onPress={NavigationHandler} title='Next' customStyles2={BookingInfostyles.button2} customStyles={BookingInfostyles.buttons}/>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={startDate}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
      {show2 && (
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          mode={mode}
          is24Hour={true}
          onChange={onChange2}
        />
      )}
    </SafeAreaView>
  );
}

export default BookingInfo;
