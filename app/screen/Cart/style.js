import { StyleSheet } from "react-native";
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
    paddingLeft: 19,
    // backgroundColor: "#fff"

  },
  mainBody:{
zIndex:9000,
  },
  body: {
    backgroundColor: "#fff",
    marginBottom: 20
  },
  headerText: {
    fontSize: 22,
    fontFamily: "Urbanist-Regular",
    lineHeight: 28,
    color: "rgba(33, 33, 33, 1)",
    letterSpacing: 0.2,
    fontWeight: "400",
    textAlign: "center"
  },
  iconView: {
    marginRight: 70
  },
  view: {
    flexGrow: 1,
    height: "100%"
  },
  midCard: {
    width: wp('95%'),
    height: hp('15%'),
    paddingLeft:30,
    paddingRight:35,
    paddingBottom:20,
    borderRadius:8,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    backgroundColor: '#fff',
    alignItems: 'center',
    textAlign: 'center',
    // paddingVertical: 12,
    marginBottom:3,
    paddingTop:9,
    // paddingLeft: 16,
    // paddingRight: 8

  },
  cover: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    paddingLeft:10,
    paddingRight:10,

  },

  imgCover: {
    width: "20%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  drugImg: {
    width: 54,
    height: 64,
    // resizeMode: 'contain',
  },

  descCover: {
    width: "52%",
    marginLeft: 10
  },
  descText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    color: "rgba(66, 66, 66, 1)",
    letterSpacing: 0.2,
    fontWeight: "600",
  },
  priceCover: {
    paddingTop: 15,
    paddingBottom:10,
  },
  priceText: {
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 24,
    color: "#469D00",
    letterSpacing: 0.2,
    fontWeight: "600",
  },
  productTitle:{
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    color: "#757575",
    letterSpacing: 0.2,
    fontWeight: "600",
  },
  phoneImg: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: -5,
  },
  rightCover: {
    // marginRight: 50
  },
  iconCover: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
  },
  increaseCartMainAmountView: {
    // right: wp('4%'),
    // flexDirection: "row",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom:15,
    // paddingLeft: 10,
    // paddingRight: 10,
    // justifyContent: "space-between"
  },
  cartAmountView: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    borderColor: "#EEEEEE",
    height: 30,

    // shadowColor: '#EEEEEE',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  decreaseIconCartView: {
    flexDirection: "row",
    // marginTop: 54,
    alignItems: "center"
  },
  amountText: {
    fontSize: 22,
    fontFamily: "Urbanist-Regular",
    lineHeight: 30,
    color: "#469D00",
    letterSpacing: 0.3,
    fontWeight: "600",
    textAlign: "right"
  },
  increase: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 2,

  },
  decrease: {
    paddingHorizontal: 4,
    paddingVertical: 8,
    backgroundColor: "#F5F5F5",
    borderRadius: 2,
  },
  increaseText: {
    // paddingVertical: 11,
    paddingHorizontal: 10
  },
  bottomDownCover: {
    marginTop: -20,
    paddingLeft: 20,
    paddingRight: 5,
    width: wp('99%'),
    borderWidth: 0,
    borderStyle: 'solid',
    backgroundColor: "#fff"
  },
  bottomCover: {
    // marginTop: -5,
    // paddingLeft: 5,
    // paddingRight: 5,
    // width: wp('99%'),
    height: hp('78%'),
    borderWidth: 0,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderCover: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#e0e0eb',
    marginTop: 10,
    paddingBottom: 10
  },
  orderText: {
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 24,
    color: "#3858CF",
    letterSpacing: 0.3,
    fontWeight: "600",
    textAlign: "right"
  },
  subText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 30,
    color: "#616161",
    letterSpacing: 0.3,
    fontWeight: "600",
  },
  totalText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    color: "rgba(97, 97, 97, 1)",
    letterSpacing: 0.3,
    fontWeight: "500",
  },
  totalText2: {
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 24,
    color: "rgba(33, 33, 33, 1)",
    letterSpacing: 0.1,
    fontWeight: "600",
  },
  subtotalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingTop: 0,

  },
  totalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingTop: 8,

  },
  addBtnCover: {
    justifyContent: 'space-between',
    width: wp('93%'),
    color: '#454545',
    marginBottom: 50,
    marginTop: 10
  },

  addressBtn2: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(124, 207, 36, 1)',
    marginTop: 2,
    marginRight: 15,
  },
  checkoutText: {
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 30,
    color: "#212121",
    letterSpacing: 0.3,
    fontWeight: "700",
  },
  thrash: {
    marginLeft: 20
  },
  textStyle:{
    fontSize:10,
    color:'#fff',
  },
  scrollTextCover:{
    backgroundColor: 'rgba(124, 207, 36, 1)',
    padding:4,
    paddingLeft:6,
    paddingRight:6,
    borderRadius:4,
    // position:'absolute',
    // right:wp('10%')
  },
  arrow:{
    width:50,
    height:50,
  },
})