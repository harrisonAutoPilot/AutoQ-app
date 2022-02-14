import { StyleSheet, Dimensions, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  //This is for the NavHeader it starts here
  navCover: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // padding: 15,
    backgroundColor: '#3858CF',
  },
  agentImg:{
    width:40,
    height:40,
    resizeMode:'contain'
  },
  storeCoverOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    paddingVertical: 10 
  },
  storeCoverTwo: {
    flexDirection: 'row',
    // paddingLeft: 15,
    backgroundColor: '#ffffff',
    alignItems: "center",
    paddingBottom: 16,

  },
  storeCoverOneImage: {
    marginRight: 15,
  },
  storeOuterCoverOne: {
    // paddingTop: 16,
    backgroundColor: '#ffffff',
  },
    storeOuterCoverTwo: {
     paddingLeft: 20,
     paddingRight: 20,
    backgroundColor: '#ffffff',
  },
  backImg: {
    width: 25,
    height: 25,
    marginLeft: Platform.OS === "ios" ? 18 : 0,
    marginBottom: 10,
  },
  waveImg:{
   position:'absolute',
   marginTop:12,
   width:300,
   height:140,
   marginLeft:3,  
  
  },
  backImg2: {
    width: 25,
    height: 25,
    marginLeft: Platform.OS === "ios" ? 18 : 0,
    marginBottom: 10,
  },
  storeImg: {
    width: 30,
    height: 30,
    marginRight: 10,

  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: Platform.OS === "ios" ? "600" : "600",
    letterSpacing: 0.1,
    textAlign: "center"
  },
  btnText2: {
    color: '#212121',
    fontSize: 18,
    fontFamily: "Urbanist-Regular",
    lineHeight: 24,
    fontWeight: "600",
    letterSpacing: 0.1,
    textAlign: "center"
  },
  titleCover: {
    width: wp('79%'),
    // justifyContent: 'flex-start',
    // marginTop: 2,
    // marginBottom: 20,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
    // marginLeft: 85
  },
  titleCover2: {
    width: wp('75%'),
    // justifyContent: 'flex-start',
    // marginTop: 2,
    marginBottom: 10,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
    // marginLeft: 85
  },
  storeTitle: {
    width: wp('45%'),
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  trackBtn: {
    borderWidth: 0,
    borderColor: '#757575',
    backgroundColor: '#3858CF',
    padding: 10,
    borderRadius: 50,
    width: wp('80%'),
    marginLeft: wp('7%'),
    color: '#000000',
    textAlign: 'center',

  },
  trackBtnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
    fontWeight: "600",
    letterSpacing: 0.1,
    textAlign: 'center',
  },
  bottomBtn: {
    backgroundColor: '#7CCF24',
    padding: 15,
    borderRadius: 50,
    width: wp('80%'),
    marginLeft: wp('7%'),
    color: '#000000',
    textAlign: 'center',

  },
  bottomBtnText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
    fontWeight: "600",
    letterSpacing: 0.1,
    textAlign: 'center',
  },
  successMsg:{
    backgroundColor: "rgba(67, 160, 71, 1)",
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8
  },
  successMsgTitle:{
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    textAlign: 'center',
  },
  successMsgImage: {
    marginRight: 24,
    width:33,
    height: 40
  },
  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238, 238, 238, 1)",
    paddingLeft: 19

},
iconView: {
  marginRight: 85
},
header:{
  height:150,
 borderRadius:20,
},
container:{
  borderRadius:20,
},
cardInnerCover:{
  width:wp('80%'),
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  padding:20,
},
cardTop:{
  width:wp('80%'),
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
},
walletTilte:{
fontSize: 14,
fontFamily: "Urbanist-Regular",
lineHeight: 16,
color: "#000",
letterSpacing: 0.2,
fontWeight: "400",
textTransform:'uppercase'

},
walletAmount:{
fontSize: 24,
fontFamily: "Urbanist-Regular",
lineHeight: 16,
color: "#000",
letterSpacing: 0.2,
fontWeight: "600",
textTransform:'uppercase',
paddingTop:15,
},
midBtn:{
  backgroundColor:'#000000',
  width:150,
  padding:10,
  position:'absolute',
  left: Platform.OS === 'ios' ? wp('20%') : wp('18%'),
  top:Platform.OS === 'ios' ?  hp('12%') : hp('13%'),
  borderRadius:40,
  flexDirection:'row',
  paddingLeft:20,
  // marginBottom:Platform.OS === 'ios' ? 20 : 10,

},
midBtnLoan:{
  backgroundColor:'#ffffff',
  width:150,
  padding:10,
  position:'absolute',
  left:wp('19.5%'),
  top:hp('13%'),
  borderRadius:40,
  flexDirection:'row',
  paddingLeft:20,

},
plusTitle:{
fontSize: 13,
fontFamily: "Urbanist-Regular",
lineHeight: 16,
color: "#fff",
letterSpacing: 0.2,
fontWeight: "600", 
paddingLeft:5,
},
plusTitleLoan:{
 fontSize: 13,
fontFamily: "Urbanist-Regular",
lineHeight: 16,
color: "#000",
letterSpacing: 0.2,
fontWeight: "600", 
paddingLeft:5, 
}


});
export default styles;