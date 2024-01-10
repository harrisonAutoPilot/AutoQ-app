import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topCover: {
    width: wp('100%'),
    height: hp('48%')
   },
  backCover:{
    width:50,
    height:50,
    borderRadius:100,
    backgroundColor:'#fff',
    position:'absolute',
    top:hp('4%'),
    justifyContent:'center',
    alignItems:'center',
    left:20,
    zIndex:900
  },

  changeStyle: {
    width: wp('100%'),
    height: 360,
    flexDirection: 'row',
    backgroundColor: '#fff',
    position: 'absolute',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    bottom: hp('0%'),
    zIndex: 9000,
    paddingRight: 30,
   
  },
  profileCirlcle:{
    width:wp('100%'),
    flexDirection:'row',
    justifyContent:'flex-start',
    paddingHorizontal:10,
    borderWidth:0,
    borderColor:"#fff",
    alignItems:'center',

  },
  BgName:{
    fontSize: 28,
    color: '#fff',
    fontFamily: 'AnekLatin-SemiBold',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
    marginLeft: 7,
  },
  BgRole:{
    fontSize: 16,
    color: '#fff',
    fontFamily: 'AnekLatin-SemiBold',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    marginLeft: 7,
  },
  BgNameB:{
    fontSize: 28,
    color: '#000',
    fontFamily: 'AnekLatin-SemiBold',
    letterSpacing: 0.2,
    textTransform: 'capitalize',
    marginLeft: 7,
  },
  BgRoleB:{
    fontSize: 16,
    color: '#000',
    fontFamily: 'AnekLatin-SemiBold',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    marginLeft: 7,
  },
  innerImg:{
    width:150,
    height:150,
    borderRadius:300,
    resizeMode:'cover',
    borderWidth:4,
    borderColor:"#fff"
  },
  changeStyleInner: {
    height: 60,
    width: wp('80%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  zoomCover:{
    width:40,
    height:40,
    borderRadius:100,
    backgroundColor:'#fff',
    position:'absolute',
    top:105,
    left:100,
    alignItems:'center',
    justifyContent:'center'
  },
  zoomImg:{
    width:25,
    height:25,
    // borderRadius:100,
    resizeMode: 'contain', 
  },
  introCover:{
  padding:15,
  paddingTop:8,
  },
  introCoverNew:{
    padding:15,
    paddingTop:5,
    paddingBottom:5,
    },

  jobCover:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  justifyContent:'center'
  },
  jobText:{
    fontSize: 14,
    color: '#000',
    fontFamily: 'AnekLatin-Regular',
    letterSpacing: 0.5,
    marginLeft:10,
  },
  reviewText:{
    fontSize: 14,
    color: '#000',
    fontFamily: 'AnekLatin-Regular',
    letterSpacing: 0.5,
    marginLeft:10,
  },
  introText:{
    fontSize: 16,
    color: '#000',
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  introTextSm:{
    fontSize: 12,
    color: '#000',
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
    letterSpacing: 0.5,
    textAlign:'center',
    marginTop:5,
    width:wp('70%'),
    alignSelf:'center'
  },
  introTextB:{
    fontSize: 16,
    color: '#000',
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    textTransform:'uppercase',
    textAlign:'center',
    letterSpacing: 0.5,
    marginTop:5,
    width:wp('70%'),
    alignSelf:'center'
  },
  statCover:{
    alignItems:'flex-start',
    paddingLeft:7
  },
  cardContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:20,
  },
  card:{
width:wp('28%'),
height:130,
borderRadius:9,
borderWidth:1,
borderColor:"#bfbfbf",
alignItems:'center',
paddingTop:20
  },
  btnContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    paddingHorizontal:30,
  },
  phoneImg:{
width:50,
height:50,

  },
  btnCover:{
    width:60,
    height:60,
  
  },
  btnCoverLg:{
flexDirection:'row',
justifyContent:'flex-start',
alignItems:'center',
width:190,
height:50,
borderRadius:60,
backgroundColor:'red',
// padding:3,
  },
  reportText:{
    fontSize: 12,
    color: '#fff',
    fontFamily: 'AnekLatin-SemiBold',
    letterSpacing: 0.2,
    textTransform: 'uppercase',
    marginLeft:5,
  },
  serviceText:{
    fontSize: 12,
    color: '#000',
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    letterSpacing: 0.2,
    textTransform: 'uppercase',
  },
  count:{
    fontSize: 20,
    color: '#000',
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    letterSpacing: 0.2,
    textTransform: 'capitalize',
    marginVertical:10,
  },
  serImg:{
width:30,
height:30,
  },
  backgroundImage: {
    width:wp('100%'),
    flex:1,
    resizeMode: 'cover', 
    alignItems:"center",
    justifyContent:'flex-end',
    paddingBottom:20,
  },
  smLocImg: {
    width: 35,
    height: 35,
    resizeMode: 'center',
  },
  changeText: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    letterSpacing: 0.2,
    textTransform: 'capitalize',
    marginLeft: 40,
  },

  circleCover: {
    position: 'absolute',
    width: 200,
    right: -110,
    top: hp('40%'),
  },
  subName: {
    fontSize: 12,
    color: '#757575',
    marginTop: 5,
  },

  sortCover: {
    borderWidth: 0,
    borderColor: '#f3f4f5',
    borderStyle: 'solid',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginRight: 5,
    paddingHorizontal:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  sortCoverSelected: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    borderWidth: 0,
    borderColor: '#fff',
    borderStyle: 'solid',
    marginRight: 5,
    elevation: 1,
    backgroundColor: '#9ACD32',
  },
  sortCover1: {
    borderWidth: 0,
    borderColor: '#f3f4f5',
    borderStyle: 'solid',
    borderRadius: 6,
    height: 180,
    width: 180,
    marginRight: 10,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#f5f5f5',
  },
  sortCoverSelected1: {
    borderWidth: 0,
    borderColor: '#f3f4f5',
    borderStyle: 'solid',
    borderRadius: 6,
    height: 180,
    width: 180,
    marginRight: 10,
    backgroundColor: '#000',
  },
  sortName: {
    padding: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: '#454545',
    fontFamily: 'AnekLatin-Regular',
  },
  sortNameSelected: {
    padding: 10,
    paddingVertical: 10,
    fontSize: 14,
    color: '#fff',
    fontFamily: 'AnekLatin-Regular',
  },

  layerTwo: {
    width: wp('98%'),
    marginBottom: 10,
    paddingHorizontal: 20,
   
  },
  brandImg: {
    width: 40,
    height: 40,
    paddingVertical: 8,
    marginLeft: 5,
    resizeMode:'contain'
  },
  brandImgSm: {
    width: 20,
    height: 20,
    paddingVertical: 5,
    marginTop:9,
    marginLeft: 8,
    resizeMode:'contain'
  },
  selectCover:{
width:'100%',
paddingHorizontal:20,
alignItems:'flex-start',
paddingBottom:10,
  },
  selectText:{
    fontSize: 12,
    color: '#757575',
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
    letterSpacing: 0.2,
    textTransform: 'capitalize',
  },
  getLocCover:{
    width:wp('88%'),
    flexDirection:'row',
    justifyContent:'flex-start',
    padding:10,
    paddingLeft:18,
    borderWidth:1,
    backgroundColor:'#FFF',
    borderColor:"#f5f5f5",
    borderStyle:'solid',
    alignSelf:'center',
    marginBottom:10,
    borderRadius:30,
    elevation:2,
    shadowRadius: 3,
  },
  touchText:{
    fontSize: 14,
    color: '#212121',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
    paddingVertical:5, 
    marginLeft:15,
  },
  smLogImg:{
    width:30,
    height:30,
    resizeMode:'contain',
   
  },
  welcomeCover:{
    width:wp('100%'),
    padding:20,
  },
  smText:{
    fontSize: 14,
    color: '#212121',
    fontFamily: Platform.OS === 'ios' ? "Arial Hebrew" : "AnekLatin-Regular",
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  bgText:{
    fontSize: 24,
    color: '#212121',
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
    letterSpacing: 0.2,
  },
  displayModal:{
    width:wp('90%'),
    padding:20,
    paddingVertical:10,
    backgroundColor:'#fff',
    borderRadius:10,
    position:'absolute',
    top:hp('42%'),
    alignSelf:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
    elevation:8
  },
  displayText:{
    fontSize: 18,
    color: '#212121',
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 22,
    letterSpacing: 0.2,
    marginTop:8,
    marginLeft:5
  },
  mdLogImg:{
    marginTop:5
  },
  titleStyle: {
    fontSize: 12,
    color:"#fff",
    fontFamily: "AnekLatin-Regular",
    textAlign: 'center',
    padding: 10,
  },
  swipeContainer:{
    alignSelf:'center',
    marginTop:30,
  },
  counterCover:{
    width:wp('100%'),
    padding:20,
    paddingVertical:15,
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  counterText:{
    fontSize: 16,
    color:"red",
    fontFamily: "AnekLatin-SemiBold",
    textAlign: 'center',
  },
  counterTextLn:{
    fontSize: 14,
    color:"gray",
    fontFamily: "AnekLatin-Regular",
    textAlign: 'center',
    marginTop:5
  },
  counterTextLnn:{
    fontSize: 10,
    color:"gray",
    fontFamily: "AnekLatin-Regular",
    textAlign: 'center',
    marginTop:5
  },
  tnText:{
    fontSize: 10,
    color:"#000",
    lineHeight:16,
    fontFamily: "AnekLatin-SemiBold",
    textAlign: 'center',
    width:200,
    alignSelf:'center',
    marginTop:10
  }
});

export default styles;
