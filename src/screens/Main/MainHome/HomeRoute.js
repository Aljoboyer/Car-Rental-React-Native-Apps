import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome, Entypo, MaterialIcons , Ionicons, Feather} from '@expo/vector-icons'; 
import Profile from '../Profile/Profile';
import MyBooking from '../MyBooking/MyBooking';
import MainHome from './MainHome';
import { colors } from '../../../theme/colors';

const Tab = createBottomTabNavigator();

const HomeRoute = () => {
  return (
   <View style={styles.TabStyle}>
      <Tab.Navigator
  
      initialRouteName='Home'
      screenOptions={({route}) => ({

      tabBarIcon: ({focused, size, color}) => {

      if(route.name === 'MainHome')
      {  
          size = focused ? 34 : 24;
          color = focused ? '#ffff' : 'gray' ;
          return(
          <FontAwesome  name="home" size={size} color={color} />
          )
      }
      else if(route.name === 'MyBooking')
      {
          size = focused ? 34 : 24;
          color = focused ? '#ffff' : 'gray';
          return(
              <MaterialIcons name="book-online" size={size} color={color} />
              )
      }

      else if(route.name === 'Profile')
      {
          size = focused ? 30 : 24;
          color = focused ? '#ffff' : 'gray' ;
          return(
          <MaterialIcons name="account-circle" size={size} color={color} />
          )
      }
    }
  })}
  >
        <Tab.Screen  options={{
          tabBarLabelStyle: {color: '#ffff'},
          header: () => null
        }} name="MainHome" component={MainHome}/>
        <Tab.Screen  options={{
          tabBarLabelStyle: {color: '#ffff'},
          header: () => null
        }} name="MyBooking" component={MyBooking}/>
        <Tab.Screen  options={{
          tabBarLabelStyle: {color: '#ffff'},
          header: () => null
        }} name="Profile" component={Profile}/>
      </Tab.Navigator>
   </View>
  );
}

export default HomeRoute;

const styles = StyleSheet.create({
  TabStyle: {
    backgroundColor: colors.Green,
    flex: 1,
    paddingBottom: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
});