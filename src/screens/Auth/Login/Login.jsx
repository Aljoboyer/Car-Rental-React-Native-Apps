import { StyleSheet, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import {Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome  } from '@expo/vector-icons'; 
import { colors } from '../../../theme/colors';
import Input from '../../../components/Input/Input';
import Buttons from '../../../components/Buttons/Buttons';
import { useState } from 'react';
import useFirebase from '../../../FirebaseSetup/FirebaseAuth';
import { Loginstyles } from '../../../Styles/AuthStyle';

const Login = ({navigation}) => {
  const [logData, setLogData] = useState({});
  const {LoginUser} = useFirebase();

  const LoginHandler = () => {
    console.log('log', logData)
    LoginUser(logData.email, logData.password) 
  }

  return (
    <SafeAreaView>
      <View style={Loginstyles.LoginIntro}>
        <View style={Loginstyles.iconContainer}>
          <MaterialCommunityIcons name="car-sports" size={150} color="white" />
          <Ionicons name="location-outline" size={70} color="white" />
        </View>
        <MainText preset='title1' style={{fontSize: 40, color: colors.White}}>Aj-CarRental</MainText>
      </View>
      
      <View style={Loginstyles.inputContainer}>
        <MainText style={{color: colors.Green, alignSelf: 'center', marginVertical: 20}} preset='h1'>Login-Here</MainText>
        <View style={Loginstyles.InputView}>
            <MaterialIcons name="email" size={24} color={colors.Green} />
            <Input placeholder='useremail' onChangeText={(text) => {
        setLogData({...logData, email: text})
      }} />
        </View>
        <View style={Loginstyles.InputView}>
            <FontAwesome name="lock" size={24} color={colors.Green} />
            <Input placeholder='password' secureTextEntry={true} onChangeText={(text) => {
        setLogData({...logData, password: text})
      }}/>
        </View>
        <Buttons title='Login' customStyles={Loginstyles.buttons} onPress={LoginHandler} />
      </View>
      <View style={Loginstyles.SocialContainer}>
        <MainText preset='h4' style={{fontWeight: 'bold', color: colors.Green}}>OR</MainText>
        <MainText preset='h6'>Countinue via google account</MainText>
         <Image style={Loginstyles.loginimg} source={require("../../../../assets/google.png")} />
         <Pressable onPress={() => navigation.navigate('Register')}>
            <MainText preset='h5'>Don't have an Account ? <MainText preset='h5' style={{fontWeight: 'bold', color: colors.Green}}>Register Now</MainText></MainText>
          </Pressable> 
      </View>
    </SafeAreaView>
  );
}

export default Login;

