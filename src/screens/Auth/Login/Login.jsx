import { StyleSheet, View, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import {Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome  } from '@expo/vector-icons'; 
import { colors } from '../../../theme/colors';
import Input from '../../../components/Input/Input';
import Buttons from '../../../components/Buttons/Buttons';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.LoginIntro}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="car-sports" size={150} color="white" />
          <Ionicons name="location-outline" size={70} color="white" />
        </View>
        <MainText preset='title1' style={{fontSize: 40, color: colors.White}}>Aj-CarRental</MainText>
      </View>
      
      <View style={styles.inputContainer}>
        <MainText style={{color: colors.Green, alignSelf: 'center', marginVertical: 20}} preset='h1'>Login-Here</MainText>
        <View style={styles.InputView}>
            <MaterialIcons name="email" size={24} color={colors.Green} />
            <Input placeholder='useremail' />
        </View>
        <View style={styles.InputView}>
            <FontAwesome name="lock" size={24} color={colors.Green} />
            <Input placeholder='password' secureTextEntry={true}/>
        </View>
        <Buttons title='Login' customStyles={styles.buttons} />
      </View>
      <View style={styles.SocialContainer}>
        <MainText preset='h4' style={{fontWeight: 'bold', color: colors.Green}}>OR</MainText>
        <MainText preset='h6'>Countinue via google account</MainText>
         <Image style={styles.loginimg} source={require("../../../../assets/google.png")} />
         <Pressable onPress={() => navigation.navigate('Register')}>
            <MainText preset='h5'>Don't have an Account ? <MainText preset='h5' style={{fontWeight: 'bold', color: colors.Green}}>Register Now</MainText></MainText>
          </Pressable> 
      </View>
    </SafeAreaView>
  );
}

export default Login;

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
  }
});