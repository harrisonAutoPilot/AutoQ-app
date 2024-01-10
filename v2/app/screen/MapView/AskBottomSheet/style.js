import {StyleSheet} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  imgCover:{
    width:wp('100%'),
    alignItems:'center',
    alignSelf:'center',
    paddingTop:20,
  },
  logImg:{
    width:80,
    height:80,
    resizeMode:'contain',
   
  },
  smLogImg:{
    width:30,
    height:30,
    resizeMode:'contain',
   
  },
  welcomeCover:{
    width:wp('100%'),
    padding:20,
  },
  smText:{
    fontSize: 14,
    color: '#212121',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  bgText:{
    fontSize: 24,
    color: '#212121',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "AnekLatin-SemiBold",
    lineHeight: 28,
    letterSpacing: 0.2,
  },
  touchCover:{
    width:wp('100%'),
    alignItems:'center',
    alignSelf:'center',
    padding:20,
    paddingTop:10,
  },
  getLocCover:{
    width:wp('80%'),
    flexDirection:'row',
    justifyContent:'space-around',
    padding:12,
    borderWidth:0,
    backgroundColor:'#fff',
    borderColor:"#212121",
    borderStyle:'solid',
    alignSelf:'center',
    marginBottom:10,
    borderRadius:30,
    elevation:4,
    shadowRadius: 5,
  },
  touchText:{
    fontSize: 14,
    color: '#212121',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    paddingVertical:5, 
  }
});

export default styles