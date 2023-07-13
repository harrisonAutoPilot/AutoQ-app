import { Platform, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  mainContainer: {
    height: '100%',
    width: "100%",

  },
  listContainer: {
    width: wp("100%"),
    alignSelf: "center",
    padding: 10,
  },
  contentCover: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: -11,
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
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "60%"
  },
  titleCover: {
    marginLeft: 10,
    justifyContent: "center"
  },
  imgCover: {
    width: 30,
    height: 30,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusText: {
    color: "#4EA162",
    fontSize: 11,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
  },
  botName: {
    color: "#1B1B1F",
    fontSize: 22,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 28,
  },
  closeCover: {
    justifyContent: "center"
  },
  crossImg: {
    width: 25,
    height: 25,
    borderRadius: 100,
  },
  middleContainer: {
    width: "100%",
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "rgba(121, 116, 126, 0.16)"
  },
  titleText: {
    color: "#767680",
    fontSize: 14,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 20,
  },
  imageCover: {
    width: 130,
    height: 130,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  peopleImg: {
    width: "70%",
    height: 90,
    resizeMode: "contain",
    marginVertical: 10
  },
  contentContainer: {
    width: "100%",
    alignSelf: 'center',
    alignItems: "flex-start",
    paddingBottom:20,
  },
  contentHeader: {
    width: "100%",
    padding: 20,
    alignItems: "flex-start"
  },
  contentHeaderText: {
    color: "#171B2C",
    fontSize: 16,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 20,
  },
  contentBodyCover: {
    width: "100%",
    padding: 20,
    alignItems: "flex-start",
    paddingTop: 10,
  },
  contentBodyText: {
    color: "#424659",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 24,
  },
  contentBodyTextFooter: {
    color: "#424659",
    fontSize: 14,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 24,
    marginTop: 50,
  },
  // this is for the form inputs
  formContainer: {
    paddingTop:20,
    flex: 1
  },

  formFlex: {
    marginBottom: 10,
    alignSelf: "center",
  },


  smErrCover: {
    position: 'absolute',
    width: wp("100%"),
    top: hp("-20%"),
    alignSelf: 'center',
  },
  errCoverTeam: {
    width: wp("100%"),
    alignSelf: 'center'
  },
  submitBtnContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  toastCover: {
    position: "absolute",
    bottom:Platform.OS === "android" ? hp('4%') : hp('7%'),
    alignSelf: 'center',
    width: wp('100%'),
    zIndex: 9000,
  },

  // New form style
  scrollViewContainer:{
    flexGrow: 1,
    paddingBottom: 40
},
  formInputFieldFlex: {
    width: "100%",
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1
  },
  inputFieldView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  inputContainer: {
    width: wp("90%"),
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 20
  },
  formCover:{
    padding:20,
    paddingVertical:15,
    width:wp('90%'),
    borderWidth:1,
    borderColor:"#e6e6e6",
    borderRadius:4,
  },
  formCoverMd:{
    padding:20,
    paddingVertical:15,
    width:wp('62%'),
    borderWidth:1,
    borderColor:"#e6e6e6",
    borderRadius:4,
  },
  codeCover: {
    width: wp("25%"),
    alignItems:"flex-start",
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 10,
    padding:15,
    paddingVertical:15,
    borderWidth:1,
    borderRadius:4,
    borderColor:"#e6e6e6",
  },
  labelStyle:{
    position:'absolute',
    backgroundColor:'#fff',
    marginTop:-8,
    marginLeft:10,
    paddingHorizontal:5,
    zIndex:900
  },
  labelText:{
    color: "#bfbfbf",
    fontSize: 12,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 16,
  },
  fadeText:{
    color: "#bfbfbf",
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    lineHeight: 24,
  }

});

export default styles