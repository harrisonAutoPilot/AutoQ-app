import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const screenHeight = Dimensions.get('screen').height

export default styles = StyleSheet.create({
    nameContainer:{
    width:wp('100%'),
    padding:10,
    paddingVertical:15,
    flexDirection:'row',
    justifyContent:'space-between',

    },

    leftContainer:{
        width:wp('70%'),
        pading:10,
        flexDirection:'row',
        justifyContent:'center'
    },
    circleContainer:{
        width:45,
        height:45,
        borderRadius:100,
        backgroundColor:'rgba(120, 144, 156, 1)',
        alignItems:"center",
        justifyContent:'center'
    },
    detailContainer:{
     width:wp('52%'),
     marginLeft:10,
    },
    statusContainer:{
    paddingHorizontal:10,
    justifyContent:'center',
    alignItems:'center',
    width:60,
    height:20,
    backgroundColor:"rgba(197, 255, 203, 1)",
    borderRadius:10,
    marginVertical:5,
    // paddingBottom:5,
    },
    customerNameText:{
        color: "rgba(44, 47, 66, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
    },
    shortText:{
        color: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        textTransform:'capitalize'
    },
    statusNameText:{
        color: "rgba(0, 57, 23, 1)",
        fontSize: 11,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 16,
        textTransform:'capitalize',
        paddingBottom:5,
    },
    rightContainer:{
        height:35,
        paddingHorizontal:10,
        paddingVertical:5,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1,
        borderColor:"rgba(194, 197, 221, 1)",
        width:75,
        marginTop:5,
        marginRight:15,
    },
    editText:{
        color: "rgba(27, 27, 31, 1)",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        textTransform:'capitalize'
    },
    subHeader: {
        width:wp('93%'),
        backgroundColor: 'rgba(121, 116, 126, 0.12)',
        borderRadius:30,
        flexDirection: "row",
        justifyContent: "space-between",
        padding:5,
        alignItems: "center",
        alignSelf:'center'

    },
    activeSubHeader: {
        width: wp('30%'),
        backgroundColor: '#000',
        borderRadius:30,
        justifyContent:'center',
        verticalAlign:'middle',
        alignItems: "center",
        paddingVertical:5,

    },
    inActiveSubHeader: {
        width: wp('30%'),
    },
    activeSubHeaderText: {
        fontSize: 11,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        color: "rgba(255, 255, 255, 1)",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    inActiveSubHeaderText: {
        fontSize: 11,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        color: "rgba(66, 66, 66, 1)",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    middle:{
        width:"100%",
        paddingHorizontal:5,
        paddingVertical:15,
        backgroundColor:"#fff",
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:"#f5f5f5",
        borderBottomWidth:1,
      },
      // this is where the card start
      card:{
      width:"100%",
      paddingVertical:4,
      flexDirection:'row',
      justifyContent:"space-between",
      },
      penCover:{
        justifyContent:'center',
        alignItems:'flex-end',
        width:50,
      },
      left:{
        width:"95%",
        alignItems:"flex-start",
        justifyContent:'center',
        
      },
      right:{
        width:"20%",
        alignItems:"center",
        justifyContent:'center',
      },
      phoneText:{
        color: "#1B1B1F",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        letterSpacing:0.5,
      },
      numberText:{
        color: "#45464F",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
      },
      bottomCover: {
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 5,
        paddingBottom:40,

    },
    viewStoreTitleCover: {
        width: wp('100%'),
       flexDirection: 'row',
       paddingTop: 16,
       alignItems: 'center',
       justifyContent: 'center',
       borderWidth:0,
       borderColor:'#212121'
   },
   viewStoreTitleInner: {
       width: wp('85%'),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:12,
      paddingLeft:16,
      paddingRight:16,
      paddingBottom: 12,
      borderRadius:50,
      borderWidth:1,
      borderColor:'rgba(51, 83, 203, 1)'
  },
   viewStoreTitleText: {
       color: 'rgba(51, 83, 203, 1)',
       fontSize: 14,
       fontFamily: "AnekLatin-Medium",
       lineHeight: 20,
       letterSpacing: 0.1,
       fontStyle: 'normal',
   },

 cardCover:{
      width:"95%",
      alignSelf:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      backgroundColor:"#fff",
      padding:10,
      marginVertical:5
    },
    cardTop:{
      width:wp('60%'),
      padding:5,
      alignItems:'flex-start',
    },
    orderNumberText:{
      color: "#1B1B1F",
      fontSize: 16,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight: 24,
    },
    descText:{
      color: "#45464F",
      fontSize: 14,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 20,
      marginTop:5,
      textTransform: "capitalize"
    },
    countText:{
      color:"#5A5D72",
      fontSize: 12,
      fontFamily: "AnekLatin-Regular",
      lineHeight: 16,
    },
    amountText:{
      color: "#45464F",
      fontSize: 14,
      fontFamily: "AnekLatin-SemiBold",
      lineHeight: 20,
    },
    amountCover:{
      paddingRight:10,
      paddingTop:10,
    },
    statusCover:{
      paddingHorizontal:8,
      paddingVertical:3,
      backgroundColor:"#E3F3FF",
      borderRadius:20,
      marginBottom:8
    },
    statusText:{
      color: "#001E2C",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 16,
    },
    deliveredCover:{
      flexDirection:"row",
      justifyContent:'center',
      alignItems:"center",
      borderRadius:20,
      paddingHorizontal:8,
      paddingVertical:3,
      backgroundColor:"#106D34",
      marginBottom:5

    },
    deliverText:{
      color: "#FFFFFF",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 16,
      marginLeft:5
    },
    cancelCover:{
      flexDirection:"row",
      justifyContent:'center',
      alignItems:"center",
      borderRadius:20,
      paddingHorizontal:8,
      paddingVertical:3,
      backgroundColor:"#FFDAD6",
      marginBottom:5,
      borderWidth: 1,
      borderColor: "rgba(255, 180, 171, 1)"

    },
    cancelText:{
      color: "#410002",
      fontSize: 11,
      fontFamily: "AnekLatin-Medium",
      lineHeight: 16,
    },

























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
    headerText: {
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    mainBody: {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        backgroundColor: '#fff',
    },
   
    view: {
        flex: 1,
        backgroundColor: "#fff"
    },

    allOrderText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#757575",
        letterSpacing: 0.3,
        fontWeight: "500",
        textAlign: "center",
        fontStyle: 'normal',
        marginLeft: 10,
        marginTop: 10,
    },
    miniSubHeader: {
        // paddingHorizontal: 46,
        paddingVertical: 10,
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 4,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 45,
        borderRadius: 5
    },
    inputHolder2: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 4,
        paddingHorizontal: 10,
        marginTop: -20,
        borderRadius: 5
    },
    inputMainHolder: {
        backgroundColor: '#ffffff',
        width: wp('100%'),
        // paddingBottom: 20
    },
    labelView: {
        position: "absolute",
        top:-8,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5
    },
    labelView1: {
        position: "absolute",
        top:Platform.OS === "android" ?  -8 : -15,
        left: 5,
        backgroundColor: "#fff",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.2,
    },
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 5,
        width: "70%",
        paddingLeft: 5,

    },
    innerLabelPhone: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        // lineHeight: 24,
        color: "#adadad",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 3,
        marginBottom: 5,
        width: "70%",
        paddingLeft: 40,
    },
    innerLabelPhone2: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        // lineHeight: 24,
        color: "#adadad",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: -3,
        marginBottom: 5,
        width: "70%",
        paddingLeft: 5,
        textTransform: "capitalize"
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    btnCover: {
        width: "100%",
        backgroundColor: '#fafafa',
        paddingVertical: 30,
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop:Platform.OS === "android" ? 15 : 60,
    },
    btnCover2: {
        top: hp("54%")
    },
    inputErrHolder: {
        borderColor: "red"
    },
    inputNotErrHolder: {
        borderColor: "rgba(56, 88, 207, 1)"
    },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "100%",
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
        textAlign: "center"
    },
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        // flexWrap: "wrap",
        alignItems: Platform.OS === "android" ? "center" : null
    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        // marginTop: Platform.OS === "android" ? 16 : 5,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    showCover: {
        paddingTop: 0,
        marginRight: 5,

    },
    inputOuterView: {
        marginHorizontal: 20,
        backgroundColor: '#ffffff'

    },
    sucToastCover: {
        marginTop: hp('-12%'),
        zIndex: 9000,

    },
    changeCover: {
        width: 50,
        position: 'absolute',
        right: 2,
        marginTop: 22,
    },


    // For the new profile page
    container: {
        backgroundColor: '#fff',
        width: wp('100%'),
        flex: 1,
        // height: "100%"

    },
    topCover: {
        flexDirection: 'row',
        width: wp('100%'),
        padding: 30,

    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    imgCover: {
        width: 67,
        height: 67,
        borderWidth: 2,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    topTextCover: {
        padding: 5,
    },


    bottomCoverOrder: {
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        // height:hp('30%'),
        paddingTop: 1,
        marginBottom: 30,
        maxHeight: screenHeight,
    },

    inputHolderSelect: {
        width: wp('87%'),
        borderWidth: 1,
        borderColor: "#757575",
        paddingVertical: Platform.OS === "ios" ? 1 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 32,
        borderRadius: 5,
        marginLeft: 24,
    },



    // this is where i start
    touchstyle: {
        backgroundColor: '#E3F6CF',
    },
    blueColor: {
        backgroundColor: '#00319D',
        marginTop: 15,
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: '#00319D',
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginTop: -4,
    },
    searchIcon: {
        paddingHorizontal: 14,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    searchImg: {
        width: 25,
        height: 25,
        marginLeft: 20,
        marginRight: 10,
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
    inputField: {
        width: wp('92%'),
        color: '#fff',
        // borderWidth: 1,
        // borderColor: 'rgba(116, 133, 255, 0.32)',
        // paddingLeft: 10,
        // paddingVertical: Platform.OS === "ios" ? 15:0,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400",
        paddingBottom: 5,

    },
    exchangeCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingRight: 15,
        paddingTop: 10,
        // backgroundColor: '#00319D',
        // marginTop: -20,
    },
    exchangeImg: {
        width: 18,
        height: 18,
        marginTop: 2,
        marginBottom: 2
    },
    exchangeClickk: {
        flexDirection: 'row',
        // backgroundColor: '#00319D',
        borderRadius: 50,
        padding: 4,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderStyle: 'solid',
        zIndex: 3,
        // paddingTop: 3,
        // paddingBottom: 3,
        alignItems: "center"
        // paddingBottom:5,
        // paddingTop:5,

    },
    exchangeText: {
        color: '#424242',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        marginRight: 5,
        marginLeft: 2,
    },

    cardCover: {
        borderTopWidth: 2,
        borderColor: "rgba(238, 238, 238, 1)",
        width: wp('100%'),
        marginTop:20,
        elevation: 2,
        borderTopWidth:0,
        borderTopColor:"#eeeeee",
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingTop: 20,
        marginTop:Platform.OS === "android" ?  4 : 20,
        shadowColor: '#ffffff',
        shadowRadius: 4,
        shadowOffset: { height: 5, width: 5 },
        shadowOpacity: 0.5,
    },
    cardCoverOrder: {
        width: wp('100%'),
        elevation: 2,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // marginBottom:10,
        marginTop: 2,
        shadowColor: '#ffffff',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,

    },
    penImg: {
        width: 16,
        height: 16
    },
    // statusContainer: {
    //     width: wp('90%'),
    //     shadowOffset: { width: 5, height: 5 },
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     padding: 15,
    //     backgroundColor: '#fff',
    //     borderRadius: 10,
    //     marginBottom:Platform.OS === "android" ? 10 :  20,
    //     elevation: 10,
    //     shadowOpacity: 0.1,
    //     shadowColor: "rgba(0, 49, 157, 1)",

    // },
    dateTitle: {
        color: '#757575',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,
        marginBottom: 8,
    },
    date: {
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
        fontStyle: 'normal',
    },
    dateCover: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: wp('50%'),
    },
    statusCover: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: wp('50%'),
    },
    statusTitle: {
        color: '#757575',
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontStyle: 'normal',
    },
    activeBtn: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
        backgroundColor: '#469D00',
        marginTop: 5,
    },
    activeBtn2: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(211, 47, 47, 1)',
        marginTop: 5,
    },
    activeBtnText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    bioTitleCover: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingTop:Platform.OS === "android" ? 2 : 10,
        width: wp('88%'),
        marginBottom: 5,
        paddingLeft:35,
    },
    bioText: {
        color: '#3858CF',
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.2,
    },
    flag: {
        marginTop: 21,
        paddingLeft: 15,
        position:'absolute'
    },
    nigImg: {
        width: 20,
        height: 20,
    },

    docTitleCover: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        width: wp('88%'),
        // paddingLeft: 25,
    },
    smCardCover: {
        width: wp('100%'),
        alignItems: 'center',
    },
    smCard: {
        flexDirection: 'row',
        width: wp('90%'),
        paddingVertical: 10,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
        justifyContent: 'space-between',
        paddingHorizontal: 5
    },
    smCard2: {
        flexDirection: 'row',
        width: wp('90%'),
        paddingHorizontal: 10,
        paddingTop: 20,
        justifyContent: 'space-between'
    },
    docTitle: {
        color: '#616161',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "500",
        letterSpacing: 0.3,
        fontStyle: 'normal',
    },
    docFeature: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 120,
    },
    docViewText: {
        color: '#3858CF',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "500",
        letterSpacing: 0.3,
        fontStyle: 'normal',
    },
    docChangeText: {
        color: '#D32F2F',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "500",
        letterSpacing: 0.3,
        fontStyle: 'normal',
    },
    rightImg: {
        width: 12,
        height: 12,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    // this is for the customer order infor
    cardTop: {
        width: wp('90%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

        borderWidth: 0,
        borderColor: '#f2f2f2'
    },
    priceText: {
        color: '#3858CF',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        fontWeight: "600",
        letterSpacing: 0.1,
        fontStyle: 'normal',
    },
    dateText: {
        color: '#757575',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "normal",
        letterSpacing: 0.1,
        fontStyle: 'normal',
        marginTop: 5,
    },
    cardMid: {
        width: wp('90%'),
        flexDirection: 'column',
        padding: 10,
        justifyContent: 'flex-start',
    },
    quantityText: {
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        fontWeight: "600",
        letterSpacing: 0.1,
        fontStyle: 'normal',
        marginTop: 2,
    },
    descText: {
        color: '#9E9E9E',
        width: wp('70%'),
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "normal",
        letterSpacing: 0.1,
        fontStyle: 'normal',
        marginTop: 2,
        textTransform:'capitalize'
    },
    cardDown: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('90%'),
        padding: 10,

    },
    cardDownDelivered: {
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#E3F6CF',
        borderRadius: 50,

    },
    delieveredText: {
        color: '#469D00',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        fontStyle: 'normal',
    },
    cardDownInner: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    reorderText: {
        color: '#757575',
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        fontWeight: "500",
        letterSpacing: 0.2,
        fontStyle: 'normal',
        marginRight: 5,


    },
    refreshImg: {
        width: 12,
        height: 12,
        resizeMode: 'contain',

    },
    inbtwStore:{
        marginTop: 20
    },

    // the card
    walletContainer:{
        width:wp("90%"),
        height:100,
        borderRadius:10,
        backgroundColor:'red',
        alignSelf:'center',
        alignItems:'center',
        marginVertical:20,
        justifyContent:'center'
    },
    amountText:{
        color: '#ffffff',
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2, 
        marginTop:10
    },
    walletCaption:{
        color: '#ffffff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.2, 
    },
    waveImg:{
        width:wp("80%"),
        height:120,
        resizeMode:'contain',
        position:'absolute'
    },
    middleContainer:{
        width:wp("90%"),
        alignSelf:'center',
        paddingHorizontal:5,
        flexDirection:"row",
        justifyContent:'space-between'
    },
    historyText:{
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        letterSpacing: 0.3,   
    },
    sortText:{
        color: '#424242',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.3,   
    },
    reverseContainer:{
    flexDirection:"row",
    justifyContent:'center',
    borderRadius:20,
    borderWidth:1,
    borderColor:"#E0E0E0",
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:"#fafafa"
    },
    reverseImg:{
        width:15,
        height:15,
        resizeMode:"contain",
      
    },
    bottomContainer:{
        width:wp("100%"),
        height:hp("60%"),
        // backgroundColor:'red',
        marginTop:10,
        
    },   
})