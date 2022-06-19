import { useQuery } from '@apollo/client';
import React from 'react';
import {TouchableOpacity, ImageBackground, View, FlatList, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Car from '../../../components/Car/Car';
import MainText from '../../../components/MainText/MainText';
import { GET_ALL_CARS } from '../../../MutationsAndQuery/Query/Querys';
import { colors } from '../../../theme/colors';
import { BRAND_LOGOS } from './BrandImg';
import { FontAwesome, AntDesign  } from '@expo/vector-icons'; 


const MainHome = ({navigation}) => {
  const {data: cars} = useQuery(GET_ALL_CARS);

  const renderItem = ({ item }) => (
    <Pressable>
        <Image style={styles.BrandImg} source={item.img}/>
    </Pressable>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require('../../../../assets/bgss.png')} resizeMode="cover" >
            <View style={styles.HomeHeader}> 
                <View style={styles.searchContainer}>
                  <TouchableOpacity style={styles.searchBar}>
                    <AntDesign name="filter" size={30} color="white" />
                    <MainText preset='title2' style={{color: 'white', marginLeft: 15}}>Filter your car</MainText>
                  </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

        <MainText preset='h3' style={styles.brandTitle}>Find car by brand</MainText>
        <View style={styles.brandContainer}>
          <FlatList
            data={BRAND_LOGOS}
            renderItem={renderItem}
            keyExtractor={item => item.index}
            horizontal
            showsHorizontalScrollIndicator={true}
          />
        </View>
        <Car cars={cars} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainHome;

const styles = StyleSheet.create({
  BrandImg: {
    height: 80,
    width: 100,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  brandTitle:{
    color: colors.Green,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20
  },
  brandContainer:{
    paddingLeft: 5,
    paddingTop: 15
  },
  HomeHeader:{
    height: 250,
    justifyContent: 'center',
    alignItems: 'center'
   },
   searchBar: {
    width: 320,
    height: 60,
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 35
   },
   searchContainer:{
    width: 400,
    height: 250,
    borderColor: 'white',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "rgba(0, 0, 0, 0.429)",
   }
});