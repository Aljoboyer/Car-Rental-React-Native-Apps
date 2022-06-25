import React from 'react';
import { View, Image, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Header';
import MainText from '../../../components/MainText/MainText';
import { BookingDetailstyles } from '../../../Styles/MybookingStyles';
import { colors } from '../../../theme/colors';
import { BookingItems } from './MyBooking';

const ImageView = ({title, img1 , img2}) => {
    return (
    <View >
        <MainText preset='h4' style={{color: colors.Green, marginVertical: 15, paddingLeft: 20, marginTop: 20, fontWeight: 'bold'}}>{title}</MainText>
        <View style={BookingDetailstyles.licenseImgView}>
            <Image source={{ uri: `data:image/gif;base64,${img1}`}} style={{ width: 170, height: 170 }} />
            <Image source={{ uri: `data:image/gif;base64,${img2}`}} style={{ width: 170, height: 170}} />
        </View>
    </View>
    )
}

const BookingDetails = ({route}) => {
    const {booking} = route.params;
  return (
    <SafeAreaView >
        <ScrollView>
        <Header backbtn={true} title="Your Booking Details" />
        <View style={BookingDetailstyles.carDetails}>
            <BookingItems item={booking} />
        </View>
        <View style={{alignSelf: 'center', marginVertical: 10}}>
            <MainText preset='h4' style={{color: 'gray'}}>Your secret key</MainText>
            <MainText preset='h3' style={{color: colors.Green}}>{booking?.secretKey}</MainText>
        </View>
        <ImageView title="Your Driving License image" img1={booking.licenseFront} img2={booking.licenseBack} />
        <ImageView title="Your National ID card image" img1={booking.NidFront} img2={booking.NidBack} />
        </ScrollView>
    </SafeAreaView>
  );
}

export default BookingDetails;