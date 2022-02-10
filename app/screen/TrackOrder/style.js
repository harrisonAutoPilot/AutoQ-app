import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
    // height: "100%",
  },
  headerTitle: {
    position: 'absolute',
    top: hp('2%'),
    right: wp('38%')
  },


  bottomCover: {
    // position: 'absolute',
    // top: hp('10%'),
    padding: 1,
    paddingLeft: 12,
    width: wp('96%'),
    height: hp('85%'),
    borderRadius: 3,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  mainContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  card: {
    width: wp('97%'),
    height: hp('25%'),
    margin: 4,
    borderRadius: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#e6e6e6',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
    padding: 13
  },
  smCard: {
    width: wp('97%'),
    height: hp('10%'),
    margin: 4,
    borderRadius: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#e6e6e6',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
    padding: 13
  },
  midCard: {
    width: wp('97%'),
    // height: hp('10%'),
    margin: 4,
    borderRadius: 1,
    borderBottomWidth: 0,
    borderStyle: 'solid',
    borderBottomColor: '#e6e6e6',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    textAlign: 'center',
    padding: 13
  },
  lastCard: {
    width: wp('97%'),
    margin: 4,
    // backgroundColor: '#FAFAFA',
    alignItems: 'center',
    textAlign: 'center',
    padding: 13
  },
  cardMidCover: {
    marginTop: 3,
    marginBottom: 3,
  },
  cardAddressCover: {
    marginTop: 3,
    marginBottom: 3,
  },

  cardsDown: {

    resizeMode: 'contain',
    height: hp('30%'),
    flexWrap: 'wrap',
    borderRadius: 1.5,
    borderBottomWidth: 0,
    borderColor: '#f2f2f2',
    flexDirection: 'column',
    alignItems: 'center',
  },

  elevation: {
    elevation: 0,
    shadowColor: '#52006A',
  },

  cardUpTop: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    paddingLeft: 30,
  },
  checkLineCover: {
    width: wp('85%'),
    marginRight: 30,
    paddingLeft: 30,
  },
  upTextOne: {
    color: '#424242',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  upTextTwo: {
    color: '#3858CF',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,

  },
  downTextOne: {
    color: '#757575',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  downTextTwo: {
    color: '#616161',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,

  },
  cardMidTop: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
  },
  midTextOne: {
    color: '#424242',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  cardMidDown: {
    width: wp('75%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginTop: 5,
  },
  midTextTwo: {
    color: '#9E9E9E',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 24,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  addTextOne: {
    color: '#424242',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
    fontWeight: "600",
    letterSpacing: 0.1,
  },
  addTextTwo: {
    color: '#424242',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  cardDownCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('50%'),
    marginRight: 30,
    marginTop: 7,
  },
  addBtnCover: {
    justifyContent: 'space-between',
    width: wp('90%'),
    marginRight: wp('10%'),
    marginTop: 7,
    color: '#454545',
  },
  orderBtn: {

    marginRight: wp('12%'),


  },
  addBtnText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  checkCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkImgCover: {
    backgroundColor: '#7CCF24',
    width: 30,
    height: 30,
    borderRadius: 100,
    marginRight: 20,
    alignItems: 'center',
    textAlign: 'center',
    padding: 8,

  },
  checkImg: {
    width: 14,
    height: 14,
  },
  lineImg: {
    width: 25,
    height: 35,
  },
  dottedImg: {
    width: 25,
    height: 20,
  },
  checkTextOne: {
    color: '#424242',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  checkTextTwo: {
    color: '#757575',
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    marginRight: 10,
  },
  snDown: {
    width: wp('85%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  snDownText: {
    color: '#757575',
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
    marginRight: 10,
  },
  lastCover: {
    width: wp('65%'),
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 5,
    backgroundColor: '#7CCF24',
    right: wp('7%'),
  },
  tickCover: {
    width: 30,
    height: 30,
    borderRadius: 100,
    padding: 8,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  tickImg: {
    width: 15,
    height: 15,
  },
  tickText: {
    color: '#212121',
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
  },
});

export default styles