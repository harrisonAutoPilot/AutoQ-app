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
    marginVertical:10,
  },


  applyBtn:{
    width:wp('85%'),
    position:'absolute',
    bottom:5,
    flexDirection:'row',
    justifyContent:'space-around',
    padding:12,
    borderWidth:0,
    backgroundColor:"#3353CB",
    borderStyle:'solid',
    alignSelf:'center',
    marginVertical:10,
    borderRadius:30,
  },
  resetText:{
    fontSize: 14,
    color: '#3353CB',
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:5, 
  },
  cardContainer:{
  width:wp('100%'),
  flexGrow:1,
  alignItems:'center',
  paddingBottom:20,
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
  applyText:{
    fontSize: 14,
    color: '#fff',
    fontFamily: "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    fontWeight: "500", 
    paddingVertical:4, 
  },
  cardCover:{
    width:"100%",
    flexDirection:"row",
    alignSelf:'center',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    padding:20,
    paddingVertical:15,
  },
  cardCoverActive:{
    width:"100%",
    flexDirection:"row",
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'flex-start',
    padding:20,
    paddingVertical:15,
    backgroundColor:"rgba(103, 80, 164, 0.08)"
  },
  listText:{
    fontSize: 18,
    color: '#1B1B1F',
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
    letterSpacing: 0.2,

  },
  btnCover:{
    paddingHorizontal:20,
    marginTop:20,
  },

  card:{
    width:175,
    height:155,
    borderRadius:8,
    borderWidth:1,
    borderColor:"#bfbfbf",
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
  },
  imageStyle:{
    width:100,
    height:100,
    resizeMode:'contain'
  },
  inputStyle:{
    width:wp('100%'),
    color: "#5A5D72",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 18,
    marginLeft:5,
},
  inputCover:{
    width:"90%",
    alignSelf:"center",
    flexDirection:"row",
    paddingHorizontal:8,
    paddingVertical:2,
    borderWidth:1,
    borderColor:"rgba(121, 116, 126, 0.12)",
    borderRadius:8,
    backgroundColor:"rgba(121, 116, 126, 0.08)",
    height:45,
    marginTop:8,
    marginBottom:20,
    alignItems: "center"
  },
  searchIcon:{
    marginTop:Platform.OS === "android" ? 2 : 4,
    paddingLeft:10,
  },
  renderItemContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#C2C5DD",
    borderRadius: 8,
    width:wp('40%'),
    height:155,
    borderRadius:8,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
    alignSelf:'center',
},
activeRenderItemContainer: {
    borderColor: "#9ACD32",
    backgroundColor: "#f5f5f5"

},
  
});

export default styles