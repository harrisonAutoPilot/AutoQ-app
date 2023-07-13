import {Platform, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  botName: {
    color: '#1B1B1F',
    fontSize: 22,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 28,
  },

  contentContainer: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'flex-start',
    backgroundColor: "blue"
  },
  countryCodeView: {
    width: wp('90%'),
    marginBottom: 2,
    zIndex: -2,
  },
  flexCover: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: hp('80%'),
    paddingTop:10,
  },
 
  formInputFieldFlex: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 10
  },

  formFlex: {
    alignSelf: 'center',
    flex: 1
  },
  closeCover: {
    justifyContent: 'center',
  },
  crossImg: {
    width: 24,
    height: 24,
    borderRadius: 100,
  },
  contentCover: {
    paddingHorizontal: 10,
    marginTop: -13,
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 20,
    paddingVertical: 0,
    paddingBottom:8,
    justifyContent: 'space-between',
    borderBottomColor: 'rgba(121, 116, 126, 0.16)',
    borderBottomWidth: 1,
  },
  scrollStyle: {
    alignItems: 'center',
    alignSelf: 'center',
    width: wp('100%'),
    flexGrow: 1,
    paddingBottom: 40
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '60%',
  },
  titleCover: {
    marginLeft: 10,
    justifyContent: 'center',
  },

  formFlex2: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: hp('70%'),
  },
  smTextCover: {
    width: wp('100%'),
    alignItems: 'center',
    padding: 20,
  },
  smText: {
    color: '#5A5D72',
    fontSize: 16,
    fontFamily: 'AnekLatin-SemiBold',
    lineHeight: 24,
  },
  toastDown:{
    bottom: hp('-2%'),
    alignSelf: 'center',
    width: wp('100%'),
    zIndex: 9,
  },
  toastCover: {
    // position: 'absolute',
    bottom:Platform.OS === "android" ? hp('4%') : hp('7%'),
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
}
});

export default styles;
