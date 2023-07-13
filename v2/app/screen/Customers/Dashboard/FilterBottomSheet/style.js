import {StyleSheet} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  bgTitleCover:{
    width:wp('100%'),
    alignSelf:'center',
    alignItems:'center',
    paddingHorizontal:20,
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5,
  },



  applyCover:{
    width:wp('100%'),
    paddingHorizontal:20,
    paddingVertical:20,
   
  },
  resetText:{
    fontSize: 14,
    color: 'rgba(51, 83, 203, 1)',
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    letterSpacing: 0.2, 
    paddingVertical:5, 
  },
  cardContainer:{
  width:wp('100%'),
  flexGrow:1,
  // height:hp('25%')
  },
  caption:{
    fontSize: 22,
    color: 'rgba(27, 27, 31, 1)',
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  applyText:{
    fontSize: 14,
    color: '#fff',
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:4, 
  },
  cardCover:{
    width:"100%",
    flexDirection:"row",
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding:25,
    paddingVertical:10,
  },
  cardCoverActive:{
    width:"100%",
    flexDirection:"row",
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding:25,
    paddingVertical:10,
    // backgroundColor:"rgba(103, 80, 164, 0.08)"
  },
  listText:{
    fontSize: 14,
    color: 'rgba(69, 70, 79, 1)',
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
  },
  btnCover:{
    paddingHorizontal:20,
    marginTop:20,
  }

  
});

export default styles