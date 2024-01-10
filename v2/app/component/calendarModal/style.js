import {StyleSheet, Dimensions, Platform} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  sheetContainer: {
    width: wp('100%'),
    padding: 20,
    flexDirection:'column',
    justifyContent:'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  topCover: {
    width: '100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignSelf: 'center',
    alignItems: 'center',
  },
  middleContainer:{
width:'100%',
alignSelf:'center',
height:'83%',

  },
  formCover: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    width: wp('40%'),
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderWidth: 0,
    borderColor: 'rgba(118, 118, 128, 1)',
    borderRadius: 4,
  },
  inputCover: {
    alignSelf: 'center',
  },
  input: {
    paddingLeft: 10,
    width: wp('90%'),
    height: 150,
    color: '#000',
    textAlign: 'auto',
    alignSelf: 'center',
    borderRadius: 4,
    borderColor: 'rgba(118, 118, 128, 1)',
    borderWidth: 0,
    justifyContent: 'flex-start',
  },
  addCover: {
    padding: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  addText: {
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    letterSpacing: 0.25,
  },
  addDesc: {
    color: 'rgba(90, 93, 114, 1)',
    fontSize: 12,
    fontFamily: 'AnekLatin-Regular',
    lineHeight: 16,
    letterSpacing: 0.25,
  },
  fadeText: {
    color: 'rgba(27, 27, 31, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
    letterSpacing: 0.25,
  },
  errView: {
    width: wp('90%'),
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#BA1A1A',
    borderRadius: 8,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  errText: {
    fontSize: 14,
    fontFamily: 'AnekLatin-Regular',
    letterSpacing: 0.25,
    marginLeft: 13,
    color: '#fff',
  },
  toastCover: {
    position: 'absolute',
    bottom: 0,
    width: wp('100%'),
  },
  sucView: {
    paddingTop: 14,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(16, 109, 52, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  inputContainer: {
    width: '46%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 45,
    borderWidth: 1.5,
    borderColor: 'rgba(51, 83, 203, 1)',
    borderRadius: 6,
  },
  inputContainerInactive:{
    width: '45%',
    alignSelf: 'center',
    flexDirection: 'row',
    height: 45,
    borderWidth: 1.5,
    borderColor: '#bfbfbf',
    borderRadius: 6,
  },

  labelStyle: {
    position: 'absolute',
    backgroundColor: '#fff',
    marginTop: -5,
    marginLeft: 10,
    paddingHorizontal: 5,
    zIndex: 900,
  },
  labelText: {
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 12,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 10,
  },
  fadeText: {
    color: 'rgba(69, 70, 79, 1)',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
  },
  calendarCover:{
    width:'100%',
    paddingVertical:20,
  },
  bottomCover:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:wp('90%'),
    alignSelf:'center',
    borderTopWidth:1,
    borderTopColor:'#f5f5f5',
    paddingVertical:20

  },
  confirmBtn:{
    width:wp('40%'),
    backgroundColor:'rgba(51, 83, 203, 1)',
    borderRadius:30,
    padding:15,
    alignItems:'center',
    justifyContent:'center'
  },
  confirmText:{
    color: '#fff',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
  },
  resetBtn:{
    width:wp('40%'),
    borderRadius:30,
    padding:15,
    alignItems:'center',
    justifyContent:'center'
  },
  resetText:{
    color: 'rgba(51, 83, 203, 1)',
    fontSize: 14,
    fontFamily: 'AnekLatin-Medium',
    lineHeight: 20,
  }
});

export default styles;
