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
  imageHolder: {
    // alignItems: "center",
    // justifyContent:'center',
    // height:hp('68%'),
    // width:wp('90%'),
  },

  titleText: {
    fontSize: 16,
    color: '#3858CF',
    marginTop: 10,
    fontFamily: "Urbanist-SemiBold",
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
    fontFamily: "Urbanist-Regular",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  delCover:{
    position:'absolute',
    right:wp('5%'),
    top:hp('-1%'),
    width:40,
    height:40,
    backgroundColor:'#f5f5f5',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
  },
  docCover:{
    width:wp('90%'),
    height:hp('65%'),
    alignItems:'center',
    alignSelf:'center',
    marginRight:10,
  },
  certImg:{
    marginTop:45,
    width:351,
    height:490,
    resizeMode:'cover',
    // alignSelf:'center'
  }
  
});

export default styles