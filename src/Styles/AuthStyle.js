import { StyleSheet } from "react-native";
const { colors } = require("../theme/colors");


export const Loginstyles = StyleSheet.create({
    LoginIntro:{
      backgroundColor: colors.Green,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 100,
      paddingBottom: 30
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer:{
      marginHorizontal: 20,
      marginVertical: 5
    },
    InputView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.Green,
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      elevation: 1,
      shadowColor: '#01362e95',
      borderRadius: 5,
    },
    buttons:{
      width:  '100%',
      borderRadius: 5,
      height: 55,
      marginVertical: 10
    },
    loginimg:{
      width: 50,
      height: 50,
      marginVertical: 15
    },
    SocialContainer:{
      flexDirection: 'column',
      alignItems: 'center',
    }
  });

export const Registerstyles = StyleSheet.create({
    LoginIntro:{
      backgroundColor: colors.Green,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomLeftRadius: 100,
      paddingBottom: 30
    },
    iconContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer:{
      marginHorizontal: 20,
      marginVertical: 5
    },
    InputView: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: colors.Green,
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      elevation: 1,
      shadowColor: '#01362e95',
      borderRadius: 5,
    },
    buttons:{
      width:  '100%',
      borderRadius: 5,
      height: 55,
      marginVertical: 10
    },
    loginimg:{
      width: 50,
      height: 50,
      marginVertical: 15
    },
    SocialContainer:{
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: 20
    }
  });