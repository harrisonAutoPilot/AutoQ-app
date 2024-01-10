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
    backgroundColor:'#fafafa',
    marginBottom:3,
  },
  miniCover:{
width:wp('65%'),
flexDirection:'row',
justifyContent:'space-between',
alignItems:'center',
  },
  requestBtn:{
    paddingHorizontal:10,
    paddingVertical:2,
    // backgroundColor:'#000',
    borderRadius:6,
    borderWidth:1,
    borderColor:"#FFA500"
  },
  requestText:{
    fontSize: 9,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    color: "#FFA500",
    letterSpacing: 0.2,
    textTransform:'uppercase'
  },
  serviceText:{
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    color: "#000",
    letterSpacing: 0.2,
  },
  serviceDText:{
    fontSize: 10,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    color: "#bfbfbf",
    letterSpacing: 0.2,
    textTransform:'uppercase'
  },
  priceCover:{
    alignItems:'flex-start',
    width:100,
    marginTop:-5,
    marginLeft:10,
  },
  contentCover:{
width:wp('35%'),
alignSelf:'flex-start',
marginLeft:20,
  },

  calendarCover:{

  },
  calendarImg:{
    width:30,
    height:30,
    resizeMode:'contain',
   

  }
 
  });

export default styles;