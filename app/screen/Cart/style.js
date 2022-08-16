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

  mainBody: {
    position: "absolute",
    top: 20,
    backgroundColor: "#fff",
    left: 0,
    right: 0,
    width: "100%"
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
    height:hp('100%')
  },
  midCard: {
    width: wp('100%'),
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cdcdcd",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 140
  },
  cover: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal:20,
  },
  imgCover: {
    justifyContent: "center",
    alignItems: "center"
  },
  imgCoverP: {
    justifyContent: "center",
    alignItems: "center",
    width:80,
    height:80,
    backgroundColor:'#ebebeb',
    borderRadius:8,

  },
  drugImg: {
    width: 54,
    height: 64,
    resizeMode: 'contain',
  },
  descCover: {
    width: "48%",
    paddingLeft: 25
  },
  descText: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#424242",
    letterSpacing: 0.2
  },
  descTextView:{
    // height: "38%",
    paddingTop: 5
  },
  descTextViewP:{
    height:15,
    width:200,
    backgroundColor:'#ebebeb',
    borderRadius:20,
    paddingTop: 5
  },
  priceCover: {
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 15,
    alignSelf: "flex-end",
    justifyContent: "flex-end",

  },
  priceText: {
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "#469D00",
    letterSpacing: 0.2,
    flexWrap:'wrap',
    maxWidth:100,
    // textAlign: "right"
  },
  priceTextSm: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "#469D00",
    letterSpacing: 0.2,
    flexWrap:'wrap',
    maxWidth:100,
    // textAlign: "right"
  },
  productTitle: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 20,
    color: "#212121",
    letterSpacing: 0.2,
  },
  phoneImg: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: -5,
  },
  rightCover: {
    // marginLeft: 10
  },
  iconCover: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10,
  
  },
  iconCoverP: {
    flexDirection: 'row',
    justifyContent: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
    width:70,
    height:18,
    backgroundColor:'#ebebeb',
    borderRadius:20,
    marginTop:50,
    marginRight:40,
  },
  increaseCartMainAmountView: {
    marginTop: 18,
    alignItems: "center",
    flexDirection: 'row',
    paddingRight: 10,
    paddingBottom: 5,

  },
  cartAmountView: {
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20,
    borderColor: "#EEEEEE",
    height: 35,
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20,
  },
  decreaseIconCartView: {
    flexDirection: "row",
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
    paddingHorizontal: 9,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 20, 
    borderBottomLeftRadius: 20,

  },
  decrease: {
    paddingHorizontal: 9,
    paddingVertical: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 2,
    borderTopRightRadius: 20, 
    borderBottomRightRadius: 20,
  },
  increaseText: {
    paddingHorizontal: 12
  },
  bottomDownCover: {
    width: wp('100%'),
    borderWidth: 0,
    borderStyle: 'solid',
    backgroundColor: "#fff",
    elevation: 20,
    paddingHorizontal: 16,
    shadowOffset: { width: 10, height: 10 },
    // elevation: 10,
    shadowColor: 'black',
    shadowRadius: 16,
    shadowOpacity: 0.1,
  },
  bottomCover: {
    height: hp('90%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#fff"
  },
  orderCover: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#e0e0eb',
    paddingVertical:20,
    paddingBottom: 10
  },
  orderText: {
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "#3858CF",
    letterSpacing: 0.3,
    textAlign: "right"
  },
  subText: {
    fontSize: 14,
    fontFamily: "Urbanist-Medium",
    lineHeight: 30,
    color: "#616161",
    letterSpacing: 0.3,
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
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 24,
    color: "rgba(33, 33, 33, 1)",
    letterSpacing: 0.1,
  },
  subtotalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical:10,
    width: wp('90%'),
    marginTop:10,
    paddingTop: 0,

  },
  totalCover: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('90%'),
    paddingTop: 8,

  },
  addBtnCover: {
    marginBottom: 30,
    marginTop: 20,

  },

  addressBtn2: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 50,
    backgroundColor: '#3858CF',
    marginTop: 2,
    // marginRight: 15,
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
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 100,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginTop: 20
  },
  thrashP: {
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginTop: 50,
    width:60,
    height:18,
    marginRight:50,
    backgroundColor:'#ebebeb',

  },
  amountP:{
width:60,
height:18,
backgroundColor:'#ebebeb',
borderRadius:20,
marginTop:35,
  },
  textStyle: {
    fontSize: 10,
    color: '#fff',
  },
  scrollTextCover: {
    backgroundColor: 'rgba(124, 207, 36, 1)',
    padding: 4,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 4,
    // position:'absolute',
    // right:wp('10%')
  },
  arrow: {
    width: 50,
    height: 50,
  },
  headerSubIconView: {
    flexDirection: "row",
    marginLeft: -20,
  },
  headerSubLastIconView: {
    paddingLeft: 15
  },
  body2: {
    backgroundColor: "#00319D",
    paddingBottom: 5
},
badge:{
  backgroundColor: "#D32F2F",
  borderRadius: 10,
  position: "absolute",
  top: -5,
  left: 25,
  width: 14,
  height: 14,
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center"
},
badgeText: {
  color: '#fff',
  fontSize: 11,
  fontFamily: "Urbanist-Medium",
  // lineHeight: 16,
  letterSpacing: 0.1,
  textAlign: "center",
  justifyContent: "center",
  alignSelf: "center"

},

  //THIS IS FOR THE BOTTOM PLACEHOLDER
  placeCover:{
    padding:20,
    width:wp('100%'),
    paddingLeft:20,
    paddingRight:40,
    alignSelf:'center',
    // alignItems:'center',
      },
      placeholderTitle:{
        width:120,
        height:25,
        borderRadius:20,
        backgroundColor:'#bfbfbf',
      },
      underCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingLeft:30,
        paddingRight:30,
        width:wp('100%'),
        alignSelf:'center',
    
      },
      underCover1:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        width:wp('100%'),
        alignSelf:'center',
        marginTop:-10,
    
      },
      underLine:{
        width:70,
        height:15,
        borderRadius:20,
        backgroundColor:'#bfbfbf',
      },
      btnLine:{
        width:300,
        height:45,
        borderRadius:50,
        backgroundColor:'#bfbfbf',
        alignSelf:'center'
      }
    })