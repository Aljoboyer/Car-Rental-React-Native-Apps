import { Image, View } from "react-native";
import { Loginstyles } from "../../Styles/AuthStyle";
import MainText from "../MainText/MainText";
import {Ionicons, MaterialCommunityIcons, MaterialIcons, FontAwesome  } from '@expo/vector-icons'; 
import { colors } from "../../theme/colors";

export const SliderrenderItem = ({ item }) => {
    return (
      <View style={{backgroundColor: item.backgroundColor , flex: 1,  justifyContent: 'center', alignItems: 'center'}}>
         <Image source={item?.image} style={{width: 200, height: item.height}} />
         <MainText preset='title1' style={{fontSize: 40, color: colors.Green}}>{item?.title1}</MainText>
        <View style={Loginstyles.iconContainer}>
          <MaterialCommunityIcons name={item?.icon1} size={150} color="white" />
          <Ionicons name={item?.icon2} size={70} color="white" />
        </View>
         <MainText preset='title1' style={{fontSize: 40, color: colors.White}}>{item?.title}</MainText>
      </View> 
    );
  }