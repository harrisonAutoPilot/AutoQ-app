import {StyleSheet, Dimensions, Platform} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: '100%',
    alignSelf: 'center',
  },
  mainContainer: {
  //  height:"90%",
    width: wp('100%'),
    alignSelf: 'center',
  },
  topNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    alignSelf: 'center',
    marginVertical:10,
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
  profileImgCover: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 100,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  greetingText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    color: 'rgba(44, 47, 66, 1)',
    letterSpacing: 0.2,
  },
  nameText: {
    fontSize: 20,
    fontFamily: 'AnekLatin-Medium',
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
  userImg: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  verImg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 30,
    position: 'absolute',
    right: -7,
    top: 2,
  },
  sunImg: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginLeft: 5,
    marginTop: 5,
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
  middleContainer: {
    width: wp('100%'),
    height:"100%",
    padding: 20,
    justifyContent: 'flex-start',
  },
  innerCard: {
    width: '48%',
    height: hp('29%'),
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth:1,
     borderColor:"#bfbfbf",
    elevation:2,
    padding: 10,
    marginBottom: 20,
  },
  innerCardTwo: {
    width: '48%',
    height: hp('29%'),
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:"#bfbfbf",
    elevation:2,
    padding: 10,
    marginBottom: 20,
  },
  innerCardThree: {
    width: '48%',
    height: hp('29%'),
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth:1,
     borderColor:"#bfbfbf",
    elevation:2,
    padding: 10,
    marginBottom: 20,
  },
  innerCardFour: {
    width: '48%',
    height: hp('29%'),
    borderRadius: 10,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:"#bfbfbf",
    elevation:2,
    padding: 10,
    marginBottom: 20,
  },
  waveImg:{
    width: wp('41%'),
    height: hp('25%'),
    resizeMode: 'cover',
    position: 'absolute',
    alignSelf:'center',
    top:1,
  },
  waveImg1: {
    width: '100%',
    height: hp('30%'),
    position: 'absolute',
    resizeMode: 'contain',
    right: 3,
    top: 33,
  },

  smIconImg: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginTop: 10,
  },
  smcon:{
    width: 25,
    height: 25,
    marginTop: 10, 
  },
  smEye: {
    marginRight:10
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberText: {
    fontSize: 32,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 40,
    color: '#454545',
    textTransform: 'uppercase',
  },
  captionText: {
    fontSize: 16,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 24,
    color: '#000',
    textTransform: 'uppercase',
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
  cardBottomBlack:{
    width:wp('95%'),
    borderRadius:10,
    borderWidth:1,
    alignSelf:'center',
    borderColor:"#000",
    elevation:2,
    backgroundColor:"#FFFFFF",
    marginBottom:10,
  },
  bottomCardInner:{
    flexDirection:'row',
    alignSelf:'center',
    justifyContent:'space-between',
    borderBottomWidth:1,
    paddingHorizontal:20,
    paddingVertical:15,
    borderBottomColor:"#f5f5f5"
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

  getBtn:{
    paddingVertical:4,
    paddingHorizontal:8,
    width:60,
    backgroundColor:'blue',
    borderRadius:40,
    alignItems:'center',
    justifyContent:'center'
  },
  getText:{
    fontSize: 8,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 10,
    color:'#fff',
    letterSpacing: 0.1,
    textTransform:'uppercase'
  },
  bottomCardLeft:{
    width:wp('68%'),
  },
  barImg:{
    width: 80,
    height:80,
    resizeMode:'cover',
    alignSelf:"flex-start",
    verticalAlign:'top',
    marginRight:10,
    borderRadius:100,
  },
  barText:{
    fontSize: 14,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 20,
    color:'green',
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
  imgCover:{
    width:100,
    paddingLeft:10,
    alignItems:"center",
  },
  iconCover:{
flexDirection:'row',
width:80,
justifyContent:'space-between',
paddingTop:7,
paddingLeft:10,



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
});

export default styles;
