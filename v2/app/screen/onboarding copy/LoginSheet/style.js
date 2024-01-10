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
  startedButton:{
    width:wp("85%"),
    backgroundColor:"#9ACD32",
    borderWidth:0,
    borderColor:"#20B2AA",
    elevation:0,
    borderRadius:30,
    paddingVertical:18,
    paddingHorizontal:32,
    alignSelf:'center',
    alignItems:'center',
    marginVertical:10,
  },
  btnCover:{
width:wp('100%'),
flex:1,
padding:20,
justifyContent:'center'
  },
  applyText:{
    fontSize: 14,
    color: '#fff',
    fontFamily: "AnekLatin",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:4, 
  },
  startedText: {
    fontSize: 14,
    color: '#fff',
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  inputCover: {
    width: wp('100%'),
    paddingHorizontal:40,
    alignSelf:'center',
},
  inputContainer:{
      width:wp('100%'),
      paddingTop:10,
   alignSelf:'center',
      top:hp('5'),   
  },
  forget:{
width:wp('90%'),
flexDirection:'row',
justifyContent:'flex-end',
alignSelf:'center',
padding:20,
paddingVertical:10,
marginBottom:20,
  },
  forgetText:{
  color:'#1A87DD',
  fontSize: 14,
   fontFamily: "AnekLatin-SemiBold",
   lineHeight: 17,
   fontWeight:'400',
  },
  labelView: {
    // backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical:1,
    marginTop:10,
    zIndex: 2
},
label: {
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 18,
    color: "#000",
    fontWeight:'400',
    letterSpacing: 0.2,
},
pinInputView: {

  width: "90%",
  // flexWrap: "wrap",
  alignSelf:'center',
  alignItems:'center'
},
inputFieldStyle:{
  fontSize: 14,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 16,
  borderRadius:30,
  color: "#000",
  letterSpacing: 0.2,
  borderWidth:2,
  borderColor:"#000",
  width:wp('90%'),
  alignSelf:'center',
  paddingHorizontal:20,
  paddingVertical:Platform.OS === "android" ? 10 : 20,
 

},
showTextPin: {
  color: "#878787",
  fontSize: 14,
  marginTop: Platform.OS === "android" ? -32 : 5,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 16,
  letterSpacing: 0.2,
  fontWeight: "400",
  position:'absolute',
  zIndex:8,
   left:wp('75%'),
},
showCheck: {
  color: "#fff",
  backgroundColor:'#0F8D8F',
  borderRadius:50,
  padding:4,
  fontSize: 10,
  marginTop: Platform.OS === "android" ? -32 : 5,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 10,
  letterSpacing: 0.2,
  fontWeight: "400",
  position:'absolute',
  zIndex:8,
   left:wp('75%'),
},
errText:{
color: "red",
fontSize: 12,
fontFamily: "AnekLatin-SemiBold",
lineHeight: 16,
letterSpacing: 0.2,
fontWeight: "400"
},
failedResponseView: {
  marginTop: 10,
  borderWidth: 1,
  borderRadius: 8,
  paddingHorizontal: 5,
  backgroundColor: "red"
},

submit: {
  paddingVertical: 12,
  width:wp('80%'),
  backgroundColor: "#000",
  borderRadius:30,
  zIndex: 2,
},
forGetCover:{
  width:wp('100%'),
  marginTop:10,
  flexDirection:'row',
  alignSelf:'center',
  justifyContent:'center'
},
eyeCover:{
  position:'absolute',
  zIndex:9,
  marginTop:Platform.OS === 'ios' ? 25 : 15,
  right:wp('-2%')
},
greyText:{
  color: "#06353A",
  fontSize: 15,
  fontFamily: "AnekLatin-Regular",
  lineHeight: 18,
  letterSpacing: 0.2,
  fontWeight: "200"
  },
  colorText:{
    color: "#1A87DD",
    fontSize: 15,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "300"
  },
  checkView:{
    position:'absolute',
    zIndex:9,
    marginTop:45,
    right:wp('1%')
    },
   // this is for the select category
   renderItemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#00b300",
    borderRadius: 8,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#fff"
},
activeRenderItemContainer: {
    borderColor: "#00b300",
    backgroundColor: "#fff"
},
categoryTitleView: {
    width: "80%"
},
categoryTitle: {
    color: "#171B2C",
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.1,
    marginBottom: 4,
    textTransform:'uppercase'

},
categoryDesc: {
    color: "#000",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.25,

},
categoryTitleView: {
    width: "90%"
},
storeCover:{
    paddingVertical:10,
},
bioTitleText: {
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 24,
    letterSpacing: 0.2,
},
codeCover: {
    width: wp("27%"),
    alignItems:"flex-start",
    alignSelf: "center",
    marginTop:14,
    justifyContent: "center",
    marginRight: 10,
    padding:15,
    paddingVertical:17,
    borderWidth:2,
    borderRadius:6,
    borderColor: "#5A5D72"
  },
  fadeText:{
   fontSize: 16,
   fontFamily: "AnekLatin-Regular",
   lineHeight: 24,
   color: "rgba(69, 70, 79, 1)",
   letterSpacing: 0.1,  
  },


  bioTitleCover: {
    width: wp('100%'),
    padding:20,
},
imgCardCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    paddingVertical:25,
    width:wp('95%'),
    alignSelf:'center'
},
bottomLine:{
    width:wp('90%'),
    borderBottomColor:"rgba(121, 116, 126, 0.16)",
    borderBottomWidth:1,
},
leftCover:{
    flexDirection:'row',
    justifyContent:'center'
},
rightCover:{
    flexDirection:'row',
    justifyContent:'center'
},
});

export default styles