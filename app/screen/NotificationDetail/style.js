import { Dimensions, StyleSheet, Platform } from "react-native";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
   main: {
      flex: 1,
      backgroundColor: '#ffffff',
   },
   body:{
backgroundColor:'#ffffff',
   },
   botCover: {
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingLeft:30,
      paddingTop:20,
   },
   lolaImg:{
      width:35,
      height:35,
   },
      userCover: {
      flexDirection:'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      paddingLeft:20,
      paddingTop:20,
   },
   descCover: {
      width: wp('100%'),
      paddingLeft:30,
      paddingRight:30,
      paddingTop:10,
      borderWidth:0,
      borderColor:'#212121',
      borderStyle:'solid',
      
   },

   botText: {
      color: '#3858CF',
      fontSize: 14,
      fontFamily: "Urbanist-Regular",
      fontWeight: "600",
      letterSpacing: 0.1,
      padding: 10,
   },
   nameText: {
      color: '#616161',
      fontSize: 16,
      fontFamily: "Urbanist-Regular",
      fontWeight: "600",
      letterSpacing: 0.1,
      padding: 10,
   },
   descText: {
      color: '#616161',
      fontSize: 16,
      fontFamily: "Urbanist-Regular",
      lineHeight: 24,
      fontWeight: "400",
      letterSpacing: 0.3,
   },

});

export default styles