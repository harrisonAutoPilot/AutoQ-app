import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  emptyCover: {
width:"100%",
height:hp('100%'),
flex:1,
alignSelf:'center',
alignItems:'center',
backgroundColor:'#fff',
  },
  imgCoverBg:{
marginTop:hp('20%')
  },
  emptyImg:{
    width:120,
    height:120,
    resizeMode:'contain'
  },
  emptyTextBg: {
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
  },
  emptyTextSm: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.2,
  },
})