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
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  titleText: {
    fontSize: 16,
    color: '#3858CF',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 14,
    marginRight: 20,
    color: '#424242',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  delCover:{
    position:'absolute',
    right:wp('5%'),
    top:hp('-10%'),
    width:40,
    height:40,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
  },
  docCover:{
    width:wp('100%'),
    height:hp('90%'),
    alignItems:'center',
    alignSelf:'center',
  },
  certImg:{
    marginTop:45,
    width:wp("100%"),
    height:hp("90%"),
    resizeMode:'cover',
  },
  closeCover:{
    width:60,
    height:60,
    borderRadius:100,
    // backgroundColor:"#fff",
    position:'absolute',
    right:wp("35%"),
    alignSelf:'center',
    bottom:"1%"
  }
  
});

export default styles