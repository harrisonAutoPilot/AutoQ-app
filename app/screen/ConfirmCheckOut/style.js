import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default styles = StyleSheet.create({
  mainHeader: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(238, 238, 238, 1)",
    paddingLeft: 19

  },
  body: {
    backgroundColor: "#00319D",
    marginBottom: 10,
    paddingBottom: 5
  },
  cover: {
    width: wp('95%'),
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingLeft: 20,
    paddingRight: 8,

  },
  titleCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100%'),
    paddingHorizontal: 16,
    paddingTop: 2,
    paddingBottom: 2,
    // marginTop: 5,
    marginBottom: 7,

  },
  title2Cover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('100%'),
    paddingHorizontal: 16,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 10,
    marginBottom: 7,

  },
  selectContainer: {
    width: wp('100%'),
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  titleText: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#616161",
    letterSpacing: 0.2,
    fontWeight: "600",
  },
  changeText: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#3858CF",
    letterSpacing: 0.2,
    paddingLeft: 3,
  },
  selectText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    color: "#3858CF",
    letterSpacing: 0.2,
    fontWeight: "600",
    paddingLeft: 3,
  },

  bottomDownCover: {
    marginTop: 2,
    paddingHorizontal: 16,
    width: wp('100%'),
    height: hp('60%'),
    borderWidth: 0,
    borderStyle: 'solid',
    backgroundColor: '#ffffff',
  },
  bottomCover: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
  },
  orderCover: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#e0e0eb',
    marginTop: 10,
  },
  orderText: {
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 30,
    color: "#3858CF",
    letterSpacing: 0.3,
    fontWeight: "600",
    textAlign: "right"
  },
  subText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    color: "#616161",
    letterSpacing: 0.3,
    fontWeight: "400",
  },
  subTextDark: {
    fontSize: 16,
    lineHeight: 24,
    color: "#212121",
    letterSpacing: 0.3,
    fontFamily: "Urbanist-SemiBold",
  },
  totalText: {
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 30,
    color: "#212121",
    letterSpacing: 0.3,
    fontWeight: "600",
  },
  subtotalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingTop: 15,
    paddingRight: 10,

  },
  subtotalCoverDot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingTop: 5,
    borderTopWidth: 1,
    borderStyle: 'dashed',
    borderTopColor: '#BDBDBD',
    marginTop: 10,
    paddingRight: 10,

  },
  totalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingTop: 0,

  },
  addBtnCover: {
    color: '#454545',
    marginTop: 20,
  },

  addBtnCover2: {
   position: "absolute",
   bottom: 0,
   paddingVertical: 20,
   borderTopColor: "#EEEEEE",
   borderTopWidth: 1,
   backgroundColor: "#f5f5f5",
   width: "100%",
   paddingHorizontal: 30
  },

  addressBtn2: {
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: "#3858CF",
    marginTop: 2,
  },
  checkoutText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 30,
    color: "#212121",
    letterSpacing: 0.3,
    fontWeight: "700",
  },
  inputHolder: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    paddingVertical: Platform.OS === "ios" ? 20 : 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  dropCover: {
    width: wp('100%'),
  },
  optionView: {
    flexDirection: "row",
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#f0f0f5",
    marginTop: 5,
    height: 68,
    elevation: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    backgroundColor: "#fff"
  },
  optionViewBetween1: {
    marginTop: 10,
  },
  optionViewBetween2: {
    marginTop: -3,
  },
  optionViewCover: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderWidth: 0,
    borderColor: "rgba(70, 157, 0, 0.5);",
    backgroundColor: "#67e600",
    borderRadius: 0,
  },
  optionViewCover2: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderRadius: 0,

  },
  optionIconView: {
    backgroundColor: "rgba(70, 157, 0, 0.9);",
    width: 44,
    justifyContent: "center"
  },
  optionIconView2: {
    backgroundColor: "#F5F5F5",
    width: 44,
    justifyContent: "center"
  },
  optionTextView: {
    marginLeft: 16,
    width: "85%",


  },
  optionTextView2: {
    marginLeft: 16,
    width: "85%",

  },
  optionText: {
    fontFamily: "Urbanist-Regular",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: "400",
    color: "#212121",
    textTransform: "capitalize"
  },
  storeNameText: {
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.3,
    fontWeight: "600",
    color: "#212121",
    fontFamily: "Urbanist-SemiBold",
    paddingTop: 3,
    textTransform: "capitalize"
  },
  storeAddressText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: "400",
    fontFamily: "Urbanist-Regular",
    paddingTop: 3,
    color: "#616161"
  },
  storePhoneText: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: "400",
    color: "#616161",
    textTransform: "capitalize",
    paddingTop: 3,
    fontFamily: "Urbanist-Regular",
  },
  optionMiniTextView: {
    justifyContent: "center",
    paddingTop: 4,

  },
  iconCircle: {
    borderColor: "#fff",
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
  listCover: {
    flexDirection: 'row',
    width: wp('99%'),
    padding: 5,

  },
  drugImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  detailCover: {
    width: 280,
    paddingLeft: 7,
    paddingRight: 10,
  },
  modalPadding: {
    paddingHorizontal: 29.75,
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp('100%'),
    alignItems: "center",
    paddingTop: 20,
    marginTop:20,

  },
  backCover: {
    position: 'absolute',
    left: wp('8%'),
    top: wp('5.5%'),
  },
  modalView: {
    backgroundColor: "#fff",
    width: "100%",
    paddingHorizontal: 29.75,
    paddingTop: 10.25,
    alignSelf: "center",
  },
  topPrompt: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-around',
    borderRadius: 8,
    width: wp('90%'),
    margin: 18,
    padding: 15,
    alignSelf: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "#212121",
    letterSpacing: 0.2,
    textAlign: "center"
  },
  topPromptText: {
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 20,
    color: "#616161",
    letterSpacing: 0.3,
    fontWeight: "500",

  },
  phone: {
    fontFamily: "Urbanist-SemiBold",
    color: "#3858CF"
  },
  label3: {
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 16,
    color: "#424242",
    letterSpacing: 0.2,
  },
  label4: {
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 16,
    color: "#424242",
    letterSpacing: 0.2,
    textAlign: "center"
  },
  label5: {
    fontFamily: "Urbanist-SemiBold",
    color: "#469D00",
  },
  labelCover: {
    marginTop: 50
  },
  labelCover2: {
    marginTop: 20
  },
  pinView: {
    borderWidth: 1,
    borderColor: "#a1a1a1",
    paddingLeft: 12,
    // paddingRight:12,
    paddingVertical: Platform.OS === "android" ? 8 : 8,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: 58
  },
  pinHolder: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  inputF: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 16,
    color: "#424242",
  }
})