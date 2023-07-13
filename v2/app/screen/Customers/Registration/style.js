import { StyleSheet, Dimensions, Platform } from "react-native";
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
        marginBottom: 20
    },
view:{
    flex: 1,
    height: "100%",
    backgroundColor: "#fff"
},
// this is where is started the registration tab
// formContainer:{
//     width:"100%",
//    },
   formFlexInside:{
    width:"100%",
    paddingHorizontal:20,
    zIndex:-2
   },

   // Google Search Field
   containerSearch: {
    borderWidth: 1.2,
    borderColor: '#5A5D72',
    borderRadius: 5,
    marginTop: 15,
    paddingVertical: 4,
    width: "100%",
    flex:0,
},
inputHolder: {
    paddingVertical: Platform.OS === "ios" ? 14 : 4,
    paddingHorizontal: 10,
    marginTop: 15,
    borderRadius: 5,
    width:wp('90%'),
    alignSelf: 'center',
    borderColor: '#5A5D72',
    borderWidth: 1.2
},

getAddress:{
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    backgroundColor: "#3353CB",
    alignItems: "flex-start",
},
getAddressView:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3,

},
labelTitleAddress: {
    fontSize: 16,
    fontFamily: "AnekLatin-Regular",
    color: "#424242",
    letterSpacing: 0.5,
    paddingVertical: Platform.OS === "ios" ? 5:10,
    width: "70%"
},
getAddressText:{
    fontSize: 12,
    fontFamily: "AnekLatin-SemiBold",
    lineHeight: 16,
    color: "#fff",
    letterSpacing: 0.2,
},
countryCodeView: {
    marginBottom: 2,
    zIndex:-2
},
  addressFoundView:{
        alignSelf: "flex-end"
    },
googleContainer:{
    flex: 0,
    width: "95%",
    zIndex:9000,
},
optionCover:{
    width:"100%",
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderColor: "rgba(121, 116, 126, 0.16)",
    paddingVertical:2,
    paddingHorizontal:15,
},
optionView: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "rgba(121, 116, 126, 0.16)",
    alignItems: "center",
    alignContent: "center",
    paddingHorizontal: 16
},
optionActiveTitle: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: "capitalize"

},
arrowBack:{
marginLeft: "7%",
},
optionTitleView: {
    flexDirection: "row",
    alignItems: "center",
},
activeTag:{
width:wp('30%'),
flexDirection:'row',
justifyContent:'space-evenly',
paddingVertical:18,
},
arrowStyle:{
marginLeft:10,
paddingVertical:3,
},
optionTitleInnnerView: {
    flexDirection:'row',
    borderBottomWidth: 0,
    flexDirection:'row',
    borderBottomColor: "rgba(51, 83, 203, 1)",
    paddingVertical: 18,
    // paddingRight: "10%"
},
optionTitleInnnerInactiveView: {
    // paddingRight: "10%",
    flexDirection:'row',
},
optionTitleIconView: {
    paddingVertical: 18,
    marginLeft:"7%"

},
optionTitle: {
    color: "rgba(90, 93, 114, 1)",
    fontSize: 12,
    fontFamily: "AnekLatin-Medium",
    lineHeight: 16,
    letterSpacing: 0.5,
    textTransform: "capitalize"

},

numberCover:{
    width:19,
    height:19,
    borderRadius:50,
    backgroundColor:"rgba(51, 83, 203, 1)",
    alignItems:'center',
    justifyContent:'center',
    marginRight:"7%",

},
numberCoverInActive:{
    width:19,
    height:19,
    borderRadius:50,
    backgroundColor:"rgba(194, 197, 221, 1)",
    alignItems:'center',
    justifyContent:'center',
    marginRight:"7%",   
},
numberText:{
    color: "#fff",
    fontSize: 10,
    fontFamily: "AnekLatin",
    lineHeight: 16,
    letterSpacing: 0.5,
},
// this is for the form
   bottomCover1: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: wp('100%'),
        paddingTop: 10,
        borderColor: '#f5f5f5',
        flexDirection:'column',
        paddingHorizontal:20,
        borderWidth: 0,
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
    },
formContainer:{
    flexDirection:"column",
    justifyContent:"space-between",
    height:Platform.OS === 'android' ? hp('60%') : hp('63%'),
    },
    formContainerStep2:{
        flexDirection:"column",
        justifyContent:"space-between",
        height:Platform.OS === 'android' ? hp('85%') : hp('85%'),
       },
    listContainer:{
    marginTop:20
    },
    typeContainer:{
        marginTop:1
        },
    formInputFieldFlex:{
      width:"100%",
      alignSelf:'center',
      alignItems:'center'
    },
    inputContainer:{
      width:wp("90%"),
      alignSelf:'center',
      flexDirection:'row'
    },
    formFlex: {
      marginBottom: 10,
      alignSelf:"center",
      backgroundColor:"transparent"
    },
    inputFieldView:{
      flexDirection: "row",
      justifyContent:"space-between"
    },
    codeCover:{
      width:wp("28%"),
      alignItems:"center",
      alignSelf:"center",
      justifyContent:"center",
      marginRight:5
    
    },
    smErrCover: {
      position: 'absolute',
      width: wp("100%"),
      top: hp("-20%"),
      alignSelf: 'center',
    },
    errCoverTeam: {
      width:wp("100%"),
      alignSelf:'center'
    },
    submitBtnContainer:{
      width:"100%",
      paddingHorizontal:10,
    },
    submitBtnContainerStep2:{
        marginBottom:20,
        width:"100%",
        paddingHorizontal:20,
        paddingVertical:10,
    },
    toastCover: {
      bottom:Platform.OS === "android" ? hp('4%') : hp('12%'),
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
    },

    // this is for the select category
    renderItemContainer: {
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#C2C5DD",
        borderRadius: 8,
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor:"#fff"
    },
    activeRenderItemContainer: {
        borderColor: "#3353CB",
        backgroundColor: "#DDE1FF"
    },
    categoryTitleView: {
        width: "80%"
    },
    categoryTitle: {
        color: "#171B2C",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.25,
        marginBottom: 4

    },
    categoryDesc: {
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,

    },
    categoryTitleView: {
        width: "80%"
    },
    storeCover:{
        paddingVertical:10,
    },
   bioTitleText: {
        color: 'rgba(90, 93, 114, 1)',
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    codeCover: {
        width: wp("28%"),
        alignItems:"flex-start",
        alignSelf: "center",
        marginTop:14,
        justifyContent: "center",
        marginRight: 10,
        padding:15,
        paddingVertical:16,
        borderWidth:1.3,
        borderRadius:6,
        borderColor: "#5A5D72"
      },
      fadeText:{
       fontSize: 16,
       fontFamily: "AnekLatin-Regular",
       lineHeight: 24,
       color: "rgba(69, 70, 79, 1)",
       letterSpacing: 0.1,  
      },
          btnCover: {
        borderTopColor: "#F5F5F5",
  
        paddingBottom: 30
    },
      bioTitleCover: {
        width: wp('100%'),
        padding:20,
    },
    imgCardCover:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        paddingVertical:25,
        width:wp('95%'),
        alignSelf:'center'
    },
    bottomLine:{
        width:wp('90%'),
        borderBottomColor:"rgba(121, 116, 126, 0.16)",
        borderBottomWidth:1,
    },
    leftCover:{
        flexDirection:'row',
        justifyContent:'center'
    },
    rightCover:{
        flexDirection:'row',
        justifyContent:'center'
    },
    savedCover:{
        paddingHorizontal:10,
        paddingVertical:2,
        backgroundColor:"rgba(197, 255, 203, 1)",
        borderRadius:4,
        height:24,
        alignItems:'center',
        justifyContent:'center'
    },
    savedText:{
        color:"rgba(0, 33, 11, 1)",
        fontSize: 11,
        lineHeight: 16,
        fontFamily: "AnekLatin-Medium",
        letterSpacing: 0.5, 
        textTransform:'uppercase'
    },
    pharmaText:{
        color:"rgba(27, 27, 31, 1)",
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "AnekLatin-SemiBold",
        letterSpacing: 0.5, 
        marginLeft:10,
    },
    addText:{
        color:"rgba(90, 93, 114, 1)",
        fontSize: 14,
        lineHeight: 20,
        fontFamily: "AnekLatin-Regular",
        letterSpacing: 0.5, 
        marginLeft:10,
     
    },

     fiedpadd:{
        width: wp('100%'),
        paddingHorizontal: 20,
        marginTop:-10
    },
    fiedpad:{
        width: wp('100%'),
        paddingHorizontal: 20,
    },
        btnStep3Cover: {
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        paddingVertical: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: Platform.OS === "android" ? Dimensions.get("window").height / 2.6 : Dimensions.get("window").height / 2.9,
    },
 




    // activeText:{
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Medium",
    //    lineHeight: 16,
    //    color: "rgba(0, 0, 0, 1)",
    //    letterSpacing: 0.1,  
    //    paddingHorizontal:5,
    // },
    // numberText:{
    //     fontSize: 11,
    //     fontFamily: "AnekLatin-Medium",
    //     lineHeight:16,
    //     color: "#fff",
    //     letterSpacing: 0.2,
    //     textAlign: "center"
    // },
    // numberCoverUnique:{
    //     width:18,
    //     height:18,
    //     resizeMode:'contain',
    //     borderRadius:40,
    //     backgroundColor:'rgba(51, 83, 203, 1)',
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    // numberCover:{
    //     width:18,
    //     height:18,
    //     resizeMode:'contain',
    //     borderRadius:40,
    //     backgroundColor:'rgba(194, 197, 221, 1)',
    //     alignItems:'center',
    //     justifyContent:'center'
    // },
    // headerText: {
    //     fontSize: 22,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 28,
    //     color: "#fff",
    //     letterSpacing: 0.2,
    //     fontWeight: "400",
    //     textAlign: "center"
    // },
    // mainBody: {
    //     paddingHorizontal: 20,
    //     alignSelf:'center',
    //     width:wp('100%'),
    //     marginTop: 15,
    // },
    // view: {
    //     flex: 1,
    //     backgroundColor: "#fff",
    //     flexGrow: 1,
    //     justifyContent: 'space-between', flexDirection: 'column'
    // },
    // subHeader: {
    //     width:wp('100%'),
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     alignSelf:'center',
    // },
    // activeSubHeader: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('32%'),

    // },
    // inActiveSubHeader:{
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('32%'),
    // },
    // activeSubHeaderCorrect: {
    //     flexDirection: 'row-reverse',
    //     justifyContent: 'space-between',
    //     width: "31%",
    //     height: 45,


    // },
    // activeSubHeaderR1: {
    //     backgroundColor: "red",
    //     flexDirection: 'row-reverse',
    //     justifyContent: 'space-between',
    //     // borderRadius: 20,
    //     width: "31%",
    //     height: 45,
    //     borderBottomWidth: 0,
    //     // borderColor:'#469D00'

    // },
    // activeSubHeader2: {
    //     backgroundColor: "#00319D",
    //     flexDirection: 'row-reverse',
    //     justifyContent: 'space-between',
    //     // borderRadius: 20,
    //     width: "31%",
    //     height: 45,
    //     borderBottomWidth: 0,

    // },

  
    // inActiveSubHeader2: {
    //     backgroundColor: "#E9EBF9",
    //     flexDirection: 'row-reverse',
    //     justifyContent: 'space-between',
    //     // borderRadius: 20,
    //     height: 45,
    //     width: "31%"
    // },
    // activeSubHeaderText: {
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     color: "#fff",
    //     letterSpacing: 0.1,
    //     fontWeight: "600",
    //     textAlign: "center",
    //     marginRight: 37,
    //     marginTop: 2,
    // },
    // activeSubHeaderTextCorrect: {
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     color: "#fff",
    //     letterSpacing: 0.1,
    //     fontWeight: "600",
    //     textAlign: "center",
    //     marginRight: 30,
    //     marginTop: 2,
    // },
    // inActiveSubHeaderText: {
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     color: "#00319D",
    //     letterSpacing: 0.1,
    //     fontWeight: "600",
    //     textAlign: "center",
    //     marginRight: 31,
    //     // marginTop: -10,
    // },
    // miniSubHeaderText:{
    //     marginTop:3,
    //     marginLeft:5,
    // },
    // allOrderText: {
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     color: "#757575",
    //     letterSpacing: 0.3,
    //     fontWeight: "500",
    //     textAlign: "center",
    //     fontStyle: 'normal',
    //     marginLeft: 10,
    //     marginTop: 10,
    // },
    // miniSubHeader: {
    //     // paddingHorizontal: 46,
    //     paddingVertical: 10,
    // },
    // inputHolder: {
    //     borderWidth: 1,
    //     borderColor: "#BDBDBD",
    //     paddingVertical: Platform.OS === "ios" ? 20 : 4,
    //     paddingHorizontal: 10,
    //     marginTop: Dimensions.get("window").height / 30,
    //     borderRadius: 5
    // },
    // inputHolderTetArea: {
    //     borderWidth: 1,
    //     borderColor: "#BDBDBD",
    //     paddingVertical: Platform.OS === "ios" ? 20 : 4,
    //     paddingHorizontal: 10,
    //     marginTop: Dimensions.get("window").height / 30,
    //     borderRadius: 5,
    //     minHeight: 80,
    //     maxHeight: 120

    // },
    // inputHolder2: {
    //     borderWidth: 1,
    //     borderColor: "#BDBDBD",
    //     paddingVertical: Platform.OS === "ios" ? 20 : 18,
    //     paddingHorizontal: 10,
    //     marginTop: Dimensions.get("window").height / 30,
    //     borderRadius: 5
    // },
    // inputMainHolder: {

    //     backgroundColor: '#ffffff',
    //     height: hp('100%'),
    // },
    // labelView: {
    //     position: "absolute",
    //     top: -10,
    //     left: 10,
    //     backgroundColor: "#f3f4f5",
    //     paddingHorizontal: 5
    // },
    // labelView1: {
    //     position: "absolute",
    //     top: -10,
    //     left: 10,
    //     backgroundColor: "#f3f4f5",
    //     paddingHorizontal: 5
    // },
    // label: {
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     color: "rgba(97, 97, 97, 1)",
    //     letterSpacing: 0.2,
    //     fontWeight: "600"
    // },
    // innerLabel: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     // lineHeight: 24,
    //     color: "rgba(33, 33, 33, 1)",
    //     letterSpacing: 0.3,
    //     fontWeight: "400",
    //     marginTop: 5,
    //     width: "70%"
    // },
    // errText: {
    //     color: "red",
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     letterSpacing: 0.2,
    //     fontWeight: "400"
    // },
    // btnCover: {
    //     borderTopColor: "#F5F5F5",
    //     borderTopWidth: 1,
    //     height: "20%",
    //     width: "120%",
    //     backgroundColor: '#f5f5f5',
    //     paddingTop: 30,
    //     alignItems: "center",
    //     paddingHorizontal: 40,
    //     alignSelf: "center",
    //     paddingBottom: 30
    // },
    // smCover:{
    //  width:"100%",
    // paddingBottom:hp('10%')
    // },
    // btnStep2Cover: {
    //     flexDirection: 'row',
    //     borderTopColor: "#F5F5F5",
    //     borderTopWidth: 1,
    //     width:wp('100%'),
    //     backgroundColor: '#f5f5f5',
    //     paddingVertical: 20,
    //     justifyContent: 'space-between',
    //     alignItems: "center",
    //     paddingHorizontal: 20,
    //      marginTop: Dimensions.get("window").height / 10,
    //     alignSelf:"center"

        
    // },


    // btnCover2: {
    //     top: hp("54%")
    // },
    // submit: {
    //     paddingVertical: 16,
    //     paddingHorizontal: 24,
    //     backgroundColor: "#3858CF",
    //     borderRadius: 100,
    //     width: "100%",
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // submitStep2: {
    //     paddingVertical: 16,
    //     paddingHorizontal: 24,
    //     backgroundColor: "#3858CF",
    //     borderRadius: 100,
    //     width: "40%",
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // submitStep3: {
    //     paddingVertical: 16,
    //     paddingHorizontal: 24,
    //     borderRadius: 100,
    //     width: "40%",
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    // angleImg: {
    //     width: 15,
    //     height: 15,
    //     resizeMode: 'contain',
    //     marginLeft: 10,
    // },
    // btnText: {
    //     color: '#fff',
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    //     textAlign: "center"
    // },
    // preText: {
    //     color: '#3858CF',
    //     marginLeft: 10,
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    //     textAlign: "center"
    // },
    // preText1: {
    //     color: '#fff',
    //     marginLeft: 10,
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    //     textAlign: "center"
    // },
    // pinInputView: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     width: "100%",
    //     alignItems: Platform.OS === "android" ? "center" : null
    // },
    // showTextPin: {
    //     color: "#9E9E9E",
    //     fontSize: 11,
    //     // marginTop: Platform.OS === "android" ? 16 : 5,
    //     fontFamily: "AnekLatin-Regular",
    //     // lineHeight: 16,
    //     letterSpacing: 0.2,
    //     fontWeight: "400"
    // },
    // showCover: {
    //     paddingTop: 0,
    //     marginRight: 5,

    // },
    // inputOuterView: {
    //     marginHorizontal: 20,
    //     backgroundColor: '#ffffff'

    // },
    // sucToastCover: {
    //     marginTop: hp('-12%'),
    //     zIndex: 9000,

    // },
    // changeCover: {
    //     width: 50,
    //     position: 'absolute',
    //     right: 2,
    //     marginTop: 22,
    // },


    // // For the new profile page
    // container: {
    //     backgroundColor: '#ffffff',
    //     width: wp('100%'),
    //     // flex: 1,
    //     flexGrow: 1,           
    //     justifyContent: 'space-between' 
    // },
    // topCover: {
    //     flexDirection: 'row',
    //     width: wp('100%'),
    //     padding: 30,

    // },
    // img: {
    //     width: 64,
    //     height: 64,
    //     borderRadius: 100,
    //     resizeMode: 'contain'
    // },
    // imgCover: {
    //     width: 67,
    //     height: 67,
    //     borderWidth: 2,
    //     borderColor: '#fff',
    //     borderStyle: 'solid',
    //     borderRadius: 100,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginRight: 10,
    // },
    // topTextCover: {
    //     padding: 5,
    // },
    // agentNameText: {
    //     color: "#424242",
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 24,
    //     letterSpacing: 0.2,
    //     fontWeight: "600"
    // },
    // agentCodeText: {
    //     color: "#00319D",
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     letterSpacing: 0.3,
    //     fontWeight: "500",
    //     fontStyle: 'normal'
    // },


    // locImgCover: {
    //     width: 25,
    //     height: 25,
    // },
    // locImg: {
    //     width: 18,
    //     height: 18,
    //     resizeMode: 'contain',
    // },
    // locCover: {
    //     flexDirection: 'row',
    //     width: 100,
    // },
    // locTextTitle: {
    //     color: "#616161",
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     letterSpacing: 0.3,
    //     fontWeight: "500",
    //     marginLeft: 5,
    // },
    // locText: {
    //     color: "#424242",
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     letterSpacing: 0.2,
    //     fontWeight: "400"
    // },
    // bankCaption: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     width: wp('80%'),
    //     marginTop: 10
    // },
    // captionText: {
    //     color: "#424242",
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 24,
    //     letterSpacing: 0.2,
    //     fontWeight: "600"
    // },
    // downCover: {
    //     marginTop: 20,
    // },









    // // this is where i start
    // touchstyle: {
    //     backgroundColor: '#E3F6CF',
    // },
    // blueColor: {
    //     backgroundColor: '#00319D',
    //     marginTop: 15,
    // },
    // searchSection: {
    //     flexDirection: 'row',
    //     backgroundColor: '#00319D',
    //     marginHorizontal: 16,
    //     borderRadius: 8,
    //     borderColor: "rgba(255, 255, 255, 0.3)",
    //     borderWidth: 1,
    //     alignItems: "center",
    //     paddingVertical: Platform.OS === "ios" ? 12 : 0,
    //     marginTop: -4,
    // },
    // searchIcon: {
    //     paddingHorizontal: 14,
    //     color: 'rgba(255, 255, 255, 0.8)',
    // },
    // searchImg: {
    //     width: 25,
    //     height: 25,
    //     marginLeft: 20,
    //     marginRight: 10,
    // },
    // statusText: {
    //     color: '#469D00',
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    //     textTransform: 'capitalize',
    // },
    // inputField: {
    //     width: wp('92%'),
    //     color: '#fff',
    //     // borderWidth: 1,
    //     // borderColor: 'rgba(116, 133, 255, 0.32)',
    //     // paddingLeft: 10,
    //     // paddingVertical: Platform.OS === "ios" ? 15:0,
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     letterSpacing: 0.25,
    //     fontWeight: "400",
    //     paddingBottom: 5,

    // },
    // exchangeCover: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 10,
    //     paddingRight: 15,
    //     paddingTop: 10,
    //     // backgroundColor: '#00319D',
    //     // marginTop: -20,
    // },
    // exchangeImg: {
    //     width: 18,
    //     height: 18,
    //     marginTop: 2,
    //     marginBottom: 2
    // },
    // exchangeClickk: {
    //     flexDirection: 'row',
    //     // backgroundColor: '#00319D',
    //     borderRadius: 50,
    //     padding: 4,
    //     paddingLeft: 5,
    //     paddingRight: 5,
    //     borderWidth: 1,
    //     borderColor: '#f5f5f5',
    //     borderStyle: 'solid',
    //     zIndex: 3,
    //     // paddingTop: 3,
    //     // paddingBottom: 3,
    //     alignItems: "center"
    //     // paddingBottom:5,
    //     // paddingTop:5,

    // },
    // exchangeText: {
    //     color: '#424242',
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    //     marginRight: 5,
    //     marginLeft: 2,
    // },
    // cardCover: {
    //     width: wp('90%'),
    //     elevation: 2,
    //     backgroundColor: '#ffffff',
    //     borderRadius: 5,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     padding: 15,
    //     marginBottom: 7,
    //     shadowColor: '#ffffff',
    //     shadowRadius: 4,
    //     shadowOffset: { height: 4, width: 0 },
    //     shadowOpacity: 0.5,

    // },

    // cardTop: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('80%'),
    // },
    // cardMid: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     width: wp('80%'),
    //     paddingTop: 10,
    // },
    // cardDown: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     width: wp('80%'),
    //     paddingTop: 10,
    // },
    // cardDownInner: {
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     width: wp('50%'),
    //     paddingTop: 10,
    // },
    // nameText: {
    //     color: '#3858CF',
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 24,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    // },
    // nameTextActive: {
    //     color: '#469D00',
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 24,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    // },
    // nameTextInAc: {
    //     color: '#D32F2F',
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 24,
    //     fontWeight: "600",
    //     letterSpacing: 0.1,
    // },
    // penText: {
    //     color: '#3858CF',
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     fontWeight: "600",
    //     letterSpacing: 0.2,
    //     fontStyle: 'normal',
    // },
    // actText: {
    //     color: '#469D00',
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     fontWeight: "600",
    //     letterSpacing: 0.2,
    //     fontStyle: 'normal',
    // },
    // inactText: {
    //     color: '#D32F2F',
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     fontWeight: "600",
    //     letterSpacing: 0.2,
    //     fontStyle: 'normal',
    // },
    // phoneText: {
    //     color: '#424242',
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     fontWeight: "normal",
    //     letterSpacing: 0.2,
    //     fontStyle: 'normal',
    // },
    // penCover: {
    //     backgroundColor: '#E9EBF9',
    //     borderRadius: 20,
    //     padding: 5,
    //     paddingLeft: 10,
    //     paddingRight: 10,

    // },
    // actCover: {
    //     backgroundColor: '#E3F6CF',
    //     borderRadius: 20,
    //     padding: 5,
    //     paddingLeft: 10,
    //     paddingRight: 10,

    // },
    // inactCover: {
    //     backgroundColor: 'rgba(211, 47, 47, 0.1)',
    //     borderRadius: 20,
    //     padding: 5,
    //     paddingLeft: 10,
    //     paddingRight: 10,

    // },
    // chat: {
    //     backgroundColor: "#3858CF",
    //     borderRadius: 100,
    //     padding: 20,
    //     position: "absolute",
    //     top: "89%",
    //     right: "3%",
    // },
    // penImg: {
    //     width: 16,
    //     height: 16
    // },
    // innerCover2: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('31%'),
    //     position: 'absolute',
    // },
    // innerCover2a: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('28%'),
    //     position: 'absolute',
    //     backgroundColor: '#00319D',
    //     height: 45,
    // },
    // innerCover: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('28%'),
    //     position: 'absolute',
    //     height: 45,
    // },
    // innerCover1a: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('28%'),
    //     position: 'absolute',
    //     backgroundColor: '#00319D',
    //     height: 45,
    // },
    // innerCover1b: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('30%'),
    //     position: 'absolute',
    //     backgroundColor: '#00319D',
    //     height: 45,
    // },
    // innerCover1c: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: wp('30%'),
    //     position: 'absolute',
    //     backgroundColor: '#00319D',
    //     height: 45,
    // },
    // triangle1: {
    //     // borderLeftWidth: 70,
    //     // borderRightWidth: 0,
    //     // // borderTopWidth:wp('35%'),
    //     // borderTopColor:'yellow',
    //     // borderBottomWidth:wp('35%'),
    //     // borderStyle: 'solid',
    //     // backgroundColor: 'transparent',
    //     // borderLeftColor: 'transparent',
    //     // borderRightColor: 'transparent',
    //     // borderBottomColor: '#00BCD4',
    //     position: 'relative',
    //     transform: [
    //         { rotate: '180deg' }
    //     ]
    // },
    // okk: {
    //     marginRight: 200,

    // },
    // bottomCover: {
    //     alignItems: 'center',
    //     backgroundColor: '#fff',
    //     width: wp('100%'),
    //     paddingTop: 10,
    //     borderColor: '#f5f5f5',
    //     flexDirection:'column',
    //     paddingHorizontal:20,
    //     borderWidth: 1,
    //     flexGrow: 1,            // all the available vertical space will be occupied by it
    //     justifyContent: 'space-between' // will create the gutter between body and footer
    // },
    // bottomCover1: {
    //     alignItems: 'center',
    //     backgroundColor: '#fff',
    //     width: wp('100%'),
    //     paddingTop: 10,
    //     borderColor: '#f5f5f5',
    //     flexDirection:'column',
    //     paddingHorizontal:20,
    //     borderWidth: 0,
    //     flexGrow: 1,            // all the available vertical space will be occupied by it
    //     justifyContent: 'space-between' // will create the gutter between body and footer
    // },
    // formCover:{
    //     paddingHorizontal:20,
    //     width:wp('100%'),
    // },
  
 
    // registerInputHolder: {
    //     // width:wp('90%'),
    //     borderWidth: 1,
    //     borderColor: "#BDBDBD",
    //     paddingVertical: Platform.OS === "ios" ? 20 : 5,
    //     paddingHorizontal: 10,
    //     marginTop: 20,
    //     borderRadius: 5,
    // },
    // inputErrHolder: {
    //     borderColor: "red"
    // },
    // inputPinHolder: {
    //     marginTop: 25,
    // },
    // registerInputPinHolder: {
    //     // marginTop: 20,
    // },
    // labelView: {
    //     position: "absolute",
    //     top: -10,
    //     left: 10,
    //     backgroundColor: "#fff",
    //     paddingHorizontal: 5,
    //     zIndex: 2
    // },
    // label: {
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Medium",
    //     lineHeight: 16,
    //     color: "#616161",
    //     letterSpacing: 0.2,
    // },
    // label2: {
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     color: "#212121",
    //     letterSpacing: 0.2,
    //     fontWeight: "400",
    //     width: "70%"
    // },
    // label3: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Medium",
    //     lineHeight: 24,
    //     color: "#212121",
    //     letterSpacing: 0.2,
    //     width: "70%"
    // },
    // label4: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Medium",
    //     lineHeight: 24,
    //     color: "#212121",
    //     letterSpacing: 0.2,
    //     width: "100%"
    // },
    // loadingLabel: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Medium",
    //     lineHeight: 24,
    //     color: "#BDBDBD",
    //     letterSpacing: 0.2,
    //     width: "100%"
    // },
    // innerLabelPhone2: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Medium",
    //     // lineHeight: 24,
    //     color: "#adadad",
    //     letterSpacing: 0.3,
    //     fontWeight: "400",
    //     marginTop: 3,
    //     marginBottom: 5,
    //     width: "70%",
    //     paddingLeft: 5,
    //     textTransform: "capitalize"
    // },
    // errText: {
    //     color: "red",
    //     fontSize: 12,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     letterSpacing: 0.2,
    //     fontWeight: "400"
    // },
    // pinInputView: {
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     width: "100%",
    //     flexWrap: "wrap"
    // },
    // inputCover: {
    //     width: wp('100%'),
    //     padding: 30,
    //     paddingTop: 5,
    //     backgroundColor: '#fff'


    // },
    // inputPinCover: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between'
    // },
    // changeCover: {
    //     width: 50,
    //     position: 'absolute',
    //     right: 2,
    //     marginTop: 5,
    // },
    // pinView: {
    //     justifyContent: "flex-end",

    // },
    // showTextPin: {
    //     color: "#9E9E9E",
    //     fontSize: 11,
    //     marginTop: Platform.OS === "android" ? 16 : 5,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 16,
    //     letterSpacing: 0.2,
    //     fontWeight: "400"
    // },
    // failedResponseView: {
    //     marginTop: 10,
    //     borderWidth: 1,
    //     borderRadius: 8,
    //     paddingHorizontal: 5,
    //     backgroundColor: "red"
    // },
    // createNewAccountView: {
    //     marginTop: Dimensions.get("window").height / 4.5,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     position: "absolute",
    //     top: 100,
    //     alignSelf: "center"
    // },
    // loginAccountView: {
    //     marginTop: Dimensions.get("window").height / 50,
    //     flexDirection: "row",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     // position: "absolute",
    //     // top: 70,
    //     alignSelf: "center"
    // },
    // createNewAccountText: {
    //     color: "#3858CF",
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     letterSpacing: 0.1,
    //     fontWeight: "600",
    //     textAlign: "center"
    // },
    // createAccountlabel: {
    //     fontSize: 14,
    //     fontFamily: "AnekLatin-Regular",
    //     lineHeight: 20,
    //     color: "#212121",
    //     letterSpacing: 0.25,
    // },
    // innerLabelPhone: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     color: "#adadad",
    //     letterSpacing: 0.3,
    //     fontWeight: "400",
    //     marginTop: 3,
    //     marginBottom: 5,
    //     paddingLeft: 40,
    // },
    // innerLabelPhoneEnabled: {
    //     fontSize: 16,
    //     fontFamily: "AnekLatin-Regular",
    //     color: "#212121",
    //     letterSpacing: 0.3,
    //     fontWeight: "400",
    //     marginTop: 3,
    //     marginBottom: 5,
    //     paddingLeft: 40,
        
    // },
    // flag: {
    //     marginTop: 21,
    //     paddingLeft: 18,
    //     position: 'absolute',
    // },
    // nigImg: {
    //     width: 20,
    //     height: 20,
    //     marginTop:2,
    // },
    // card: {
    //     width: wp('100%'),
    //     paddingHorizontal: 20,
    //     borderBottomWidth: 0.1,
    //     borderColor: '#f2f3f4',
    //     marginTop: -15
    // },
    // cardd: {
    //     width: wp('100%'),
    //      paddingHorizontal: 20,
    //     borderBottomWidth: 0.1,
    //     borderColor: '#f2f3f4',
    //     flexGrow:1,
    //     justifyContent:'space-between'   
    // },
   
   
    // card1: {
    //     // width: wp('100%'),
    //     // paddingHorizontal: 20,
    //     borderTopWidth: 1,
    //     borderColor: '#f2f3f4',
    //     paddingTop: 16

    // },
    // optionView: {
    //     flexDirection: "row",
    //     borderRadius: 8,
    //     borderWidth: 1,
    //     height: 88,
    //     // elevation: 1,
    //     shadowColor: '#000',
    //     shadowOffset: { width: 0, height: 1 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 0.1,
    //     backgroundColor: "#fff",
    //     borderColor: 'rgba(189, 189, 189, 1)',
    //     marginBottom: 10
    // },
    // optionViewBetween1: {
    //     borderColor: "rgba(70, 157, 0, 1)"
    // },
    // optionViewBetween2: {
    //     // marginTop: Dimensions.get("screen").height / 54,
    // },
    // optionIconView: {
    //     backgroundColor: "rgba(70, 157, 0, 0.05)",
    //     width: 44,
    //     borderBottomLeftRadius: 8,
    //     borderTopLeftRadius: 8,
    //     justifyContent: "center",

    // },
    // optionIconView2: {
    //     backgroundColor: "#fff",
    //     width: 44,
    //     borderBottomLeftRadius: 8,
    //     borderTopLeftRadius: 8,
    //     justifyContent: "center"
    // },
    // optionTextView: {
    //     marginLeft: 0,
    //     paddingTop: 8,
    //     width: "85%",
    // },
    // optionTextViewNew: {
    //     marginLeft: 0,
    //     paddingTop: 8,
    //     width: "85%",
    //     backgroundColor: 'rgba(70, 157, 0, 0.05)',

    // },
    // optionText: {
    //     fontFamily: "AnekLatin-Medium",
    //     fontSize: 14,
    //     lineHeight: 20,
    //     letterSpacing: 0.3,
    //     color: "#212121",
    //     textTransform: "capitalize"
    // },
    // onboardSubTitle1: {
    //     fontFamily: "AnekLatin-Medium",
    //     fontSize: 11,
    //     lineHeight: 16,
    //     letterSpacing: 0.2,
    //     color: "rgba(117, 117, 117, 1)",
    // },
    // optionMiniTextView: {
    //     justifyContent: "center",
    //     paddingTop: 6.8,

    // },
    // iconCircle: {
    //     borderColor: "#469D00",
    //     borderWidth: 2,
    //     width: 20,
    //     height: 20,
    //     borderRadius: 15,
    //     alignSelf: "center",
    //     justifyContent: "center",
    // },
    // iconCircle2: {
    //     borderColor: "#BDBDBD",
    //     borderWidth: 2,
    //     width: 20,
    //     height: 20,
    //     borderRadius: 15,
    //     alignSelf: "center",
    //     justifyContent: "center",
    // },
    // icon: {
    //     alignSelf: "center"
    // },
    // loginView: {
    //     marginTop: 20,
    //     // marginTop: Dimensions.get("screen").height / 8,
    //     // position:'absolute',
    //     // top:hp('85%'),
    //     // right:wp('15%'),
    //     flexDirection: "row",
    //     justifyContent: "center"
    // },
    // loginText: {
    //     fontFamily: "AnekLatin-SemiBold",
    //     fontSize: 14,
    //     lineHeight: 20,
    //     letterSpacing: 0.3,
    //     fontWeight: "600",
    //     color: "#3858CF"
    // },
    // redirectIcon: {
    //     flexDirection: "row",
    //     justifyContent: "flex-start"
    // },
    // errMainView: {
    //     top: 0,
    //     width: wp('84%'),
    //     borderWidth: 1,
    //     borderColor: "red",
    //     marginTop: 5,
    //     backgroundColor: "#FFE5E5",
    //     borderRadius: 8,
    //     paddingVertical: 15,
    // },
    // flatCover: {
    //     // marginTop: -25,
    //     // height: 50:0
    //     paddingBottom: 25,
    //     paddingTop: 12
    // },
    // datePickerStyle: {
    //     width: wp('80%'),
    //     margin: -9,
    //     marginLeft: 10,
    // },
    // selectCover: {
    //     // position: 'absolute',
    //     right: 7,
    //     borderWidth: 1,
    //     borderColor: '#7485FF',
    //     backgroundColor: '#E9EBF9',
    //     padding: 5,
    //     borderRadius: 50,
    //     marginTop: Platform.OS === "android" ? -40 : -20,
    //     justifyContent: 'center',
    //     width: 90,
    //     left: wp('58%'),
    //     alignContent: 'center',
    //     paddingLeft: 9
    // },
    // selectText: {
    //     fontFamily: "AnekLatin-Medium",
    //     fontSize: 11,
    //     lineHeight: 16,
    //     letterSpacing: 0.3,
    //     fontWeight: "500",
    //     color: "#3858CF",
    //     textTransform: "capitalize",

    // },

    // calenderImg: {
    //     width: 20,
    //     height: 20,
    //     resizeMode: 'contain'
    // },
    // scrollContentContainer: {
    //    flexGrow:1,
    //    justifyContent:'space-between'
    // },
    // infoCover:{
    //     width:wp('90%'),
    //     flexDirection:'row',
    //     paddingLeft:2,
    //     paddingTop:3,
    //     marginBottom:-8
        
    // },
    // infoText:{
    //     fontFamily: "AnekLatin-Medium",
    //     fontSize: 12,
    //     lineHeight: 16,
    //     letterSpacing: 0.5,
    //     fontWeight: "500",
    //     color: "#3858CF", 
    //     marginLeft:5,
    // },
    // paymentHeader:{
    //     fontFamily: "AnekLatin-SemiBold",
    //     fontSize: 16,
    //     lineHeight: 24,
    //     letterSpacing: 0.1,
    //     color: "#3858CF",   
    //     marginTop:10, 
    // },
    // paymentSmHeader:{
    //     fontFamily: "AnekLatin-Medium",
    //     fontSize: 16,
    //     lineHeight: 24,
    //     letterSpacing: 0.1,
    //     fontWeight: "600",
    //     color: "#212121", 
    //     marginTop:10,    
    // },
    // paymentInputCover:{
    //     width:wp('90%'),
    //     borderWidth:1,
    //     borderColor:'#E0E0E0',
    //     borderRadius:5,
    //     height:60,
    //     alignSelf:'center',
    //     marginTop:5,
    //     flexDirection:'row',
    //     justifyContent:'space-between'

    // },
    // innerPaymentCover:{
    //     flexDirection:'row',
    //     width:100,
    //     marginLeft:20,
    //     marginTop:15,
    // },
    // calendarIcon:{
    //     marginRight:10,
    // },
    // changeStyle:{
    //     fontFamily: "AnekLatin-Regular",
    //     fontSize: 14,
    //     lineHeight: 20,
    //     letterSpacing: 0.1,
    //     fontWeight: "600",
    //     color: "#3858CF", 
    //     marginTop:18, 
    //     marginRight:20,  
    // },
    // colorInfo: {
    //     width: wp('90%'),
    //     flexDirection: 'row',
    //     padding: 20,
    //     backgroundColor: 'rgba(56, 88, 207, 0.16)',
    //     justifyContent: 'space-between',
    //     borderRadius: 10,
    //     alignSelf: 'center',
    //     marginTop:10,
    // },
    // iconInfo: {
    //     marginRight: 10,
    //     marginTop: 5,
    // },
    // smTitleCover:{
    // flexDirection:'row',
    // justifyContent:'flex-start',
    // width:wp('80%'),
    // alignSelf:'center'
    // },
   
   
    // smTitle:{
    //   fontFamily: "AnekLatin-Regular",
    //   fontSize: 16,
    //   lineHeight: 24,
    //   letterSpacing: 0.2,
    //   color: "#1C1B1F",
    //   fontWeight:'400',
    //   paddingBottom:15,
    //   paddingLeft:5,
      
    // },
    // colorInfoText: {
    //     fontFamily: "AnekLatin-SemiBold",
    //     fontSize: 12,
    //     lineHeight: 16,
    //     letterSpacing: 0.2,
    //     color: "#00319D",
    //     width: 270,
    //     flexWrap: 'wrap',
    //     flex: 1,
    
    // },
    // paymentOptionText:{
    //     color:'#212121',
    //     fontFamily: "AnekLatin-Medium",
    //     fontSize: 16,
    //     lineHeight: 24,
    //     letterSpacing: 0.2,
    //     fontWeight:'600',
    // }

})