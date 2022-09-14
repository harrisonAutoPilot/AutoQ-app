import {StyleSheet} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({

  padImg: {
    width: 40,
    height: 40,
    marginTop: 5,
    marginBottom:20,
   
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  body5: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 5,
    paddingBottom:20,
    width:wp('100%'),
    height:Platform.OS === "android" ? hp('25%') : hp('30%'),
    alignSelf:'center',
    bottom:hp("-40%") ,
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 18,
    color: '#212121',
    marginTop: 10,
    fontFamily: "Urbanist-Regular",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
    marginTop:-10,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 14,
    marginRight: 20,
    color: '#424242',
    marginTop: 10,
    fontFamily: "Urbanist-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  btnContainer:{
    width:wp('90%'),
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'flex-end',
    borderTopWidth:1,
    borderColor:"#EEEEEE",
    paddingHorizontal:10,
    paddingVertical:5,
    marginTop:10,
  },
  cancelText:{
    fontSize: 14,
    marginRight: 20,
    color: '#3858CF',
    marginTop: 10,
    fontFamily: "Urbanist-SemiBold",
    letterSpacing: 0.25
  },
  confirmText:{
    fontSize: 14,
    marginRight: 20,
    color: '#3858CF',
    marginTop: 10,
    fontFamily: "Urbanist-SemiBold",
    letterSpacing: 0.25
  }

});

export default styles