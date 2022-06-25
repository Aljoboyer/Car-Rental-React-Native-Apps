import { StyleSheet } from "react-native";


export const Mybookingstyles = StyleSheet.create({
    BookingContainer:{
      marginHorizontal: 5
    },
    bookingItem: {
      paddingBottom: 10
    },
    CarImg:{
      height: 120,
      width: 260
    },
    imgView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 5
    },
    DateView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingTop: 10,
      paddingHorizontal: 7
    },
    bookingFooter:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      paddingHorizontal: 7
    }
  });

export const BookingDetailstyles = StyleSheet.create({
    carDetails:{
      paddingRight: 10
    },
    licenseImgView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        
    }
  });