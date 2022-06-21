import React, { useEffect, useState } from 'react';
import { View, Text, Alert, StyleSheet, ScrollView } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { CREATE_PAYMENT_INTENT, GET_USER_INFO } from '../../../MutationsAndQuery/Query/Querys';
import { useLazyQuery, useMutation } from '@apollo/client';
import Buttons from '../../../components/Buttons/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header/Header';
import { MaterialCommunityIcons,EvilIcons  } from '@expo/vector-icons';
import { colors } from '../../../theme/colors';
import MainText from '../../../components/MainText/MainText';
import useFirebase from '../../../FirebaseSetup/FirebaseAuth';
import { ADD_BOOKINGS } from '../../../MutationsAndQuery/Mutation/Mutations';

const TripInfo = ({title1, title2}) => {
  return (
    <View style={{marginHorizontal: 30, marginVertical: 7}}>
      <MainText preset='h5' style={{color: 'gray', }} >{title1}</MainText>
      <MainText preset='h4' style={{color: colors.Green, fontWeight: 'bold', marginTop: 5}}>{title2}</MainText>
    </View>
  )
}

const AmountInfo = ({title, value}) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 30, marginVertical: 7}}>
      <MainText preset='h5' style={{color: colors.Green, fontWeight: 'bold', }}>{title}</MainText>
      <MainText preset='h5' style={{color: colors.Green, fontWeight: 'bold', }}>{value}</MainText>
    </View>
  )
}


const PaymentScreen = ({info, navigation}) => {
  const stripe = useStripe();
  const [PaymentIntent, {data: secretKay}] = useLazyQuery(CREATE_PAYMENT_INTENT);
  const [porcessing, setProcessing] = useState(false)
  const [success, setSuccess] = useState('')
  const amount = parseInt(info.price) * parseInt(info.diffDays);
  const {user} = useFirebase();
  const [GetUser, {data: userInfo}] = useLazyQuery(GET_USER_INFO);
  const [AddBookings] = useMutation(ADD_BOOKINGS);

  const PriceAmount = amount + '';

  useEffect(() => {
    GetUser({variables: {
      email: user?.email
  }} )
  },[user?.email])

  useEffect(() => {
    PaymentIntent({variables: {
      price: PriceAmount
  }} )
  },[amount])

  const clientSecret = secretKay?.GetPaymentIntent?.clientSecret;

// const bookingdata = {name: userInfo?.User?.name, email: userInfo?.User?.email, phone: userInfo?.User?.phone, img: userInfo?.User?.img ? userInfo?.User?.img : 'nan', carName: info.carName, carimg: info.carimg, seat: info.seat, perDayPrice: info.price, location: info.location, diffDays: info.diffDays + '', startDate: info.startDate, endDate: info.endDate, licenseDate: info.licenseDate, licenseNum: info.licenseNum, NidNum: info.NidNum, payment: PriceAmount}; 
// console.log('mainData', bookingdata)

const PaymentSubmit = async () => {
  try {
    const initSheet = await stripe.initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      googlePay: true,
      merchantDisplayName: 'Merchant Name',
    });
    if (initSheet.error) {
      console.error(initSheet.error);
      return Alert.alert(initSheet.error.message);
    }
    const presentSheet = await stripe.presentPaymentSheet({
      clientSecret: clientSecret,
    });
    if (presentSheet.error) {
      console.error(presentSheet.error);
      return Alert.alert(presentSheet.error.message);
    }
    Alert.alert("Your Payment Successfull");
    AddBookings({variables: {input: {name: userInfo?.User?.name, email: userInfo?.User?.email, phone: userInfo?.User?.phone, img: userInfo?.User?.img ? userInfo?.User?.img : 'nan', carName: info.carName, carImg: info.carimg, seat: info.seat, perDayPrice: info.price, location: info.location, diffDays: info.diffDays + '', startDate: info.startDate, endDate: info.endDate, licenseFront: info.licenseFront, licenseBack: info.licenseBack, licenseDate: info.licenseDate, licenseNum: info.licenseNum, NidFront: info.NidFront, NidBack: info.NidBack, NidNum: info.NidNum, payment: PriceAmount, secretKey: clientSecret}}});
    navigation.navigate('Success', {info: {carName: info.carName}})

  } catch (err) {
    console.error(err);
    Alert.alert("Payment failed!"); 
  }

}

  return (
  <SafeAreaView>
    <ScrollView>
      <Header title='Payment' backbtn={true} />
      <View style={styles.cardLogo}>
        <EvilIcons name="credit-card" size={80} color="white" />
        <MainText preset='h4' style={{color: 'white'}}>Pay</MainText>
      </View>
      <View>
        
        <TripInfo title1='Car' title2={info.carName}/>
        <View style={styles.Lines} />
        <TripInfo title1='Pick-up location' title2={info.location}/>
        <View style={styles.Lines} />
        <TripInfo title1='Trip Dates' title2={`${info.startDate} To ${info.endDate}`}/>

        <View style={{marginVertical: 20}}>
          <MainText preset='h4' style={{color: colors.Green, alignSelf: 'center', fontWeight: 'bold'}} >Rental Fees</MainText>
          <AmountInfo title="Total days" value={info.diffDays} />
          <AmountInfo title="Per day fee" value={`$ ${info.price}`} />
          <View style={{borderBottomColor: colors.Green, borderBottomWidth: 1, marginHorizontal: 30, marginTop: 7}} />
          <AmountInfo title="Total fees" value={`$ ${amount}`} />
        </View>
        <Buttons onPress={PaymentSubmit} title='Make Payment' customStyles={{width: 250, alignSelf: 'center', height: 50, borderRadius: 10}} />
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

export default PaymentScreen;

const styles = StyleSheet.create({
  cardLogo: {
    backgroundColor: colors.Green,
    width: 150,
    height: 150,
    marginHorizontal: 120,
    marginTop: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  Lines: {
    borderBottomColor: 'gray', borderBottomWidth: 0.5, marginHorizontal: 30, marginTop: 7
  }
});


// name: userInfo?.User?.name, email: userInfo?.User?.email, phone: userInfo?.User?.phone, img: userInfo?.User?.img ? userInfo?.User?.img : 'nan', carName: info.carName, carimg: info.carimg, seat: info.seat, perDayPrice: info.price, location: info.location, diffDays: info.diffDays + '', startDate: info.startDate, endDate: info.endDate, licenseFront: info.licenseFront, licenseBack: info.licenseBack, licenseDate: info.licenseDate, licenseNum: info.licenseNum, NidFront: info.NidFront, NidBack: info.NidBack, NidNum: info.NidNum, payment: PriceAmount