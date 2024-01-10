import {StyleSheet} from "react-native";

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({

  padImg: {
    width: 80,
    height: 80,
    marginTop: -80,
    marginBottom:20,
    borderRadius:100,
   
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  body5: {
    backgroundColor: 'rgba(233, 235, 249, 1)',
    borderRadius: 10,
    paddingTop: 40,
    width:wp("100%"),
    padding:20,
    height:400,
    width:wp('100%'),
    // position:'absolute',
    alignSelf:'center',
    bottom:hp('-26%'),
 
  },
  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
  },

  titleText: {
    fontSize: 14,
    color: '#5f9a32',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.1,
    marginBottom: 5,
    lineHeight: 24,
    fontWeight:"600",
    textTransform:'uppercase',
    marginTop:-10,
  },
  reasonCover: {
    alignItems: 'center',
    paddingHorizontal: 13,
    marginTop:-10
  },
  reasonText1: {
    textAlign: 'center',
    fontSize: 13,
    marginRight: 20,
    color: '#000',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"400",
    marginBottom: 5
  },
  reasonText: {
    textAlign: 'center',
    fontSize: 12,
    marginRight: 20,
    color: '#000',
    marginTop: 10,
    fontFamily: "AnekLatin-SemiBold",
    letterSpacing: 0.25,
    fontStyle:'normal',
    fontWeight:"700",
    textTransform:'uppercase',
    marginBottom: 5
  },
  briefCover:{

  },

  btnCover:{
    width:wp('85%'),
    padding:13,
    backgroundColor:'#000',
    borderRadius:50,
    alignSelf:'center',
    marginVertical:22,
    alignItems:'center',
    marginTop:5,

},
btnCover1:{
  width:wp('35%'),
  padding:10,
  paddingVertical:6,
  backgroundColor: 'red',
  borderRadius:50,
  alignSelf:'center',
  marginVertical:22,
  alignItems:'center',
  marginTop:5,

},
btnCover11:{
  width:wp('35%'),
  padding:10,
  paddingVertical:6,
  backgroundColor: '#00b300',
  borderRadius:50,
  alignSelf:'center',
  marginVertical:22,
  alignItems:'center',
  marginTop:5,

},
btnText1:{
  fontSize: 12,
  fontFamily: "AnekLatin-Regular",
  lineHeight: 28,
  color: "#fff",
  letterSpacing: 0.2,
  fontWeight: "400",
  textAlign: "center"  
},
btnText:{
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 28,
    color: "#fff",
    letterSpacing: 0.2,
    fontWeight: "400",
    textAlign: "center"  
},
btnCoverWhite:{
    width:wp('85%'),
    padding:13,
    backgroundColor:'#5f9a32',
    borderRadius:50,
    alignSelf:'center',
    marginVertical:22,
    alignItems:'center',

},
topCover:{
flexDirection:"row",
width:wp('100%'),
// justifyContent:'space-around',
padding:10,
paddingLeft:25,
alignSelf:'flex-start',
},
imgCover:{
 width:90,
 height:90,
 borderWidth:1,
 borderColor:"#bfbfbf",
 borderRadius:100,
},
LawyerImg:{
  width:90,
  height:90,
resizeMode:'contain',
  borderRadius:100,
},
bioCover:{
marginLeft:10,

},
nameText:{
  fontSize: 14,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 28,
  color: "#000",
  letterSpacing: 0.2,
  fontWeight: "600",
  textAlign: "left" ,
  textTransform:'uppercase',
},
nameText1:{
  fontSize: 14,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 28,
  color: "#000",
  letterSpacing: 0.2,
  fontWeight: "600",
  textAlign:'left',
  textTransform:'uppercase',
},
priceText:{
  fontSize: 12,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 28,
  color: "#757575",
  letterSpacing: 0.2,
  fontWeight: "500",
  textAlign: "left" ,
  textTransform:'uppercase',
},
priceText1:{
  fontSize: 12,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 28,
  color: "#757575",
  letterSpacing: 0.2,
  fontWeight: "600",
  textAlign: "left" ,
  textTransform:'capitalize',
},
midTitle:{
  alignSelf:'center'
},
capCover:{

},
titleText1: {
  fontSize: 12,
  color: '#bfbfbf',
  marginTop: 10,
  fontFamily: "AnekLatin-SemiBold",
  letterSpacing: 0.1,
  marginBottom: 5,
  lineHeight: 24,
  fontWeight:"800",
  textTransform:'uppercase',
  marginTop:-10,
},
detailCover:{
  alignSelf:"center",
  
},
smBtnCover:{
  flexDirection:'row',
  justifyContent:'space-around'
},
reportCover:{
paddingHorizontal:3,
width:80,
paddingVertical:4,
borderWidth:1,
borderColor:'red',
borderRadius:4,
alignItems:'center',
marginTop:-25,
marginLeft:100,
},
reportText:{
  fontSize: 10,
  color: 'red',
  fontFamily: "AnekLatin-SemiBold",
  letterSpacing: 0.1,
  fontWeight:"400",
  textTransform:'uppercase'
}
});

export default styles