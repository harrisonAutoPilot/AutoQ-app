import { Dimensions, StyleSheet, Platform } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  main: {
     backgroundColor:'#f3f4f5',
    flex: 1,
    // flexGrow: 1,
    // height: "100%",
  },
  head: {
    backgroundColor: '#ffffff',

  },
  header:{
    marginTop:15,
    paddingHorizontal: 5,
    marginBottom: 5
  },
  headerTitle: {
    position: 'absolute',
    top: hp('2%'),
    right: wp('38%')
  },
  addContainer: {
    marginTop: 24,
    width: wp('98%'),
    marginLeft: wp('1%'),
    alignItems: 'center',
  },
  bottomCover: {
    // position: 'absolute',
    // top: hp('22%'),
    padding: 1,
    paddingLeft: 12,
    width: wp('96%'),
    height: hp('75%'),
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
    flexDirection: 'row',
    justifyContent: "center"
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

  midCard: {
    width: wp('97%'),
    margin: 4,
    borderRadius: 1,
    borderBottomWidth: 0,
    borderStyle: 'solid',
    borderBottomColor: '#e6e6e6',
    alignItems: 'center',
    padding: 13,
    paddingTop:0,
  },
  detailCover: {
    // position: 'absolute',
    // top: hp('15%'),
    padding: 1,
    paddingLeft: 12,
    width: wp('96%'),
    height: hp('85%'),
    borderRadius: 3,
    borderWidth: 0,
    borderColor: '#e6e6e6',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  detailCard: {
    width: wp('86%'),
    height: 90,
    margin: 4,
    // marginLeft: 20,
    marginTop: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'flex-start',
    padding: 20,
    flexDirection: "row",
    alignSelf: "center"
  },

  detailCardView:{
    width: wp('50%'),
    // flexGrow: 1
  },
  detailCardIconView:{
    flexDirection: "row",
    alignContent: 'center',
  },
  detailCardIconInnerView:{
    marginRight: 4,
    alignItems: 'center',
  },
  detailEdit:{
    color: 'rgba(211, 47, 47, 1)',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.2,
  },
  storeTitle: {
    color: '#757575',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,

  },
  storeName: {
    color: '#212121',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    marginTop: 5,
  },

  cardMidCover: {
    marginTop: 8,
    marginBottom: 8,
    alignItems: "center",
    width: "100%"
   
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
  storeBtn: {
    width: wp('92%'),
    height: 72,
    borderWidth: 1,
    borderColor: '#469D00',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    // marginLeft:wp('1%'),
    borderRadius: 10,
    marginBottom: 8
    // backgroundColor: '#ffffff',
  },
  storeCard: {
    width: wp('93%'),
    height: 110,
    // borderWidth: 0,
    // borderColor: '#469D00',
    // borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginRight: 20,
    borderRadius: 16,
    // backgroundColor: '#D5F1F5',
    // marginTop: 10,
    flexDirection: 'row',

  },
  innerCover: {
    borderWidth: 0,
    borderColor: '#469D00',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: 20,
    borderRadius: 5,
    // marginTop: 10,
    flexDirection: 'row',

  },
  addTextCover: {
    flexDirection: 'row',

  },
  addStoreTextPlus: {
    color: '#469D00',
    fontSize: 26,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "200",
    letterSpacing: 0.1,
    marginRight: 5,
    marginTop: 3,

  },
  addStoreText: {
    color: '#469D00',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,

  },
  storeImg: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginRight: 15,
    resizeMode: 'contain',

  },
  storeTitleCover: {
    width: 400,

  },
  storeOwnerName: {
    color: '#212121',
    fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    marginRight: 5,
    marginTop: 3,
  },
  storeOwnerAddress: {
    color: '#212121',
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "600",
    letterSpacing: 0.1,
    marginRight: 5,
    marginTop: 3,
    flexShrink: 1,
  },
  viewCover: {
    position:'absolute',
    marginRight: 20,
    flexDirection: 'row',
    right:wp('2%'),
  },
  viewText: {
    color: '#212120',
    fontSize: 11,
    fontFamily: "Urbanist-Regular",
    lineHeight: 16,
    // fontWeight: "600",
    letterSpacing: 0.2,

  },
  angleImg: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginTop: 1,
    marginLeft: 5,
  },
  downTextOne: {
    color: '#757575',
    fontSize: 14,
    fontFamily: "Urbanist-Regular",
    lineHeight: 20,
    fontWeight: "400",
    letterSpacing: 0.1,
  },
  addStoreBottomSheet: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    
  },
  addtitleCover:{
    // backgroundColor:'pink',
    width:200,
    // height:65,
    flexShrink: 1
  },
  inputHolder: {
    width: wp('87%'),
    // marginLeft: wp('7%'),
    borderWidth: 1,
    borderColor: "#BDBDBD",
    paddingVertical:  Platform.OS === "ios" ? 20: 5,
    paddingHorizontal: 5,
    marginTop: 5,
    borderRadius: 5,
    alignSelf: "center"
  },
  registerInputHolder: {
    width: wp('87%'),
    marginLeft: wp('7%'),
    borderWidth: 1,
    borderColor: "#BDBDBD",
    // paddingVertical:  Platform.OS === "ios" ? 20: 5,
    // paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 10,
    marginTop: Dimensions.get("window").height / 20,
    borderRadius: 5,
  },
  scrollStyle:{
    position:'relative',
  paddingBottom: 5, 
  height:hp('60%'),
  marginBottom:-100
  // top: hp('-3%'),
  },
  registerInputPinHolder: {
    width: wp('87%'),
    marginLeft: wp('7%'),
    borderWidth: 1,
    borderColor: "#BDBDBD",
    // paddingVertical:  Platform.OS === "ios" ? 20: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingHorizontal: 5,
    marginTop: Dimensions.get("window").height / 20,
    borderRadius: 5,
  },
  pinInputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    flexWrap: "wrap",
    alignItems: "center"
  },
  imageInputView: {
    width: "80%",
    // flexWrap: "wrap"
  },
  pinView: {
    justifyContent: "flex-start",
  },
  errView: {
    marginTop: 5,
    // alignItems: 'center',
    // justifyContent: 'center',
   marginLeft: 30

  },
  errText: {
    color: "red",
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "400",
    textAlign: "left"
  },
  showTextPin: {
    color: "#3858CF",
    fontSize: 11,
    // marginTop:  Platform.OS === "android" ? 16: 5,
    fontFamily: "Urbanist-Regular",
    lineHeight: 16,
    letterSpacing: 0.2,
    fontWeight: "400",
    paddingTop: 5,
  },
  selectCover: {
    paddingRight: 10,
    marginRight: 10,
    borderColor: '#7485FF',
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 10,
    height: 30,
    // marginTop: 10,
    backgroundColor: '#E9EBF9',
    // width: "30%",
    // alignItems: "flex-end"
  },
  inputErrHolder: {
    borderColor: "red"
  },
  inputPinHolder: {
    marginTop: 15,
  },
  registerInputPinHolder: {
    marginTop: 15,
  },
  labelView: {
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "#fff",
    paddingHorizontal: 5
  },
  label: {
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 16,
    color: "rgba(97, 97, 97, 1)",
    letterSpacing: 0.2,
    fontWeight: "600"
  },
  label2: {
    fontSize: 12,
    fontFamily: "Urbanist-Regular",
    lineHeight: 16,
    color: "#212121",
    letterSpacing: 0.2,
    fontWeight: "400",
},
label3: {
  fontSize: 12,
  fontFamily: "Urbanist-Regular",
  lineHeight: 16,
  color: "#212121",
  fontWeight: "400",
},
  addBtnCover: {
    marginTop: 20,
    paddingLeft: 10,
  },
  removeCover:{
    flexDirection:'row',
    width:wp('100%'),
    alignItems:'center',
    justifyContent:'center',
    marginTop:70,
  },
  removeText:{
   fontSize: 16,
    fontFamily: "Urbanist-Regular",
    lineHeight: 16,
    color: "#D32F2F",
    letterSpacing: 0.2,
    fontWeight: "600",
    marginLeft:20,
  },
  store:{
    marginTop: 10,
    // paddingHorizontal: 10
  },
  errMainView: {
  width: "87%",
  alignSelf: "center",
  marginBottom: 20
},
deleteView: {
  position: "absolute",
  bottom: hp("-48%"),
  backgroundColor: "rgba(238, 238, 238, 1)",
  width: "100%",
  height: "100%",
  paddingTop: 25,
  left: 0,
},
deleteInnerView:{
  flexDirection: "row",
  justifyContent: "center"
},
successView:{
  marginHorizontal: 16
}
});

export default styles