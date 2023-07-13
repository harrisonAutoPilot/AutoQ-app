import { Platform, StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
    },
    containerInner:{
    height:hp('90%'),
    // flex:1
    },
   titleCover:{
    width:"100%",
    alignSelf:'center',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start",
    padding:20,
    paddingVertical:10,
    backgroundColor:"#F2F0F4"
   },
   titleCoverImage:{
    width:"100%",
    alignSelf:'center',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"flex-start",
    padding:20,
    paddingVertical:10,
    backgroundColor:"#F2F0F4",
    marginTop:10,
   },
   titleText:{
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
   },
   formContainer:{
    width:"100%",
   },
   formFlexInside:{
    width:"100%",
    paddingHorizontal:20,
    zIndex:-2
   },

   // Google Search Field
   containerSearch: {
    borderWidth: 1.2,
    borderColor: '#5A5D72',
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 4,
    width: "100%",
    flex:0,
},
inputHolder: {
    paddingVertical: Platform.OS === "ios" ? 14 : 4,
    paddingHorizontal: 10,
    marginTop: 15,
    borderRadius: 5,
    width: "100%",
    alignSelf: 'center',
    borderColor: '#5A5D72',
    borderWidth: 1.2
},
getAddress:{
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "#3353CB",
    alignItems: "flex-start",
},
getAddressView:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,

},
labelTitleAddress: {
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#424242",
    letterSpacing: 0.5,
    paddingVertical: Platform.OS === "ios" ? 5:10,
    width: "70%"
},
getAddressText:{
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 16,
    color: "#fff",
    letterSpacing: 0.2,
},
countryCodeView: {
    marginBottom: 2,
    zIndex:-2
},
  addressFoundView:{
        alignSelf: "flex-end"
    },
googleContainer:{
    flex: 0,
    width: "95%",
    zIndex:9000,
},
labelView: {
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
    zIndex: 2
},
label: {
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
    color: "#5A5D72",
    letterSpacing: 0.2,
},
labelTitle: {
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#424242",
    letterSpacing: 0.5,
    paddingVertical: Platform.OS === "ios" ? 5:10
},
notFoundView:{
    paddingHorizontal: 10
},
verificationField:{
    borderBottomWidth: 1.2
},
bottomCover:{
width:"100%",
},
addBtn:{
    width:"85%",
    padding:13,
    borderWidth:1,
    borderStyle:"dashed",
    borderRadius:30,
    borderColor:"rgba(28, 27, 31, 0.16)",
    alignSelf:'center',
    marginVertical:15,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'center'
},
addText:{
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
    color: "#3353CB",
    letterSpacing: 0.2, 
    marginLeft:10,
},
photoContainer:{
    width:"100%",
    padding:20,
    paddingBottom:0,
    paddingHorizontal:15,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-between",

},
photoCo:{
    width:hp("13%"),
    height:110,
    borderRadius:6,
    marginBottom:10,
    marginHorizontal:5,
},
photoCover:{
width:hp("13%"),
height:110,
borderRadius:6,

},
cancelCover:{
position:'absolute',
right:-5,
top:-8
},
cancelImg:{
    width:20,
    height:20,
    resizeMode:'contain'
},
scrollStyle:{
flexGrow:1
},
submitBtnContainer:{
    marginBottom:20,
    width:"100%",
    paddingHorizontal:20,
    paddingVertical:10,
},
toastCover: {
    // position: 'absolute',
    bottom:Platform.OS === "android" ? hp('4%') : hp('3%'),
    alignSelf: 'center',
    width: wp('100%'),
    zIndex: 9000,
  },
  errView:{
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#BA1A1A",
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
},
errText:{
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    letterSpacing: 0.25,
    marginLeft: 13,
    color: "#fff"
},
successView:{
  paddingVertical: 14,
  paddingHorizontal: 16,
  backgroundColor: "#106D34",
  marginHorizontal: 16,
  borderRadius: 8,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.9,
  shadowRadius: 2,
  elevation: 2,
  flexDirection: "row",
  alignItems: "center",
  marginTop: 20
},
successText:{
  fontSize: 14,
  fontFamily: "AnekLatin-Regular",
  letterSpacing: 0.25,
  marginLeft: 13,
  color: "#fff"
},
  
//   the image and licence placeholder
imgCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
},
imgBox:{
    width:hp("13%"),
    height:110,
    borderRadius:6,
    backgroundColor:"#e6e6e6"
}

  

})

