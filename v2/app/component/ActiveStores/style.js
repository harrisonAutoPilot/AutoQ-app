import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  body5: {
       width: wp('100%'),
    height: hp('20%'),
    alignSelf: 'center',
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 1,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
    marginLeft: 10,
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
    paddingBottom:6,
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
  listCover:{
height:hp('50%'),
flexDirection:'column',
justifyContent:'space-between'
  },
  touchCover: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeContainer:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  badgeCover:{
    marginLeft:8,
    paddingVertical:4,
    paddingHorizontal:10,
    backgroundColor:"rgba(51, 83, 203, 1)",
    borderRadius:3
  },
  badgeText:{
    color: '#fff',
    fontSize: 8,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 14,
  },
  outsideModal: {
    top: hp('10%'),
  },
  activeRenderItemContainer:{
    backgroundColor: "#DDE1FF"
  },
  cardCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:'#f5f5f5',
  },
  bgText:{
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
  },
  leftCover:{
    width:wp('65%')
  },
  rightCover:{
    marginTop:10,
  },
  smText:{
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    marginTop:5
  },
  btnStyle:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:"rgba(51, 83, 203, 1)",
    alignSelf:"center",
    width:wp('90%'),
    padding:15,
    borderRadius:30,
    alignItems:'center',
    marginTop:20
  },
  btnText:{
    color: '#fff',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    marginLeft:8
  },
  // this is for the toast
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
inputContainer: {
  width: wp("90%"),
  alignSelf: 'center',
  flexDirection: 'row',
  marginBottom: 20
},

});

export default styles;
