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
        paddingHorizontal: 20,
        // flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // backgroundColor:'#fff',
        marginTop: 15,
    },
    view: {
        flex: 1,
        backgroundColor: "#fff",
        flexGrow: 1,
        justifyContent: 'space-between', flexDirection: 'column'
    },
    subHeader: {

        // borderTopLeftRadius: 20,
        backgroundColor: '#ffffff',
        borderColor: "#3858CF",
        borderTopWidth: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 15,
        // padding:1,
    },
    activeSubHeader: {
        backgroundColor: "#00319D",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        // borderRadius: 20,
        width: "32%",
        height: 45,
        borderBottomWidth: 0,
        // borderColor:'#469D00'

    },
    activeSubHeader2: {
        backgroundColor: "#00319D",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        // borderRadius: 20,
        width: "32%",
        height: 45,
        borderBottomWidth: 0,

        // borderColor:'#469D00'

    },

    inActiveSubHeader: {
        backgroundColor: "#E9EBF9",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        // borderRadius: 20,
        height: 45,
        width: "32%"
    },
    inActiveSubHeader2: {
        backgroundColor: "#E9EBF9",
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        // borderRadius: 20,
        height: 45,
        width: "32%"
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center",
        marginRight: 37,
        marginTop: 2,
    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#00319D",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center",
        marginRight: 37,
        marginTop: 2,
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
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5
    },
    inputHolderTetArea: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 4,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5,
        minHeight: 80,
        maxHeight: 120

    },
    inputHolder2: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 18,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5
    },
    inputMainHolder: {

        backgroundColor: '#ffffff',
        height: hp('100%'),
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
        paddingHorizontal: 5
    },
    labelView1: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
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
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 5,
        width: "70%"
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
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        height: "20%",
        width: "120%",
        backgroundColor: '#f5f5f5',
        paddingTop: 20,
        alignItems: "center",
        paddingHorizontal: 40,
        alignSelf: "center",
        paddingBottom: 20
    },
    smCover:{
     flexGrow:1,
     justifyContent:'space-between',
     width:"100%",
     paddingTop: 10,
    paddingBottom:20
    },
    btnStep2Cover: {
        flexDirection: 'row',
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        width:wp('100%'),
         backgroundColor: '#f5f5f5',
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        zIndex:90,
         marginTop: Dimensions.get("window").height / 9,
        alignSelf:"center"
    },
    btnStep3Cover: {
        flexDirection: 'row',
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        width:wp('100%'),
        backgroundColor: '#f5f5f5',
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: Dimensions.get("window").height / 2.6,
        alignSelf:"center"
    },

    btnCover2: {
        top: hp("54%")
    },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitStep2: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "40%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitStep3: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 100,
        width: "40%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    angleImg: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    preText: {
        color: '#3858CF',
        marginLeft: 10,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    preText1: {
        color: '#fff',
        marginLeft: 10,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
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
        backgroundColor: '#ffffff',
        width: wp('100%'),
        // flex: 1,
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
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
    agentNameText: {
        color: "#424242",
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        letterSpacing: 0.2,
        fontWeight: "600"
    },
    agentCodeText: {
        color: "#00319D",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "500",
        fontStyle: 'normal'
    },


    locImgCover: {
        width: 25,
        height: 25,
    },
    locImg: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
    locCover: {
        flexDirection: 'row',
        width: 100,
    },
    locTextTitle: {
        color: "#616161",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "500",
        marginLeft: 5,
    },
    locText: {
        color: "#424242",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    bankCaption: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('80%'),
        marginTop: 10
    },
    captionText: {
        color: "#424242",
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        letterSpacing: 0.2,
        fontWeight: "600"
    },
    downCover: {
        marginTop: 20,
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
        width: wp('90%'),
        elevation: 2,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginBottom: 7,
        shadowColor: '#ffffff',
        shadowRadius: 4,
        shadowOffset: { height: 4, width: 0 },
        shadowOpacity: 0.5,

    },

    cardTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('80%'),
    },
    cardMid: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('80%'),
        paddingTop: 10,
    },
    cardDown: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('80%'),
        paddingTop: 10,
    },
    cardDownInner: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('50%'),
        paddingTop: 10,
    },
    nameText: {
        color: '#3858CF',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        fontWeight: "600",
        letterSpacing: 0.1,
    },
    nameTextActive: {
        color: '#469D00',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        fontWeight: "600",
        letterSpacing: 0.1,
    },
    nameTextInAc: {
        color: '#D32F2F',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        fontWeight: "600",
        letterSpacing: 0.1,
    },
    penText: {
        color: '#3858CF',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        fontWeight: "600",
        letterSpacing: 0.2,
        fontStyle: 'normal',
    },
    actText: {
        color: '#469D00',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        fontWeight: "600",
        letterSpacing: 0.2,
        fontStyle: 'normal',
    },
    inactText: {
        color: '#D32F2F',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        fontWeight: "600",
        letterSpacing: 0.2,
        fontStyle: 'normal',
    },
    phoneText: {
        color: '#424242',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "normal",
        letterSpacing: 0.2,
        fontStyle: 'normal',
    },
    penCover: {
        backgroundColor: '#E9EBF9',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,

    },
    actCover: {
        backgroundColor: '#E3F6CF',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,

    },
    inactCover: {
        backgroundColor: 'rgba(211, 47, 47, 0.1)',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,

    },
    chat: {
        backgroundColor: "#3858CF",
        borderRadius: 100,
        padding: 20,
        position: "absolute",
        top: "89%",
        right: "3%",
    },
    penImg: {
        width: 16,
        height: 16
    },
    innerCover2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('30%'),
        position: 'absolute',
    },
    innerCover2a: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('30%'),
        position: 'absolute',
        backgroundColor: '#00319D',
        height: 45,
    },
    innerCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('30%'),
        position: 'absolute',
        height: 45,
    },
    innerCover1a: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('30%'),
        position: 'absolute',
        backgroundColor: '#00319D',
        height: 45,
    },
    innerCover1b: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('30%'),
        position: 'absolute',
        backgroundColor: '#00319D',
        height: 45,
    },
    innerCover1c: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('30%'),
        position: 'absolute',
        backgroundColor: '#00319D',
        height: 45,
    },
    triangle1: {
        // borderLeftWidth: 70,
        // borderRightWidth: 0,
        // // borderTopWidth:wp('35%'),
        // borderTopColor:'yellow',
        // borderBottomWidth:wp('35%'),
        // borderStyle: 'solid',
        // backgroundColor: 'transparent',
        // borderLeftColor: 'transparent',
        // borderRightColor: 'transparent',
        // borderBottomColor: '#00BCD4',
        position: 'relative',
        transform: [
            { rotate: '180deg' }
        ]
    },
    okk: {
        marginRight: 200,

    },
    bottomCover: {
        alignItems: 'center',
        backgroundColor: '#fff',
        width: wp('100%'),
        paddingTop: 10,
        borderColor: '#f5f5f5',
        flexDirection:'column',
        borderWidth: 1,
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer
    },
    bioTitleCover: {
        width: wp('100%'),
        paddingLeft:20,
    },
    bioTitleText: {
        color: '#3858CF',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    registerInputHolder: {
        // width:wp('90%'),
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    inputErrHolder: {
        borderColor: "red"
    },
    inputPinHolder: {
        marginTop: 25,
    },
    registerInputPinHolder: {
        // marginTop: 20,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
    },
    label2: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        width: "70%"
    },
    label3: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.2,
        width: "70%"
    },
    label4: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.2,
        width: "100%"
    },
    loadingLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        lineHeight: 24,
        color: "#BDBDBD",
        letterSpacing: 0.2,
        width: "100%"
    },
    innerLabelPhone2: {
        fontSize: 16,
        fontFamily: "Urbanist-Medium",
        // lineHeight: 24,
        color: "#adadad",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 3,
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
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap"
    },
    inputCover: {
        width: wp('100%'),
        padding: 30,
        paddingTop: 5,
        backgroundColor: '#fff'


    },
    inputPinCover: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeCover: {
        width: 50,
        position: 'absolute',
        right: 2,
        marginTop: 5,
    },
    pinView: {
        justifyContent: "flex-end",

    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        marginTop: Platform.OS === "android" ? 16 : 5,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    failedResponseView: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: "red"
    },
    createNewAccountView: {
        marginTop: Dimensions.get("window").height / 4.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 100,
        alignSelf: "center"
    },
    loginAccountView: {
        marginTop: Dimensions.get("window").height / 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // position: "absolute",
        // top: 70,
        alignSelf: "center"
    },
    createNewAccountText: {
        color: "#3858CF",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    },
    createAccountlabel: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.25,
    },
    innerLabelPhone: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        color: "#adadad",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 3,
        marginBottom: 5,
        paddingLeft: 40,
    },
    innerLabelPhoneEnabled: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        color: "#212121",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 3,
        marginBottom: 5,
        paddingLeft: 40,
    },
    flag: {
        marginTop: 21,
        paddingLeft: 18,
        position: 'absolute',
    },
    nigImg: {
        width: 20,
        height: 20,
    },
    card: {
        width: wp('100%'),
        paddingHorizontal: 20,
        borderBottomWidth: 0.1,
        borderColor: '#f2f3f4',
        marginTop: -15
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
    cardd: {
        width: wp('100%'),
        // paddingHorizontal: 20,
        borderBottomWidth: 0.1,
        borderColor: '#f2f3f4',
        
        
    },
    card1: {
        // width: wp('100%'),
        // paddingHorizontal: 20,
        borderTopWidth: 1,
        borderColor: '#f2f3f4',
        paddingTop: 16

    },
    optionView: {
        flexDirection: "row",
        borderRadius: 8,
        borderWidth: 1,
        height: 88,
        // elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 0.1,
        backgroundColor: "#fff",
        borderColor: 'rgba(189, 189, 189, 1)',
        marginBottom: 10
    },
    optionViewBetween1: {
        borderColor: "rgba(70, 157, 0, 1)"
    },
    optionViewBetween2: {
        // marginTop: Dimensions.get("screen").height / 54,
    },
    optionIconView: {
        backgroundColor: "rgba(70, 157, 0, 0.05)",
        width: 44,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: "center",

    },
    optionIconView2: {
        backgroundColor: "#fff",
        width: 44,
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        justifyContent: "center"
    },
    optionTextView: {
        marginLeft: 0,
        paddingTop: 8,
        width: "85%",
    },
    optionTextViewNew: {
        marginLeft: 0,
        paddingTop: 8,
        width: "85%",
        backgroundColor: 'rgba(70, 157, 0, 0.05)',

    },
    optionText: {
        fontFamily: "Urbanist-Medium",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.3,
        color: "#212121",
        textTransform: "capitalize"
    },
    onboardSubTitle1: {
        fontFamily: "Urbanist-Medium",
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.2,
        color: "rgba(117, 117, 117, 1)",
    },
    optionMiniTextView: {
        justifyContent: "center",
        paddingTop: 4,

    },
    iconCircle: {
        borderColor: "#469D00",
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
    loginView: {
        marginTop: 20,
        // marginTop: Dimensions.get("screen").height / 8,
        // position:'absolute',
        // top:hp('85%'),
        // right:wp('15%'),
        flexDirection: "row",
        justifyContent: "center"
    },
    loginText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        color: "#3858CF"
    },
    redirectIcon: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    errMainView: {
        top: 0,
        width: wp('84%'),
        borderWidth: 1,
        borderColor: "red",
        marginTop: 5,
        backgroundColor: "#FFE5E5",
        borderRadius: 8,
        paddingVertical: 15,
    },
    flatCover: {
        // marginTop: -25,
        // height: 50:0
        paddingBottom: 25,
        paddingTop: 12
    },
    datePickerStyle: {
        width: wp('80%'),
        margin: -9,
        marginLeft: 10,
    },
    selectCover: {
        // position: 'absolute',
        right: 7,
        borderWidth: 1,
        borderColor: '#7485FF',
        backgroundColor: '#E9EBF9',
        padding: 5,
        borderRadius: 50,
        marginTop: -40,
        justifyContent: 'center',
        width: 90,
        left: wp('58%'),
        alignContent: 'center',
        paddingLeft: 9
    },
    selectText: {
        fontFamily: "Urbanist-Medium",
        fontSize: 11,
        lineHeight: 16,
        letterSpacing: 0.3,
        fontWeight: "500",
        color: "#3858CF",
        textTransform: "capitalize",

    },

    calenderImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    scrollContentContainer: {
        flexGrow: 1,
       
    },
    infoCover:{
        width:wp('90%'),
        flexDirection:'row',
        paddingLeft:2,
        paddingTop:3,
        marginBottom:-8
        
    },
    infoText:{
        fontFamily: "Urbanist-Medium",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5,
        fontWeight: "500",
        color: "#3858CF", 
        marginLeft:5,
    },
    paymentHeader:{
        fontFamily: "Urbanist-SemiBold",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        color: "#3858CF",   
        marginTop:10, 
    },
    paymentSmHeader:{
        fontFamily: "Urbanist-Medium",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: "#212121", 
        marginTop:10,    
    },
    paymentInputCover:{
        width:wp('90%'),
        borderWidth:1,
        borderColor:'#E0E0E0',
        borderRadius:5,
        height:60,
        alignSelf:'center',
        marginTop:5,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    innerPaymentCover:{
        flexDirection:'row',
        width:100,
        marginLeft:20,
        marginTop:15,
    },
    calendarIcon:{
        marginRight:10,
    },
    changeStyle:{
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: "#3858CF", 
        marginTop:18, 
        marginRight:20,  
    },
    colorInfo: {
        width: wp('90%'),
        flexDirection: 'row',
        padding: 20,
        backgroundColor: 'rgba(56, 88, 207, 0.16)',
        justifyContent: 'space-between',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop:10,
    },
    iconInfo: {
        marginRight: 10,
        marginTop: 5,
    },
    smTitleCover:{
    flexDirection:'row',
    justifyContent:'flex-start',
    width:wp('80%'),
    alignSelf:'center'
    },
   
   
    smTitle:{
      fontFamily: "Urbanist-Regular",
      fontSize: 16,
      lineHeight: 24,
      letterSpacing: 0.2,
      color: "#1C1B1F",
      fontWeight:'400',
      paddingBottom:15,
      paddingLeft:5,
      
    },
    colorInfoText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.2,
        color: "#00319D",
        width: 270,
        flexWrap: 'wrap',
        flex: 1,
    
    },
    paymentOptionText:{
        color:'#212121',
        fontFamily: "Urbanist-Medium",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.2,
        fontWeight:'600',
    }

})