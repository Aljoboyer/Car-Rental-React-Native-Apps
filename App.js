import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View , ActivityIndicator} from 'react-native';
import { useFonts } from 'expo-font';
import MainText from './src/components/MainText/MainText';
import { colors } from './src/theme/colors';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/screens/Auth/Login/Login';
import Register from './src/screens/Auth/Registration/Register';
import {ApolloClient , ApolloProvider, InMemoryCache} from '@apollo/client';
import {createUploadLink} from 'apollo-upload-client';
import HomeRoute from './src/screens/Main/MainHome/HomeRoute';
import CarDetails from './src/screens/Main/CarDetails/CarDetails';
import BookingInfo from './src/screens/Main/BookingInfo/BookingInfo';
import DrivingLicense from './src/screens/Main/DrivingLicense/DrivingLicense';
import NidCard from './src/screens/Main/NidCard/NidCard';
import PaymentApp from './src/screens/Main/Payment/PaymentApp';
import Success from './src/screens/Main/Payment/Success/Success';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFirebase from './src/FirebaseSetup/FirebaseAuth';
import BookingDetails from './src/screens/Main/MyBooking/BookingDetails';
import EditProfile from './src/screens/Main/Profile/EditProfile';
import Faq from './src/screens/Main/About/Faq';
import ViewAllFilter from './src/screens/Main/ViewAllFilter/ViewAllFilter';
import BrandCar from './src/screens/Main/Brandcar/BrandCar';

const Stack = createNativeStackNavigator();

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    background: "white",
  }
}


export default function App() {
  const {user, loading} = useFirebase();

  const client = new ApolloClient({
    link: createUploadLink({
      uri: "http://192.168.10.106:4000/graphql"
    }),
    cache: new InMemoryCache(),
  })

  const [loaded] = useFonts({
    'RobotoSlab-Light': require('./assets/fonts/RobotoSlab-Light.ttf'),
    'RobotoSlab-Regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
    'RobotoSlab-Bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if(!loaded){
    return  (
      <SafeAreaView style={styles.LodingContainer}>
        <ActivityIndicator color="blue" size="large" />
      </SafeAreaView>
    )
  }
  if(loading){
    return  (
      <SafeAreaView style={styles.LodingContainer}>
        <ActivityIndicator color="blue" size="large" />
      </SafeAreaView>
    )
  }
  return (
    <ApolloProvider client={client}>
      <NavigationContainer theme={AppTheme}> 
        <Stack.Navigator initialRouteName='Login' >
          {
            user?.email ? <><Stack.Screen options={{headerShown: false}}  name='HomeRoute' component={HomeRoute}/>
            <Stack.Screen  options={{headerShown: false}}  name='CarDetails' component={CarDetails}/>
            <Stack.Screen  options={{headerShown: false}}  name='BookingInfo' component={BookingInfo}/>
            <Stack.Screen  options={{headerShown: false}}  name='DrivingLicense' component={DrivingLicense}/>
            <Stack.Screen  options={{headerShown: false}}  name='NidCard' component={NidCard}/>
            <Stack.Screen  options={{headerShown: false}}  name='PaymentApp' component={PaymentApp}/>
            <Stack.Screen  options={{headerShown: false}}  name='Success' component={Success}/>
            <Stack.Screen  options={{headerShown: false}}  name='BookingDetails' component={BookingDetails}/>
            <Stack.Screen  options={{headerShown: false}}  name='EditProfile' component={EditProfile}/>
            <Stack.Screen  options={{headerShown: false}}  name='Faq' component={Faq}/>
            <Stack.Screen  options={{headerShown: false}}  name='ViewAllFilter' component={ViewAllFilter}/>
            <Stack.Screen  options={{headerShown: false}}  name='BrandCar' component={BrandCar}/>
            </> : <><Stack.Screen options={{headerShown: false}}  name='Login' component={Login}/>
            <Stack.Screen options={{headerShown: false}}  name='Register' component={Register}/></> 
          }
        </Stack.Navigator> 
      </NavigationContainer>
    </ApolloProvider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  LodingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
