import { Dimensions, StyleSheet, Platform } from "react-native";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
   main: {

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      // height: "100%"
   },
   innerCover: {
      justifyContent: 'center',
      alignItems: 'center',

   },
   textCover: {
      width: wp('90%'),
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      paddingTop: 10,
   },
   wifiImg: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
   },

   bigText: {
      color: '#424242',
      fontSize: 22,
      fontFamily: "Urbanist-Medium",
      fontWeight: "400",
      letterSpacing: 0.1,
      
   },
   smText: {
      color: '#757575',
      fontSize: 16,
      fontFamily: "Urbanist-Regular",
      lineHeight: 24,
      fontWeight: "400",
      letterSpacing: 0.3,
      alignItems:'center',
      textAlign:'center',
      // paddingLeft:25,
      // paddingRight:25,
      paddingTop:10,
   },

   addressBtn2: {
      width: wp('80%'),
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 4,
      backgroundColor: '#3858CF',
      marginTop: 80,
      alignItems:'center',
      // width: wp('92%'),
      // color: '#000000',
      // textAlign: 'center',

      // marginHorizontal: wp('2%')

   },
   btnText:{
      color:'#fff',
      fontSize:16,
   },
   googleCover:{
      width:wp('100%'),
      alignItems:'center',
      marginBottom:20,
   },
   googleImg:{
      width:200,
      height:80,
   },
   descText:{
      fontSize:10,
      marginTop:5,
   }

});

export default styles