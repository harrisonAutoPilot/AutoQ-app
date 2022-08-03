import { Dimensions, StyleSheet, Platform } from "react-native";
import {
   heightPercentageToDP as hp,
   widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
   main: {

      flex: 1,
      backgroundColor: '#fff'
   },
   headerTitle: {
      position: 'absolute',
      top: hp('2%'),
      right: wp('38%')
   },

   infoContainer: {
      // position:'absolute',
      width: wp('98%'),
      height: hp('27%'),
      marginLeft: wp('1%'),
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
   },
   avatarCover: {
      width: 120,
      height: 120,
      borderWidth: 8,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderRadius: 100,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',


   },
   linearView: {
      paddingVertical: 10,
      height: "100%",
      borderRadius: 100,
      width: 126,
      height: 126,
      marginRight: 16
   },
   agentNameText: {
      color: '#1C1B1F',
      fontSize: 22,
      fontFamily: "Urbanist-Regular",
      lineHeight: 28,
      fontWeight: "400",
      letterSpacing: 0.1,
      marginTop: 10,
   },
   agentIdText: {
      color: '#3858CF',
      fontSize: 16,
      fontFamily: "Urbanist-Regular",
      lineHeight: 24,
      fontWeight: "600",
      letterSpacing: 0.1,
      marginTop: 5,

   },
   agentImg: {
      width: 113,
      height: 113,
      borderRadius: 100,
   },
   bottomCover: {
      flexWrap: 'wrap',
      alignItems: 'center',
   },
   mainContainer: {
      flex: 1,
      flexWrap: 'wrap',
      flexDirection: 'row'
   },
   midCard: {
      width: wp('89%'),
      // height: hp('10%'),
      margin: 4,
      marginLeft: 10,
      borderRadius: 12,
      borderWidth: 1,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: "#EEEEEE",
      backgroundColor: '#fff',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
   },
   cover: {
      width: wp('90%'),
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      alignItems: "center"
   },
   miniCover: {
      width: wp('45%'),
      alignItems: 'flex-end'
   },
   phoneCover: {
      flexDirection: 'row',
   },
   descCover: {
      width: 250,
      paddingLeft: 10,
      paddingRight: 10,
   },
   phoneImg: {
      width: 30,
      height: 30,
      marginRight: 10,
      marginTop: -5,
   },
   whatsappImg: {

      marginRight: 10,
      marginTop: -5,
   },
   italic: {
      fontSize: 12,
      fontStyle: 'italic',
      color: 'gray',
   },
   cardsDown: {

      resizeMode: 'contain',
      height: hp('30%'),
      flexWrap: 'wrap',
      borderRadius: 1.5,
      borderBottomWidth: 0,
      borderColor: '#f2f2f2',
      flexDirection: 'column',
      alignItems: 'center',
   },

   elevation: {
      elevation: 0.5,
      // shadowColor: '#52006A',
   },
   phoneTextOne: {
      color: '#424242',
      fontSize: 16,
      fontFamily: "Urbanist-Regular",
      lineHeight: 24,
      fontWeight: "400",
      letterSpacing: 0.3,
   },
   phoneTitle: {
      color: '#424242',
      fontSize: 14,
      fontFamily: "Urbanist-Regular",
      lineHeight: 20,
      fontWeight: "400",
      letterSpacing: 0.3,
   },
   downTextOne: {
      color: '#757575',
      fontSize: 14,
      fontFamily: "Urbanist-Regular",
      lineHeight: 20,
      fontWeight: "400",
      letterSpacing: 0.1,
   },
   body: {
      backgroundColor: "#00319D",
      marginBottom: 5,
      paddingBottom: 5
   },
   headerText: {
      fontSize: 22,
      fontFamily: "Urbanist-Regular",
      lineHeight: 28,
      color: "rgba(33, 33, 33, 1)",
      letterSpacing: 0.2,
      fontWeight: "400",
      textAlign: "center"
   },
   textCover: {
      width: wp('100%'),
      alignItems: 'center',
      padding: 20,
      paddingTop: 2,

   },
   customerImg: {
      width: 200,
      height: 200,
      borderRadius: 100,
      // resizeMode:'contain',


   },
   bgText: {
      fontSize: 20,
      fontFamily: "Urbanist-SemiBold",
      lineHeight: 28,
      color: "rgba(33, 33, 33, 1)",
      letterSpacing: 0.2,
      textAlign: "center",
      marginBottom: 5
   },
   smText: {
      fontSize: 14,
      fontFamily: "Urbanist-Regular",
      lineHeight: 18,
      color: "gray",
      letterSpacing: 0.2,
      fontWeight: "400",
      textAlign: "center"
   },
   registerInputHolder: {
      borderWidth: 1,
      borderColor: "#BDBDBD",
      paddingVertical: Platform.OS === "ios" ? 20 : 5,
      paddingHorizontal: 10,
      marginTop: Dimensions.get("window").height / 30,
      marginBottom: Dimensions.get("window").height / 30,
      borderRadius: 5,
      minHeight: 150

      // flexWrap: "nowrap",
      // flexGrow: 1
   },
   inputContainer: {
      width: wp('100%'),
      paddingLeft: 20,
      paddingRight: 20,
   },
   productTitle: {
      flexWrap: "wrap",
      width: Dimensions.get("window").width - 65,
      fontSize: 14,
      fontFamily: "Urbanist-Regular",
      lineHeight: 18,
      color: "gray",
      letterSpacing: 0.2,
      fontWeight: "400",
      textAlignVertical: "top"
   },
   inputErrHolder: {
      borderColor: "red"
   },
   inputPinHolder: {
      marginTop: 25,
   },
   registerInputPinHolder: {
      marginTop: 10,
   },
   labelView: {
      position: "absolute",
      top: -10,
      left: 10,
      backgroundColor: "#fff",
      paddingHorizontal: 5,
      zIndex: 2
   },
   label: {
      fontSize: 12,
      fontFamily: "Urbanist-Medium",
      lineHeight: 16,
      color: "#212121",
      letterSpacing: 0.2
   },
   submit: {
      marginTop: 10,
      paddingVertical: 16,
      paddingHorizontal: 24,
      backgroundColor: "#3858CF",
      borderRadius: 100,
   }

});

export default styles