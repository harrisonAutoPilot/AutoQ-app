import {StyleSheet, Dimensions} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 20,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight:"400",
    textAlign: "center",
    
  },
  mainContainer: {
    paddingBottom: 20,
    width: wp('100%'),
    // alignSelf:'center'
   
},
  body5: {
    backgroundColor: 'rgba(233, 235, 249, 1)',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom:20,
   
  },

  imageHolder: {
    alignItems: "center",
    justifyContent:'center',
    alignSelf:'center',
 
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
  colorInfo: {
    width: wp('80%'),
    flexDirection: 'row',
    padding: 14,
    backgroundColor: 'rgba(56, 88, 207, 0.16)',
    justifyContent: 'space-between',
    borderRadius: 10,
    alignSelf: 'center'
},
iconInfo: {
    marginRight: 10,
    marginTop: 5,
},
smTitleCover:{
  flexDirection:'row',
justifyContent:'flex-start',
width:wp('80%'),
alignSelf:'center'
},
controlCover:{
flexDirection:'row',
borderTopWidth:1,
borderColor:'#DCDCDC',
justifyContent:'flex-end',
borderStyle:'solid',
alignItems:'center',
 width:wp('90%'),
 paddingLeft:20,
 paddingRight:40,
marginBottom:-10,
alignSelf:'center',
},
cancelBtn:{
paddingTop:20,
marginLeft:30,

},
confirmText:{
  fontFamily: "Urbanist",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#3858CF",
  fontWeight:'600',
},
cancelText:{
  fontFamily: "Urbanist",
  fontSize: 14,
  lineHeight: 20,
  letterSpacing: 0.1,
  color: "#616161",
  fontWeight:'600',
},
smTitle:{
  fontFamily: "Urbanist",
  fontSize: 16,
  lineHeight: 24,
  letterSpacing: 0.2,
  color: "#1C1B1F",
  fontWeight:'400',
  paddingBottom:15,
  paddingLeft:5,
  
},
colorInfoText: {
    fontFamily: "Urbanist-SemiBold",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
    color: "#00319D",
    width: 270,
    flexWrap: 'wrap',
    flex: 1,

},
activeCover: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  width: wp('80%'),
  alignItems: 'flex-start',
  paddingLeft: 15,
  paddingTop:0,
  
  // alignSelf:'center',
 
},
optionView: {
  flexDirection: "row",
  borderRadius: 8,
  borderWidth: 0,
  borderColor: "#f0f0f5",
  paddingTop:5,
  paddingBottom:5,
  padding:20,
  justifyContent:'space-between'
  

},
optionIconView: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionIconView2: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionTextView: {
  marginLeft: 0,
  paddingTop: 5,
  width: "60%",
  color: '#3858CF'
},
optionIconView2: {
  width: 24,
  borderRadius: 44,
  justifyContent: "flex-start"
},
optionText: {
  fontFamily: "Urbanist-Medium",
  fontSize: 14,
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#3858CF",
  textTransform: "capitalize",
 
},
optionTextCover:{
   marginLeft:5,
  width:wp('60%'),
  
 
},
optionText2: {
  fontFamily: "Urbanist-Regular",
  fontSize: 14,
  lineHeight: 24,
  letterSpacing: 0.3,
  color: "#616161",
  textTransform: "capitalize",
 
},
optionMiniTextView: {
  justifyContent: "center",
  paddingTop: 5,

},
itemCover:{
  height:hp('28%'),
},
iconCircle: {
  borderColor: "#3858CF",
  borderWidth: 2,
  width: 20,
  height: 20,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
 
},
iconCircle2: {
  borderColor: "#BDBDBD",
  borderWidth: 2,
  width: 20,
  height: 20,
  borderRadius: 15,
  alignSelf: "center",
  justifyContent: "center",
  
  
},
icon: {
  alignSelf: "center"
},
//THIS IS FOR THE PLACEHOLDER LOADER
iconCircleP: {
  backgroundColor: "#BDBDBD",
  borderWidth: 0,
  width: 25,
  height: 25,
  borderRadius: 20,
  alignSelf: "center",
  justifyContent: "center",
},
optionTextP: {
width:80,
height:15,
backgroundColor:'#bfbfbf',
borderRadius:20,
marginTop:5,
marginBottom:5,
},
optionTextPL: {
  width:150,
  height:15,
  backgroundColor:'#bfbfbf',
  borderRadius:20,
  marginTop:5,
  marginBottom:5,
},
  
});

export default styles