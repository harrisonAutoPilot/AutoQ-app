import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("screen");

export default loginStyles = StyleSheet.create({
    mainBody: {
        backgroundColor: '#fff',
    },
    agentCover: {
        width: wp('100%'),
        height:400,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    agentImg: {
        width: width - 120,
        height: 400,
        resizeMode: 'contain',
        right: wp('-2%'),
    },
    blueImg: {
        width: width - 120,
        height: 400,
        resizeMode: 'cover',
        right: wp('-2%'),
    },
    cover: {
        width: 500,
        height: 450,

    },
    blueCover: {
        width: wp('100%'),
        position: 'absolute',
        top: 0,
        left: -50,

    },
    innerCover: {
        // backgroundColor:'#fff',
        width: 200,
        height: 200,
        position: 'absolute',
        left: wp('18%'),
        top: hp('5%'),
    },
    logoImg: {
        width: 80,
        height: 80,
    },
    textCover: {
        marginTop: 20,
        paddingLeft: 10,
    },
    smText: {
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
    },
    bgText: {
        fontSize: 28,
        fontFamily: "Urbanist-Regular",
        lineHeight: 36,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "900",
        marginTop: 10,
    },
    bottomCover: {
        width: wp('100%'),
        height: hp('60%'),
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        alignItems: 'center',
        backgroundColor: '#fff',
        top:hp('-13%')
    },
    keyboardUp: {
        top: hp('-25%'),
        height: hp('45%'),
    },
    loginTextCover: {
        marginTop: 30,
    },
    loginText: {
        fontSize: 20,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#424242",
        letterSpacing: 0.2,
    },
    submit: {
        marginTop: 20,
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        zIndex: 2,
    },
    forgotPswTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    forgotPswdView: {
        marginTop: Dimensions.get("window").height / 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    forgotPswdTitleView: {
        marginLeft: 10
    },
    errView: {
        marginTop: 8,
        zIndex: 9000,
    },
    errCover: {
        marginTop: -30,
        position: 'absolute',
        width: wp('80%'),
        alignSelf: 'center'
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 35,
        borderRadius: 5,
    },
    scrollStyle: {
        height: "100%",
        top: hp('-0% '),
        paddingBottom: 250,

    },
    scrollStyleReg: {
        height: hp('90%'),
        // top: hp('-0% '),
        paddingBottom: 180,

    },
    formCover: {
        // height:hp('40%'),
        flex: 1,
        marginTop: -20,
    },
    registerInputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 20,
        borderRadius: 5,
    },
    inputErrHolder: {
        borderColor: "red"
    },
    inputPinHolder: {
        marginTop: 25,
    },
    labelView: {
        position: "absolute",
        top: -7,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
    },
    label2: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
        fontWeight: "400",
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
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap"
    },
    inputCover: {
        width: wp('100%'),
        padding: 30,
        paddingTop: 10,
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
    loginImg: {
        height: 800,
        width: "100%"
    },
    loginImgView: {
        position: 'absolute',
        top: hp('75%'),
        left: wp('50%')
        // paddingTop: 10
    },
    afriCover: {
        position: 'absolute',
        right: wp('-1%'),
        top: hp('60%'),
        zIndex: 1,
    },
    afriImg: {
        width: 120,
        height: 170,
    },

    topCover: {
        marginTop: 10,
    },
    registerAccountView: {
        marginTop: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
    },
    scrollStyle: {
        paddingBottom: 50,

    },
});

