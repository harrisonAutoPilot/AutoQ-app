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
  itemDetails: {
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 20,
    color: "rgba(117, 117, 117, 1)",
    letterSpacing: 0.3,
  },
  view: {
    flex: 1,
    height: "100%",
  },
  mainContainer: {
    height: "100%",
    paddingBottom: 50
  },
  scrollView: {
    height: "100%",
    flexGrow: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
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
    width: wp('95%'),
    paddingHorizontal: 16,
    paddingBottom: 2,
    // marginTop: 5,
    marginBottom: 7,

  },
  title2Cover: {
    width: wp('95%'),
    paddingHorizontal: 16,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 10,
    marginBottom: 7,

  },
  selectContainer: {
    width: wp('100%'),
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  selectInnerContainer: {
    marginBottom: 8
  },
  titleText: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#616161",
    letterSpacing: 0.2,
  },
  selectText: {
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 20,
    color: "#3858CF",
    letterSpacing: 0.2,
    // paddingLeft: 3,
  },

  bottomDownCover: {
    marginTop: 16,
    paddingHorizontal: 16,
    width: wp('100%'),
    borderWidth: 0,
    borderStyle: 'solid',
    alignItems: "center"
  },
  bottomCover: {
    position: 'absolute',
    top: hp('9%'),
    paddingLeft: 5,
    paddingRight: 5,
    width: wp('100%'),
    height: hp('80%'),
    borderWidth: 0,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'space-between'
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
  subtotalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('88%'),
    paddingTop: 0,
    paddingRight: 5,
  },
  totalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('88%'),
    paddingTop: 0,
    marginTop: 8,
    paddingRight: 5,


  },
  totalBorderCover: {
    borderStyle: Platform.OS === "android" ? "dashed" : "solid",
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    marginBottom: 20,
    paddingRight: 2,
    width: wp('87%'),

  },
  totalBorderCover1: {
    borderColor: '#BDBDBD',
    
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    marginBottom: 20,
    paddingRight: 2,
    width: wp('87%'),

  },
  dashStyle:{
    alignSelf:'center',
    width:"98%",
    marginRight:10,
    marginTop:20,
  },
  totalBorderText: {
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "rgba(33, 33, 33, 1)",
    letterSpacing: 0.1,

  },
  addBtnCover: {
    width: wp('90%'),
    color: '#454545',
    // alignItems: "center"
  },

  addressBtn2: {
    // paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: '#3858CF',
    marginTop: 2,
    // marginRight: 12,
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
    // justifyContent: 'space-between',
    // width: wp('100%'),
    // borderColor: "rgba(189, 189, 189, 1)",
    // borderWidth: 1
  },
  optionView: {
    flexDirection: "row",
    // borderRadius: 4,
    borderWidth: 1,
    borderColor: "#f2f3f4",
    marginTop: 15,
    height: 68,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 0.1,
    backgroundColor: "#fff",
    marginBottom: 0,


  },
  optionViewBetween1: {
    marginTop: 10,
  },
  optionViewBetween2: {
    marginTop: 0,
  },
  optionViewCover: {
    width: wp('92%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: "rgba(70, 157, 0, 0.5);",
    backgroundColor: "rgba(70, 157, 0, 0.05)",
    borderRadius: 4,
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
  optionMiniTextView: {
    justifyContent: "center",
    paddingTop: 4,

  },
  iconCircle: {
    borderColor: "rgba(70, 157, 0, 1)",
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
  },
  iconCircleDrop: {
    borderColor: "rgba(70, 157, 0, 1)",
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 15,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
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
    width: wp('98%'),
    padding: 5,
    alignItems: "center"
  },
  quanCover: {
    flexDirection: 'row',
    padding: 5,
    alignItems: "center",
    marginLeft: 5,
  },
  drugImg: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  detailCover: {
    width: "64%",
    paddingLeft: 7,
    paddingRight: 10,
    marginRight: 8,
  },
  mainBody: {
    marginHorizontal: 20
  },
  imgCoverP:{
    width:50,
    height:60,
    borderRadius:8,
    backgroundColor:'#ebebeb',

  },
  detailCoverP: {
    width: "44%",
    paddingLeft: 7,
    paddingRight: 10,
    marginRight: 8,
    backgroundColor:'#ebebeb',
    borderRadius:20,
    height:15,
    marginLeft:10,
  },
  quanCoverP: {
    backgroundColor:'#ebebeb',
    borderRadius:20,
    height:15,
    width:30,
   
    marginLeft:40,
  },

  //THIS IS FOR THE DELIVERY METHOD 
  deliverMethodCover:{
    backgroundColor:'#fff',
    paddingTop:10,
    paddingBottom:10,

  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  deliverContainer:{
    
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  dropStyle:{
    height: 55,
    width: wp('90%'),
    borderWidth:1,
    borderColor:'#BDBDBD',
    borderRadius:8,
    alignSelf:'center',
    paddingHorizontal:8,
  },
  dropdown: {
    // height: 50,
    paddingTop:3,
    paddingBottom:3,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#212121',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    letterSpacing: 0.25,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#212121',
    fontFamily: "Urbanist-Regular",
  },
  iconNew:{
    marginRight:20,
    marginLeft:10,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight:20,
    marginLeft:10,
  
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  smDisplay:{
    fontSize:14,
    color:'#3858CF',
    fontFamily: "Urbanist-Regular",
  },
  customItem:{
    padding:15,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  changeText:{
    color:'#3858CF',
    fontFamily: "Urbanist-Regular",
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.3,
    fontWeight: "600",
  }
})