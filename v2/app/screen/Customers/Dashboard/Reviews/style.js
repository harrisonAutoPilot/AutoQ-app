import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 1 - 15;
const ITEM_HEIGHT = ITEM_WIDTH * 1.1;
const ITEM_HEIGHT2 = ITEM_WIDTH * 1.1;
const styles = StyleSheet.create({
  center: {
 flex:1,
width:wp('100%'),



  },
  
  serviceList:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    paddingHorizontal:15,
    alignItems:'center',
  },
  miniCover:{
width:wp('100%'),
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
paddingRight:30,
  },
  requestBtn:{
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:'#000',
    borderRadius:8,
  },
  requestText:{
    fontSize: 9,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    color: "#fff",
    letterSpacing: 0.2,
    fontWeight: "600",
  },
  nameCover:{
marginTop:-30,
alignItems:'center',
  },
    serviceDText:{
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    color: "#bfbfbf",
    letterSpacing: 0.2,
    fontWeight: "600",
  },
  serviceText:{
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    color: "#000",
    padding:5,
    letterSpacing: 0.2,
    textAlign:'center',
    fontWeight: "600",
  },
  serviceDText1:{
    fontSize: 10,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    color: "#ff9900",
    letterSpacing: 0.2,
    fontWeight: "400",
  },

  reviewCover:{
   width:wp('70%'),
   padding:8,
   borderTopRightRadius:30,
   borderBottomLeftRadius:30,
   borderBottomRightRadius:30,
   borderWidth:1,
   borderColor:'#f5f5f5',
   backgroundColor: '#fff',
   elevation:2,
  marginBottom:10,
  }
 
  });

export default styles;