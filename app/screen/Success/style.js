import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    flex: 1,
    height: "100%",
    // flexGrow: 1,
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
    // paddingHorizontal: 16,
    // width: wp('96%'),
    height: hp('85%'),
    borderRadius: 3,
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: "100%",
    flexGrow: 1,
    flex: 1
  },
  mainContainer: {
    // flex: 1,
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // justifyContent:"center",
    // height: "100%",
    // flex: 1,
    height: "100%",
    paddingBottom: 50
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
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#e6e6e6',
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    padding: 13,
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
    marginTop: 8,
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
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight: 30,
  },
  cardUpTop2: {
    width: wp('92%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight: 30,
  },
  upTextOneCover:{
    width:245,
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    textAlign:'left',
  },
   upTextOnee: {
    color: '#424242',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.3,
    justifyContent:'flex-start',
    textAlign:'left',
  },
  upTextOne: {
    color: '#424242',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.3,
    justifyContent:'flex-start',
    textAlign:'left',
  },
  upTextTwo: {
    color: '#3858CF',
    fontSize: 14,
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
    width: wp('91%'),
    // marginRight: wp('10%'),
    marginTop: 7,
    color: '#454545',
    marginBottom: 5
  },
  addressBtn: {
    borderWidth: 1,
    borderColor: 'rgba(66, 66, 66, 1)',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    width: wp('93%'),
    // width: wp('92%'),
    // color: '#000000',
    // textAlign: 'center',

    // marginHorizontal: wp('2%')

  },
  addressBtn2: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(124, 207, 36, 1)',
    // width: wp('92%'),
    // color: '#000000',
    // textAlign: 'center',

    // marginHorizontal: wp('2%')

  },
  orderBtn: {
    marginTop: 15,
    alignItems: "center",
    // marginRight: wp('12%'),
  },
  addBtnText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 22,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  snCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  snCover2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "60%",

  },
  snTextOne: {
    color: '#424242',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
    marginRight: 10,

  },
  capitalize:{
    textTransform: "capitalize"
  },
  snTextTwo: {
    color: '#469D00',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
    marginRight: 10,
  },
  snTextTwoAlign: {
    // textAlign: "center"
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
  StatusCover: {

    backgroundColor: '#E3F6CF',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 20,
    height: 30,

  },
  statusText: {
    color: '#469D00',
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    textTransform: 'capitalize',
  },
  statusTextB: {
    color: '#00319D',
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    textTransform: 'capitalize',
  },
  reorderCover: {
    flexDirection: 'row',

  },
  reOrderText: {
    color: '#757575',
    fontSize: 11,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
    textTransform: 'uppercase',
  },
  refreshImg: {
    width: 12,
    height: 12,
    marginTop: 3,
    marginLeft: 3,
  },
  locImg: {
    width: 13,
    height: 15,
    marginTop: 3,
    marginRight: 8,
  },
  cardImg: {
    width: 20,
    height: 15,
    marginTop: 3,
    marginRight: 8,
  },
  weight: {
    fontWeight: "600"
  }
});

export default styles