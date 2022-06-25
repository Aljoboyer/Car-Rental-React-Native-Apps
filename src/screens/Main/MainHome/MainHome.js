import { useQuery } from '@apollo/client';
import React from 'react';
import {TouchableOpacity, ImageBackground, View, FlatList, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainText from '../../../components/MainText/MainText';
import { GET_ALL_CARS } from '../../../MutationsAndQuery/Query/Querys';
import { colors } from '../../../theme/colors';
import { BRAND_LOGOS } from './BrandImg';
import { FontAwesome, AntDesign , MaterialIcons } from '@expo/vector-icons'; 
import HomeCar from '../../../components/HomeCar/HomeCar';
import { HomeCarstyles, Homestyles } from '../../../Styles/HomeStyle';


const MainHome = ({navigation}) => {
  const {data: cars} = useQuery(GET_ALL_CARS);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('BrandCar', {brand: item.brand})}>
        <Image style={Homestyles.BrandImg} source={item.img}/>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={require('../../../../assets/bgss.png')} resizeMode="cover" >
            <View style={Homestyles.HomeHeader}> 
                <View style={Homestyles.searchContainer}>
                  <TouchableOpacity onPress={() => navigation.navigate('ViewAllFilter', {name: 'Filter Car'})} style={Homestyles.searchBar}>
                    <AntDesign name="filter" size={30} color="white" />
                    <MainText preset='title2' style={{color: 'white', marginLeft: 15}}>Filter your car</MainText>
                  </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>

        <MainText preset='h3' style={Homestyles.brandTitle}>Find car by brand</MainText>
        <View style={Homestyles.brandContainer}>
          <FlatList
            data={BRAND_LOGOS}
            renderItem={renderItem}
            keyExtractor={item => item.index}
            horizontal
            showsHorizontalScrollIndicator={true}
          />
        </View>
        <View style={Homestyles.TitleContainer}>
            <MainText preset="h2" style={Homestyles.containerTitle}>Available car</MainText>
            <TouchableOpacity onPress={() => navigation.navigate('ViewAllFilter', {name: 'All Car Here'})} style={{flexDirection: 'row', justifyContent: 'center', alignItems:  'center'}}> 
              <MainText preset='title4' style={{ color: 'gray'}} >View All </MainText><MaterialIcons name="keyboard-arrow-right" size={28} color="gray" />
            </TouchableOpacity>
          </View>
          <View style={HomeCarstyles.carContainer}>
            <HomeCar cars={cars?.GetCars} navigation={navigation} horizontal={true}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MainHome;

