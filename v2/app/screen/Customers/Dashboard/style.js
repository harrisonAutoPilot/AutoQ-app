import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    alignSelf: 'center',
    backgroundColor:'#fff',
    paddingVertical:5,
  },
  leftNav: {
    width: wp('75%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rightNav: {
    width: wp('23%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    paddingRight: 20,
  },

  greetingText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(44, 47, 66, 1)',
    letterSpacing: 0.2,
  },
  nameText: {
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
  greetCover: {
    width: wp('60%'),
    alignItems: 'flex-start',
    textAlign: 'left',
  },


  greetingInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noteDot: {
    width: 6,
    height: 6,
    borderRadius: 20,
    backgroundColor: '#00b300',
    position: 'absolute',
    top: -2,
    right: -1,
  },
  countCover: {
    width: 15,
    height: 15,
    borderRadius: 40,
    backgroundColor: '#BA1A1A',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: -8,
    right: -3,
  },
  countText: {
    fontSize: 8,
    fontFamily: 'AnekLatin-Regular',
    color: '#fff',
    letterSpacing: 0.2,
  },
//   this is for the tab bar
subHeader:{
    width:wp('100%'),
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'center',
    paddingHorizontal:20,
    // paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
    backgroundColor:'#fff',
},
activeSubHeader:{
    width: "35%",
    borderBottomWidth: 4,
    borderColor: 'rgba(51, 83, 203, 1)',
    paddingBottom: 10,
    alignItems:"center",
},
inActiveSubHeader:{
    width: "35%",
    borderBottomWidth: 5,
    borderColor: 'transparent',
    paddingBottom: 10,
    alignItems:"center",
},
activeSubHeaderText:{
    fontSize: 12,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 16,
    color: 'rgba(51, 83, 203, 1)',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
},
inActiveSubHeaderText:{
    fontSize: 12,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    color: 'rgba(90, 93, 114, 1)',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
},
// this is for the search and filter
searchContainer:{
    width:wp('100%'),
    paddingHorizontal:15,
    paddingVertical:10,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:"#fff"
},
searchSection:{
backgroundColor:"#f5f5f5",
borderRadius:6,
justifyContent:'flex-start',
paddingHorizontal:10,
width:wp('67%'),
height:50,
flexDirection:'row',
borderWidth:1,
borderColor:"rgba(121, 116, 126, 0.12)"
},
searchIcon:{
marginRight:5,
marginTop:13,
},
inputField:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    letterSpacing: 0.25,
    marginBottom:Platform.OS === "android" ? 1 : 5,

},
filterCover:{
    backgroundColor:"#f5f5f5",
    borderRadius:6,
    width:wp('23%'),
    height:50,
    borderWidth:1,
borderColor:"rgba(121, 116, 126, 0.12)"
},
flexItems:{
flexDirection:'row',
justifyContent:'center',
padding:10,
alignItems:'center'
},
filterIcon:{
marginLeft:10,
},
filterCaption:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.1,
},
// this is for the cards
cardCover:{
    width:wp('100%'),
    padding:20,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#fff',
    marginTop:5,
},
customerName:{
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    color: 'rgba(27, 27, 31, 1)',
    letterSpacing: 0.2,
},
customerPhone:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.2,
},
customerAddress:{
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(69, 70, 79, 1)',
    letterSpacing: 0.2,
},
bottomCover:{
    backgroundColor:'#f5f5f5',
    width:wp('100%'),
   height:hp('75%')
},
descCover:{
width:wp('60%'),
},
customerPendingStatusCover:{
    paddingHorizontal:15,
    borderRadius:10,
    height:26,
    justifyContent:'center',
    backgroundColor:'rgba(227, 243, 255, 1)'
},
customerPendingText:{
    fontSize: 11,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    color: 'rgba(0, 30, 44, 1)',
    letterSpacing: 0.2,
},
// THIS IS WHERE IS START THE DESIGN FOR THE NEW CARDS
bottomCardInner:{
  flexDirection:'row',
  alignSelf:'center',
  justifyContent:'space-between',
  borderBottomWidth:1,
  paddingHorizontal:20,
  paddingVertical:15,
  borderBottomColor:"#f5f5f5"
},
cardBottom:{
  width:wp('95%'),
  borderRadius:10,
  borderWidth:1,
  alignSelf:'center',
  borderColor:"#f5f5f5",
  elevation:0,
  backgroundColor:"#FFFFFF",
  marginBottom:10,
  paddingRight:10,
},
adCard:{
  width:wp('95%'),
  borderRadius:10,
  height:100,
  elevation:1,
  backgroundColor:"#FFFFFF",
  borderWidth:1,
  alignSelf:'center',
  borderColor:"#f5f5f5",
  marginBottom:10,
  paddingRight:10,
  flexDirection:'row',
  justifyContent:'space-around'
},
adImg:{
width:180,
height:90,
alignSelf:'flex-start',
resizeMode:'contain',
justifyContent:'flex-start'

},
adContentCover:{
width:260,
padding:20,
},
adLgText:{
  fontSize: 36,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 42,
  color:'#000',
  letterSpacing: 0.1,
  textTransform:'uppercase'
},
adBgText:{
  fontSize: 24,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 32,
  color:'#000',
  letterSpacing: 0.1,
  textTransform:'uppercase'
},
adSmText:{
  fontSize: 10,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 20,
  color:'gray',
  letterSpacing: 0.1,
  textAlign:'left',
  // textTransform:'uppercase'
},
addBtnCover:{
flexDirection:'row',
justifyContent:'space-around'

},
bottomCardLeft:{
  width:wp('68%'),
},
barImg:{
  width: 78,
  height:78,
  resizeMode:'cover',
  alignSelf:"center",
  borderRadius:6,
},
barText:{
  fontSize: 14,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 20,
  color:'green',
  letterSpacing: 0.1,
  textTransform:'uppercase'
},
barTextRed:{
  fontSize: 14,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 20,
  color:'#454545',
  letterSpacing: 0.1,
  textTransform:'uppercase'
},
barTextSm:{
  fontSize: 14,
  fontFamily: 'AnekLatin-Regular',
  lineHeight: 20,
  color: 'rgba(66, 70, 89, 1)',
  letterSpacing: 0.1,
  paddingLeft:4
},
barTextSmSucStart:{
  fontSize: 10,
  fontFamily: 'AnekLatin-Regular',
  lineHeight: 16,
  color: '#ff9900',
  letterSpacing: 0.1,
  paddingLeft:4
},
barTextSmSuc:{
  fontSize: 10,
  fontFamily: 'AnekLatin-Regular',
  lineHeight: 16,
  color: '#00b300',
  letterSpacing: 0.1,
  paddingLeft:4
},
barTextSmRight:{
  fontSize: 14,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 16,
  color: '#00b300',
  letterSpacing: 0.1,
  paddingLeft:4,
  marginTop:3
},
barTextSmRed:{
  fontSize: 12,
  fontFamily: 'AnekLatin-Regular',
  lineHeight: 20,
  color: '#e6005c',
  letterSpacing: 0.1,
  paddingLeft:4
},
barTextSmPink:{
  fontSize: 12,
  fontFamily: 'AnekLatin-Regular',
  lineHeight: 20,
  color: '#ff9900',
  letterSpacing: 0.1,
  paddingLeft:4
},
imgCover:{
  width:85,
  height:85,
  justifyContent:'center',
  alignItems:"center",
  borderWidth:1,
  borderColor:"#bfbfbf",
  borderRadius:6,
  padding:10,
  marginLeft:20,
  marginRight:10
},
imgCoverPending:{
  width:85,
  height:85,
  justifyContent:'center',
  alignItems:"center",
  borderWidth:1,
  borderColor:"#ff9900",
  borderRadius:6,
  padding:10,
  marginLeft:20,
  marginRight:10
},
imgCoverComplete:{
  width:85,
  height:85,
  justifyContent:'center',
  alignItems:"center",
  borderWidth:1,
  borderColor:"#00b300",
  borderRadius:6,
  padding:10,
  marginLeft:20,
  marginRight:10
},


iconCover:{
flexDirection:'row',
width:80,
justifyContent:'space-between',
paddingTop:7,
paddingLeft:10,
},
iconCoverCan:{
  flexDirection:'row',
  justifyContent:'flex-start',
  paddingTop:7,
  },
  iconCoverCanPink:{
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingTop:2,
    },
    iconCoverCanSuc:{
      flexDirection:'row',
      justifyContent:'flex-start',
      paddingTop:2,
      marginLeft:10
      },
      iconCoverCanRight:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingTop:2,
        },
comText:{
  fontSize: 10,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 20,
  color: 'rgba(66, 70, 89, 1)',
  letterSpacing: 0.1, 
  textTransform:'uppercase',
  textAlign:'center'
},
comCount:{
  fontSize:18,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 20,
  color: 'rgba(66, 70, 89, 1)',
  letterSpacing: 0.1,
  textAlign:'center'
},
smImg:{
width:20,
height:20,
},
bottomView:{
  flexDirection:'row',
  justifyContent:'center',
  alignSelf:'center',
  alignItems:'center',
  paddingVertical:10,

},
bottomViewText:{
  fontSize: 14,
  fontFamily: 'AnekLatin-Medium',
  lineHeight: 20,
  color: '#3353CB',
  letterSpacing: 0.1, 
},
toggleCover:{
  width:wp('92%'),
  padding:12,
  paddingHorizontal:18,
  backgroundColor:"rgba(0, 0, 0, 0.05)",
  borderRadius:30,
  flexDirection:'row',
  justifyContent:'space-between',
  alignSelf:'center',
},
toggleText:{
  fontSize: 16,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 24,
  color: 'rgba(27, 27, 31, 1)',
  letterSpacing: 0.1,
},
toggleTextOff:{
  fontSize: 16,
  fontFamily: 'AnekLatin-SemiBold',
  lineHeight: 24,
  color: '#bfbfbf',
  letterSpacing: 0.1,
}

})