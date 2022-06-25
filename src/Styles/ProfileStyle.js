const { StyleSheet } = require("react-native");
const { colors } = require("../theme/colors");


export const Profilestyles = StyleSheet.create({
    ProfileDetails:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingTop: 10
    },
    ProfileImg:{
      width: 150,
      height: 150
    },
    ProfileImg2:{
      width: 150,
      height: 150,
      borderRadius: 120,
    },
    specificationView: {
      paddingHorizontal: 10,
      marginVertical: 10
    },
    profileScreenView:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 15
    },
    buttons:{
      backgroundColor: 'white',
      borderWidth: 2,
      borderColor: colors.Green,
      width: 200,
      alignSelf: 'center',
      height: 60,
      borderRadius: 10,
      marginVertical: 30
    },
    buttons2:{
      color: colors.Green,
      fontSize: 18
    }
});

export const ProfileDetailstyles = StyleSheet.create({
    ProfileImg:{
      width: 220,
      height: 170,
      marginTop: 50,
      borderRadius: 30
    },
    inputView:{
      marginHorizontal: 40
    },
    inputs:{
      borderBottomWidth: 1,
      borderBottomColor: colors.Green,
      marginTop: 30,
      height: 50
    },
    buttons:{
      width: 250,
      alignSelf: 'center',
      marginVertical: 50,
      height: 55,
      borderRadius: 10
    },
    buttons2:{
      fontSize: 18
    }
  });