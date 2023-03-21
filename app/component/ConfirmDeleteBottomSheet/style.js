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
    paddingHorizontal:10,
    padding:5
  },
  trashCover:{
width:"100%",
alignSelf:'center',
alignItems:"center",
paddingVertical:10,
  },
  trashImg:{
width:50,
height:50,
resizeMode:"contain"
  },
  bgTitleText:{
    fontSize: 16,
    color: '#04393A',
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight: "600",
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
    marginTop:-30
  },
  smText:{
    fontSize: 14,
    color: '#475467',
    fontFamily: "Montserrat",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "600",
    textAlign:'center'
  },
  bgText:{
    fontSize: 24,
    color: '#212121',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
    lineHeight: 28,
    letterSpacing: 0.2,
    fontWeight: "800",
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
    borderWidth:1,
    borderColor:"#1D2939",
    borderStyle:'solid',
    alignSelf:'center',
    marginVertical:10,
    borderRadius:10,
  },
  btnContainer:{
flexDirection:'row',
justifyContent:"space-between",
width:"100%",
padding:10,
  },
  getLocCoverActive:{
    width:wp('43%'),
    flexDirection:'row',
    justifyContent:'space-around',
    padding:8,
    borderWidth:0,
    backgroundColor:"#00319D",
    borderStyle:'solid',
    alignSelf:'center',
    marginVertical:10,
    borderRadius:30,
  },
  getLocCoverActive1:{
    width:wp('43%'),
    flexDirection:'row',
    justifyContent:'space-around',
    padding:8,
    borderWidth:1,
    borderStyle:'solid',
    borderColor:"#bfbfbf",
    alignSelf:'center',
    marginVertical:10,
    borderRadius:30,
  },
  cardContainer:{
width:wp('100%'),
height:hp('25%')
  },
  touchText:{
    fontSize: 14,
    color: '#1D2939',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  touchTextActive:{
    fontSize: 14,
    color: '#fff',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  touchTextActive1:{
    fontSize: 14,
    color: '#454545',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  businessCard:{
flexDirection:'row',
justifyContent:'space-between',
width:wp('100%'),
backgroundColor:'#fff',
paddingHorizontal:20,
paddingVertical:15,
alignItems:'center'

  },
  nameText:{
    fontSize: 14,
    fontFamily: "Montserrat-SemiBold",
    lineHeight: 20,
    color: "#fff",
    letterSpacing: 0.3,
    fontWeight: "400",
    textTransform:'capitalize'
  },
  businessLogoCover:{
width:40,
height:40,
borderRadius:100,
borderWidth:0,
borderColor:"#000",
marginRight:15,
alignItems:'center',
justifyContent:'center'

  },
  addLogoCover:{
    width:40,
    height:40,
    borderRadius:100,
   backgroundColor:'#F2F4F7',
    marginRight:15,
    alignItems:'center',
    justifyContent:'center'
    
      },
  businessName:{
    fontSize: 14,
    color: '#1D2939',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "Urbanist-SemiBold",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "500",
    textTransform:'capitalize'
  },
  businessLogo:{
    width:40,
    height:40,
    borderRadius:100,
    
  },
  innerCard:{
flexDirection:'row',
alignItems:'center',
  },
  checkImg:{
    width:20,
    height:20,
    resizeMode:'contain'
  }
});

export default styles