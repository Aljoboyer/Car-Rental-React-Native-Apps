import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const CarDetailstyles = StyleSheet.create({
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

export const NidCardstyles = StyleSheet.create({
    imageIcon:{
      borderWidth: 1,
      borderColor: colors.Green,
      borderStyle:'dashed',
      padding: 40
    },
    imageContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    inputBox:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20
    },
    inputContainer:{
      marginHorizontal: 35
    },
    buttons:{
      width: 330,
      marginVertical: 30,
      height: 60,
      borderRadius: 10
    },
    text:{
      fontSize: 18
    }
});

export const Drivingstyles = StyleSheet.create({
    imageIcon:{
      borderWidth: 1,
      borderColor: colors.Green,
      borderStyle:'dashed',
      padding: 40
    },
    imageContainer:{
      flexDirection:'row',
      justifyContent: 'space-around',
      flexWrap: 'wrap'
    },
    inputBox:{
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20
    },
    inputContainer:{
      marginHorizontal: 35
    },
    buttons:{
      width: 330,
      marginVertical: 30,
      height: 60,
      borderRadius: 10
    },
    text:{
      fontSize: 18
    }
});

export const BookingInfostyles = StyleSheet.create({
    DateTimeContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        
    },
    tripTitle:{
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,

    },
    inputs:{
        borderBottomWidth: 1,
        borderBottomColor: colors.Green,
    },
    dateText:{
        alignSelf: 'center',  marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.Green,
        paddingBottom: 10
    },
    buttons:{
        width: 275,
        marginHorizontal: 60,
        height: 60,
        marginTop: 30,
        borderRadius: 10
    },
    button2:{
        fontSize: 18
    }
});

export const Paymentstyles = StyleSheet.create({
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
  })