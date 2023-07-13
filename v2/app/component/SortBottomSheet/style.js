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
    marginVertical:10,
  },


  applyBtn:{
    width:wp('85%'),
    position:'absolute',
    bottom:5,
    flexDirection:'row',
    justifyContent:'space-around',
    padding:12,
    borderWidth:0,
    backgroundColor:"#3353CB",
    borderStyle:'solid',
    alignSelf:'center',
    marginVertical:10,
    borderRadius:30,
  },
  resetText:{
    fontSize: 14,
    color: '#3353CB',
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  cardContainer:{
  width:wp('100%'),
  height:hp('25%')
  },
  caption:{
    fontSize: 16,
    color: '#000000',
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  applyText:{
    fontSize: 14,
    color: '#fff',
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:4, 
  },
  cardCover:{
    width:"100%",
    flexDirection:"row",
    alignSelf:'center',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    padding:20,
    paddingVertical:15,
  },
  cardCoverActive:{
    width:"100%",
    flexDirection:"row",
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding:20,
    paddingVertical:15,
    backgroundColor:"rgba(103, 80, 164, 0.08)"
  },
  listText:{
    fontSize: 14,
    color: '#1B1B1F',
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