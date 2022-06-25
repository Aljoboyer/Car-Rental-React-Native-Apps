import { useQuery } from '@apollo/client';
import React from 'react';
import {ActivityIndicator, Image, View, ScrollView , TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Header';
import MainText from '../../../components/MainText/MainText';
import { GET_USERS_BOOKINGS } from '../../../MutationsAndQuery/Query/Querys';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import { Mybookingstyles } from '../../../Styles/MybookingStyles';

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

export const BookingItems = ({item, navigation, btn}) => {
  return (
    <>
        <View style={Mybookingstyles.imgView}>
            <View>
              <MainText preset='h5' style={{color: colors.Green, fontWeight: 'bold'}}>{item.carName}</MainText>
              <MainText preset='p' style={{color: 'gray'}}><MaterialCommunityIcons name="car-child-seat" size={20} color="gray" /> Seat {item.seat}</MainText>
              <MainText preset='p' style={{color: 'gray'}}><MaterialCommunityIcons name="refresh-auto" size={20} color="gray" /> Automatic</MainText>
            </View>
          <Image style={Mybookingstyles.CarImg} source={{uri: `http://192.168.10.106:4000/${item.carImg}`}} />
        </View>
        <MainText preset='h5'><Entypo name="location-pin" size={22} color={colors.Green} /> {item.location}</MainText>
        <View style={Mybookingstyles.DateView}>
            <View>
              <MainText preset='p' style={{color: 'gray'}}>Trip Start</MainText>
              <MainText preset='h5'>{new Date(item.startDate).getDate()} {monthNames[new Date(item.startDate).getMonth()]}  {new Date(item.startDate).toLocaleTimeString()}</MainText>
            </View>
            <View>
              <MainText preset='p' style={{color: 'gray'}}>Trip End</MainText>
              <MainText preset='h6'>{new Date(item.endDate).getDate()} {monthNames[new Date(item.endDate).getMonth()]}  {new Date(item.endDate).toLocaleTimeString()}</MainText>
            </View>
        </View>
        <View style={Mybookingstyles.bookingFooter}>
            <View>
              <MainText preset='p' style={{color: 'gray'}}>Paid via card</MainText>
              <MainText preset='h5'>${item.payment}</MainText>
            </View>
            {
              btn && <TouchableOpacity onPress={() => navigation.navigate('BookingDetails', {booking: {...item}})} style={{flexDirection: 'row', alignItems: 'center'}}>
              <MainText preset='h5' style={{color: colors.Green}}>View</MainText>
              <MaterialCommunityIcons name="view-list" size={22} color={colors.Green} />
            </TouchableOpacity>
            }

        </View>
    </>
  )
}

const MyBooking = ({navigation}) => { 
  const {data: bookings} = useQuery(GET_USERS_BOOKINGS);

  const BookingItem = ({ item }) => (
    
    <View style={Mybookingstyles.bookingItem}>
       <BookingItems item={item} navigation={navigation} btn={true}/> 
    </View>
    );

  return (
    <SafeAreaView>
      <ScrollView>
        <Header title='My Bookings' />
        <View style={Mybookingstyles.BookingContainer}>
          {
            bookings ? <FlatList
            data={bookings.Bookings}
            renderItem={BookingItem}
            keyExtractor={item => item.index}
            vertical
            showsHorizontalScrollIndicator={false}
          /> : <ActivityIndicator color="blue" size="large" />
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MyBooking;
