import { StyleSheet, View, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import {Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome  } from '@expo/vector-icons'; 
import { colors } from '../../../theme/colors';
import Input from '../../../components/Input/Input';
import Buttons from '../../../components/Buttons/Buttons';
import { useState } from 'react';
import useFirebase from '../../../FirebaseSetup/FirebaseAuth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../../MutationsAndQuery/Mutation/Mutations';

const Register = ({navigation}) => {
  const [regData, setRegData] = useState({});
  const { RegisterUser, setUser } = useFirebase()
  const [AddUser] = useMutation(ADD_USER);

  const RegisterHandler = () => {
    RegisterUser(regData.email, regData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      setUser(user);
      AddUser({variables: {input: {name: regData.name, email: regData.email, phone: regData.phone}}})
    })
    .catch((error) => {
        console.log(error.message)
    });
  }
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={styles.LoginIntro}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="car-sports" size={150} color="white" />
          <Ionicons name="location-outline" size={70} color="white" />
        </View>
        <MainText preset='title1' style={{fontSize: 40, color: colors.White}}>Aj-CarRental</MainText>
      </View>
      
      <View style={styles.inputContainer}>
        <MainText style={{color: colors.Green, alignSelf: 'center', marginVertical: 20}} preset='h3'>Register To Aj-Car-Rental</MainText>
        <View style={styles.InputView}>
            <Ionicons name="person" size={24} color={colors.Green} />
            <Input placeholder='Full Name' onChangeText={(text) => {
        setRegData({...regData, name: text})
      }}/>
        </View>
        <View style={styles.InputView}>
            <MaterialIcons name="email" size={24} color={colors.Green} />
            <Input placeholder='Your email' onChangeText={(text) => {
        setRegData({...regData, email: text})
      }} />
        </View>
        <View style={styles.InputView}>
            <FontAwesome name="mobile-phone" size={30} color={colors.Green} />
            <Input placeholder='Mobile number' onChangeText={(text) => {
        setRegData({...regData, phone: text})
      }} />
        </View>
        <View style={styles.InputView}>
            <FontAwesome name="lock" size={24} color={colors.Green} />
            <Input placeholder='password' secureTextEntry={true} onChangeText={(text) => {
        setRegData({...regData, password: text})
      }}/>
        </View>
        
        <View style={styles.InputView}>
            <FontAwesome name="lock" size={24} color={colors.Green} />
            <Input placeholder='Re-enter password' secureTextEntry={true} onChangeText={(text) => {
        setRegData({...regData, password2: text})
      }}/>
        </View>

        <Buttons title='Register' customStyles={styles.buttons} onPress={RegisterHandler} />
      </View>

      <View style={styles.SocialContainer}>
        <MainText preset='h4' style={{fontWeight: 'bold', color: colors.Green}}>OR</MainText>
        <MainText preset='h6'>Register via google account</MainText>
         <Image style={styles.loginimg} source={require("../../../../assets/google.png")} />
         <Pressable onPress={() => navigation.navigate('Login')}>
            <MainText preset='h5'>Already have an Account ? <MainText preset='h5' style={{fontWeight: 'bold', color: colors.Green}}>Login Now</MainText></MainText>
          </Pressable> 
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Register;

const styles = StyleSheet.create({
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