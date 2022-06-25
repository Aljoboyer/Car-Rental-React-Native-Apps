import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const Homestyles = StyleSheet.create({
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
     },
     containerTitle:{
      paddingLeft: 20,
      color: colors.Green,
    },
    TitleContainer:{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      paddingRight: 10, 
      paddingBottom: 10, 
      alignItems: 'center',
      paddingTop: 40
    }
});

export const HomeCarstyles = StyleSheet.create({
    carContainer:{
      paddingTop: 20,
      paddingBottom: 15
    },
      CarImg: {
        height: 200,
        width: 300,
        marginHorizontal: 10,
        borderRadius: 10,
      },
      buttons:{
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: 120,
        
      },
      FlexContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 5
      },
      CarName: {
        fontWeight: 'bold',
        paddingLeft: 5,
        color: colors.Green
      },
      carText:{
        fontSize: 15,
        color: 'gray',
        fontWeight: 'bold',
      },
      carItem:{
        paddingHorizontal: 5,
        marginHorizontal: 10
      },
      InfoContianer:{
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 5
      },
});

export const ViewAllFilterStyles = StyleSheet.create({
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 5
  },
  inputs:{
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: 150,
    height: 50,
    fontSize: 16
  },
  filterTitle: {
    color: 'gray',
    paddingLeft: 25,
    paddingTop: 10
  },
  seatInput:{
    paddingLeft: 25,
    paddingTop: 20,
  },
  filterTitle2:{
    color: 'gray',
    paddingTop: 10
  },
  filterBtn:{
    width: 200,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15
  },
  mainContainer:{
    paddingBottom: 40
  }
});