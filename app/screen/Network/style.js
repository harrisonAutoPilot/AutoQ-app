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
      backgroundColor: '#DCDCDC',
      // height: "100%"
   },
   innerCover: {
      justifyContent: 'center',
      alignItems: 'center',

   },
   textCover: {
      width: wp('80%'),
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      paddingTop: 10,
   },
   wifiImg: {
      width: 100,
      height: 100,
      resizeMode: 'contain',
   },

   bigText: {
      color: '#424242',
      fontSize: 28,
      fontFamily: "Urbanist-Regular",
      fontWeight: "400",
      letterSpacing: 0.1,
      padding: 10,
   },
   smText: {
      color: '#757575',
      fontSize: 16,
      fontFamily: "Urbanist-Regular",
      lineHeight: 20,
      fontWeight: "400",
      letterSpacing: 0.3,
   },

   addressBtn2: {
      width: wp('80%'),
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 50,
      backgroundColor: '#3858CF',
      marginTop: 150,
      // width: wp('92%'),
      // color: '#000000',
      // textAlign: 'center',

      // marginHorizontal: wp('2%')

   },

});

export default styles