import {TouchableOpacity,  View, StyleSheet } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import MainText from '../MainText/MainText';
import { colors } from '../../theme/colors';

const Header = ({backbtn, title = 'Car Details'}) => {
  const navigate = useNavigation()
  return (
    <View style={styles.container}>
       {
         backbtn &&  (
          <TouchableOpacity onPress={() => navigate.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>
         )
       }
        <MainText preset='title2' style={{color: 'white'}}> {title} </MainText>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: colors.Green,
        height: 80,

    }
})
