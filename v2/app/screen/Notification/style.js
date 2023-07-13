import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    // height:hp('100%')
  },
  storeContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    padding: 20,
    paddingVertical: 15,
  },
  storeText: {
    color: '#5A5D72',
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
  },
  bottom: {
    height: '80%',
    flex: 1,
  },
  //    this is for the top tab
  tabContainer: {
    width: '100%',
    borderBottomColor: 'rgba(121, 116, 126, 0.16)',
    borderBottomWidth: 1,
  },
  subHeader: {
    width: wp('100%'),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  activeSubHeader: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: '#3353CB',
    borderBottomWidth: 4,
    alignItems: 'center',
    width: '32%',
    // marginHorizontal:5,
  },
  inActiveSubHeader: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomColor: '#3353CB',
    borderBottomWidth: 0,
    alignItems: 'center',
    width: '30%',
    // marginHorizontal:5,
  },
  activeSubHeaderText: {
    color: '#3353CB',
    fontSize: 12,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 16,
  },
  inActiveSubHeaderText: {
    color: '#5A5D72',
    fontSize: 12,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 16,
  },
  card: {
    width: '100%',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(121, 116, 126, 0.12)',
    borderStyle: 'solid',
  },

  //    this is for the empty screen
  emptyContainer: {
    width: '100%',
    height: hp('50%'),
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  emptyImgCover: {
    marginTop: 50,
  },
  favImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  emptyTextCover: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyBgText: {
    color: '#1B1B1F',
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
  },
  emptySmText: {
    color: '#45464F',
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 20,
    marginTop: 10,
  },
  // this is for the Empty Notification
  emptyNoteCover: {
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: wp('100%'),
    height: hp('60%'),
    textAlign: 'center',
  },
  imgCoverBg: {
    marginTop:hp('20%'),
    marginBottom: 10,
  },
  emptyCartImg: {
    width: 85,
    height: 85,
    resizeMode: 'contain',
  },
  emptyTextBg: {
    fontFamily: 'AnekLatin-SemiBold',
    fontSize: 22,
    lineHeight: 28,
    color: '#1B1B1F',
    letterSpacing: 0.1,
  },
  textCover: {
    width: '100%',
    alignItems: 'center',
    padding: 30,
    paddingVertical: 10,
  },
  emptyTextSm: {
    fontFamily: 'AnekLatin-Regular',
    fontSize: 14,
    lineHeight: 20,
    color: '#5A5D72',
    letterSpacing: 0.1,
    marginTop: 4,
    textAlign: 'center',
  },
  emptyNoteImg: {
    width: 85,
    height: 70,
    resizeMode: 'contain',
  },
// This is where the placeholder style starts
cardCover:{
    width:wp('100%'),
    flexDirection:'row',
    justifyContent:'space-between',
    alignSelf:'center',
    paddingHorizontal:20,
    paddingVertical:25,
    borderBottomWidth:1,
    borderBottomColor:"rgba(121, 116, 126, 0.16)",
},
leftCover:{
    alignItems:'center',
    width:50,
    height:50,
    justifyContent:"center",
    backgroundColor:"#F2F0F4",
    borderRadius:100,
    marginRight:11,  
},
rightCover:{
    width:wp('72%'),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:0,
},
  imgLine:{
    width:50,
    height:50,
    borderRadius:100,
    backgroundColor:"#bfbfbf",
  },
  mdLine:{
    width:160,
    height:20,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
    marginBottom:8,
  },
  smLine:{
    width:80,
    height:20,
    borderRadius:20,
    backgroundColor:"#e6e6e6",
  },
  tnLine:{
    width:40,
    height:20,
    borderRadius:20,
    backgroundColor:"#bfbfbf",
  },
});
