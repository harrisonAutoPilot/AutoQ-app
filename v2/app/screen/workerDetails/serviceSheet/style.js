import {StyleSheet, Dimensions, Platform} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  sheetContainer: {
    width: wp('100%'),
    padding: 20,
    paddingTop:15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  topCover: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    width: '100%',
    alignSelf: 'center',
    height: '83%',
  },
  signupTitle: {
    color: '#171B2C',
    fontSize: 24,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 32,
    marginBottom: 2,
  },
  signupDesc: {
    color: '#5A5D72',
    fontSize: 12,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  signupMiniTitleContainer: {
    width:'100%',
    marginBottom: 12,
    alignItems:'flex-start'
  },


// this is for the search style
inputStyle:{
  width:wp('100%'),
  color: "#5A5D72",
  fontSize: 14,
  fontFamily: "AnekLatin-Medium",
  lineHeight: 18,
  marginLeft:5,
},
inputCover:{
  width:"100%",
  alignSelf:"center",
  flexDirection:"row",
  paddingHorizontal:8,
  paddingVertical:2,
  borderWidth:1,
  borderColor: "#C2C5DD",
  borderRadius:8,
  // backgroundColor:"rgba(121, 116, 126, 0.08)",
  height:45,
  marginBottom:15,
  alignItems: "center"
},
searchIcon:{
  marginTop:Platform.OS === "android" ? 2 : 4,
  paddingLeft:10,
},
listCover:{
height:hp('50%'),
flexDirection:'column',
justifyContent:'space-between'
},


  // Flatlist Items
listContainer: {
  height:hp('40%'),
  width:wp('90%'),
  alignSelf:'center',
  flexDirection:'column',
  justifyContent:'space-between',

},
categoryTitle: {
  color: "#171B2C",
  fontSize: 14,
  fontFamily: "AnekLatin-SemiBold",
  lineHeight: 20,
  letterSpacing: 0.25,
  marginBottom: 4

},
categoryDesc: {
  color: "#5A5D72",
  fontSize: 12,
  fontFamily: "AnekLatin-Regular",
  lineHeight: 18,
  letterSpacing: 0.25,

},
categoryTitleView: {
  width: "80%"

},
renderItemContainer: {
  marginBottom: 16,
  borderWidth: 1,
  borderColor: "#C2C5DD",
  borderRadius: 8,
  padding: 14,
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor:"#fff"
},
activeRenderItemContainer: {
  borderColor: "#9ACD32",
  backgroundColor: "#f5f5f5"

},
});

export default styles;
