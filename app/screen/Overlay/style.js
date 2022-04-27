import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'

export default styles = StyleSheet.create({
    container: {
  
      // backgroundColor:'red',
      borderRadius: 8,
      alignItems:'center',
      height:120,
      justifyContent:'center',
      marginTop:1,
      paddingBottom: 5,
      
    },
    image: {
      width: 130,
      height: 100,
      resizeMode:'contain'
    },
    addStoreBottomSheet: {
      borderRadius: 60,
        overflow: "hidden"
  },
  scrollStyle:{
    borderRadius: 60,
  }

    
  })