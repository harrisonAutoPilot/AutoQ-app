import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const screenHeight = Dimensions.get('screen').height

export default styles = StyleSheet.create({
    mainBody: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#fff',
     
    },
 // the card
 walletContainer:{
    width:wp("90%"),
    height:90,
    borderRadius:10,
    backgroundColor:'red',
    alignSelf:'center',
    alignItems:'center',
    marginVertical:20,
    marginBottom:0,
    padding:20,
    justifyContent:'center'
},
walletTitle:{
    color: '#ffffff',
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
    letterSpacing: 0.2, 
    textTransform:'uppercase'
  
},
innerCover:{
alignItems:'center'
},
captionText:{
    color: 'rgba(255, 255, 255, 1)',
    fontSize:14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    letterSpacing: 0.2, 

},
miniCardContainer:{
width:wp('90%'),
flexDirection:"row",
justifyContent:'space-between',
alignSelf:'center',
padding:20,
},
rightWalletContainer:{
justifyContent:'center'
},
walletImg:{
width:100,
height:100,
resizeMode:'contain'
},
amountText:{
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 28,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 36,
    letterSpacing: 0.2, 
},
walletCaption:{
    color: '#ffffff',
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2, 
},
waveImg:{
    width:wp("80%"),
    height:99,
    resizeMode:'contain',
    position:'absolute'
},
middleContainer:{
    width:wp("90%"),
    alignSelf:'center',
    paddingHorizontal:5,
    flexDirection:"row",
    justifyContent:'space-between'
},
historyText:{
    color: '#212121',
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 24,
    letterSpacing: 0.3,   
},
sortText:{
    color: '#424242',
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
    letterSpacing: 0.3,   
},
reverseContainer:{
flexDirection:"row",
justifyContent:'center',
borderRadius:20,
borderWidth:1,
borderColor:"#E0E0E0",
paddingHorizontal:10,
paddingVertical:5,
backgroundColor:"#fafafa"
},
reverseImg:{
    width:15,
    height:15,
    resizeMode:"contain"
},
bottomContainer:{
    width:wp("100%"),
    height:hp("60%"),
    // backgroundColor:'red',
    marginTop:10,
}, 
subHeader: {
    // borderTopLeftRadius: 20,
    backgroundColor: '#e6e6e6',
    borderBottomWidth: 0,
    borderBottomColor: "rgba(0, 49, 157, 0.2)",
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf:'center'
    // padding:1,
},
activeSubHeader: {
     backgroundColor: "#3858CF",
    borderRadius: 20,
    width: "45%",
    // borderBottomWidth: 5,
    borderColor: '#469D00'

},
inActiveSubHeader: {
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
    width: "45%"
},
activeSubHeaderText: {
    fontSize: 11,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    color: "#fff",
    letterSpacing: 0.1,
    textAlign: "center"
},
inActiveSubHeaderText: {
    fontSize: 11,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    color: "rgba(66, 66, 66, 1)",
    letterSpacing: 0.1,
    textAlign: "center"
},
allOrderText: {
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
    color: "#757575",
    letterSpacing: 0.3,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: 'normal',
    marginLeft: 10,
    marginTop: 10,
},
miniSubHeader: {
    // paddingHorizontal: 46,
    paddingVertical: 10,
},  
})