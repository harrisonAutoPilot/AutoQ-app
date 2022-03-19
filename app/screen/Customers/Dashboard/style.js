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
        // paddingHorizontal: 20,
        // flex: 1,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        backgroundColor: '#fff',
        marginTop: 30,
    },
    view: {
        flex: 1,
        backgroundColor: "#00319D",
    },
    subHeader: {
        borderRadius: 20,
        // borderTopLeftRadius: 20,
        backgroundColor: '#ffffff',
        borderColor: "#3858CF",
        borderWidth: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: 5
    },
    activeSubHeader: {
        // backgroundColor: "#3858CF",
        // borderRadius: 20,
        width: "35%",
        borderBottomWidth: 5,
        borderColor: '#469D00',
        paddingBottom: 10
    },
    inActiveSubHeader: {
        // backgroundColor: "#fff",
        // borderRadius: 20,
        width: "35%",
        paddingBottom: 15
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    allOrderText: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#757575",
        letterSpacing: 0.3,
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
        position: "absolute",
        borderTopColor: "rgba(238, 238, 238, 1)",
        borderTopWidth: 1,
        height: "100%",
        width: "100%",
        paddingVertical: 30,
        alignItems: "center",
        top: hp("62%"),
        paddingHorizontal: 20
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
        height: hp('100%'),
        borderWidth: 1,
        borderColor: "rgba(0, 49, 157, 0.2)"

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
    bottomCover: {
        alignItems: 'center',
        backgroundColor: 'rgba(239, 241, 249, 0.3)',
        height: hp('60%'),
        paddingTop: 10,
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
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.04)',
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        height: 48
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
        width: wp('94%'),
        color: 'rgba(255, 255, 255, 0.8)',
        // borderWidth: 1,
        // borderColor: 'rgba(116, 133, 255, 0.32)',
        // paddingLeft: 10,
        // paddingVertical: Platform.OS === "ios" ? 15:0,
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400",
        alignItems: "center"

    },
    exchangeCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingRight: 15,
        alignItems: "center"
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
        borderRadius: 50,
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        borderStyle: 'solid',
        zIndex: 3,
        alignItems: "center"

    },
    exchangeText: {
        color: '#424242',
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
        marginRight: 5,
        marginLeft: 2,
    },
    cardCover: {
        // width: wp('90%'),
        elevation: 3,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginBottom: 7,
        shadowColor: 'rgba(239, 241, 249, 1)',
        marginHorizontal: 1,
        marginTop: 1
        // shadowRadius: 4,
        // shadowOffset: { height: 4, width: 0 },
        // shadowOpacity: 0.5,

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
        // paddingTop: 10,
    },
    cardDownInner: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('50%'),
        paddingTop: 5,
    },
    nameText: {
        color: '#3858CF',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    nameTextActive: {
        color: '#469D00',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        fontWeight: "600",
        letterSpacing: 0.1,
    },
    nameTextInAc: {
        color: '#D32F2F',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
    },
    penText: {
        color: '#3858CF',
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    actText: {
        color: '#469D00',
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontStyle: 'normal',
    },
    inactText: {
        color: '#D32F2F',
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
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
    actCoverP: {
        backgroundColor: '#ebebeb',
        borderRadius: 20,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        height:15,
        width:40,

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
    itemNameP:{
        width:120,
        height:10,
        borderRadius:20,
        backgroundColor:'#ebebeb'
    },
    itemPhoneP:{
        width:80,
        height:10,
        borderRadius:20,
        backgroundColor:'#ebebeb'   
    },
    cardDownInnerP:{
        width:180,
        height:10,
        borderRadius:20,
        backgroundColor:'#ebebeb',
        marginTop:30,    
    },
    firstInnerHeader: {
        marginLeft: 5, 
        backgroundColor: "rgba(207, 106, 135, 1)",
        height:18,
        width: 18,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center"
    },
    firstInnerTitle: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 11,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    firstHeader: {
        flexDirection: "row",
        justifyContent:"center"
    },
})