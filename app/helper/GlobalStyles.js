import { StyleSheet, Dimensions} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default globalStyles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 22,
        color: "#212121",
        letterSpacing: 0.1
    },
    mainBody: {
        backgroundColor: "#fff",
        height: "100%"
    },
    subBody: {
        marginTop: 20,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    subBody2: {
        paddingTop: 20,
        paddingHorizontal: 20,
        height: "90%",
        marginTop: -18
        // flexGrow: 1,
    },
    subBody3: {
        paddingTop: 20,
        paddingHorizontal: 20,
        // height: "100%",
        flex: 1,
    },
    logoImg: {
        width: 70,
        height: 70
    },
    logoImgView: {
        marginTop: -20,
        marginBottom: Dimensions.get("window").height / 60,
        alignItems: "center"
    },

    onboardTitle: {
        fontFamily: "Urbanist-Regular",
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0.2,
        fontWeight: "400",
        color: "#212121",
        textAlign: "center",
        top: hp('-2%'),

    },
    redirectIcon: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 17,
        borderRadius: 5,
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
    registerInputPinHolder: {
        marginTop: 20,
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
        color: "#616161",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    signedView: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    signedTextView: {
        marginLeft: 7
    },
    signedIcon: {
        borderWidth: 1,
        borderColor: "#7485FF",
        width: 14,
        height: 14,
        marginLeft: 1
    },
    submit: {
        position: 'absolute',
        top: hp('80%'),
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100
    },
    forgotPswTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    },
    forgotPswdView: {
        marginTop: Dimensions.get("window").height / 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    forgotPswdTitleView: {
        marginLeft: 10
    },
    errView: {
        marginTop: 5
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
    pinView: {
        justifyContent: "flex-start",
    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    failedResponseText: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        letterSpacing: 0.2,
        textAlign: "center",
        paddingTop: 3,
        width: "80%"
    },
    failedResponseView: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: "red"
    },
    createNewAccountView: {
        // marginTop: Dimensions.get("window").height /4.5,
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
        // paddingTop: 10
    },
    errMainView: {
        borderWidth: 0,
        borderColor: "red",
        // marginTop: 20,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%",
        alignSelf: "center",
    },
    errMainVie6: {
        borderWidth: 0,
        borderColor: "red",
        // marginTop: 20,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        width: "90%",
       alignItems:"center"

    },
    errInCover: {
        position: 'absolute',
        top: hp('-5%'),
        zIndex: 9000,
        justifyContent: 'center',
        alignItems: 'center',
        right: wp('15%'),
        width: wp('70%'),
        paddingLeft: 20,
        paddingRight: 20,
    },
    errInCoverNew: {
        position: 'absolute',
        top: hp('10%'),
        zIndex: 9000,
        justifyContent: 'center',
        alignItems: 'center',
        right: wp('15%'),
        width: wp('70%'),
        paddingLeft: 20,
        paddingRight: 20,
    },
    errInCoverNew2: {
        position: 'absolute',
        top: hp('20%'),
        zIndex: 9000,
        justifyContent: 'center',
        alignItems: 'center',
        width: wp('100%'),
        paddingLeft: 20,
        paddingRight: 20,
    },
    exclaImg: {
        marginRight: 10,
    },
    errMainView2: {
        borderWidth: 0,
        borderColor: "red",
        // marginTop: 20,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    errMainView3: {
        borderWidth: 1,
        borderColor: "#FFE5E5",
        marginTop: -15,
        backgroundColor: "#FF0038",
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: "100%",
        alignSelf: "center",
        // zIndex: 4,
        elevation: 3
    },
    errMainView4: {
        backgroundColor: "#FF0038",
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 10,
        width: "90%",
        alignSelf: "center",
        elevation: 4
    },
    successMainView: {
        // borderWidth: 1,
        // borderColor: "#159D15",
        // marginTop: 20,
        backgroundColor: "#F6FEF6",
        borderRadius: 8,
        paddingVertical: 15
    },
    success: {
        color: "rgba(124, 207, 36, 1)"
    },
    innerMsgModal: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20
    },
    marginTop: {
        marginTop: 20,
        zIndex: 9000,
    },
    phoneNoVerifySuccessView: {
        backgroundColor: "rgba(67, 160, 71, 1)",
        borderRadius: 8,
        paddingVertical: 18,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
    },
    phoneNoVerifySuccessView2: {
        backgroundColor: "rgba(67, 160, 71, 1)",
        borderRadius: 8,
        paddingVertical: 18,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        width: "90%",
        elevation: 5,
        marginLeft: 20,
        position: "absolute",
        top: -70,

    },
    phoneNoVerifySuccessViewRed: {
        backgroundColor: "rgba(67, 160, 71, 1)",
        borderRadius: 8,
        paddingVertical: 18,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        width: "90%",
        elevation: 5,
        marginLeft: 20,
        position: "absolute",
        top: -70,

    },
    phoneNoVerifySuccessVieww: {
        backgroundColor: "rgba(67, 160, 71, 1)",
        borderRadius: 8,
        paddingVertical: 18,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        width: "90%",
        elevation: 5,
        top: hp('-15%'),
        zIndex: 9000,
        position: 'absolute',
        width: wp('80%'),
    },
    successResponseText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.2,
        fontWeight: "600",
        textAlign: "center"
    },
    phoneNoVerifySuccessIconView: {
        width: 22,
        height: 22,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },
    phoneNoInnerView: {
        width: 1,
        height: 18,
        backgroundColor: "#FAF9F6",
        marginRight: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    },
    phoneNoInnerView: {
        width: 1,
        height: 18,
        backgroundColor: "#FAF9F6",
        marginRight: 20
    },
    backImg: {
        width: 25,
        height: 25,
        // marginLeft: 20,
    },
    backImgLogin: {
        width: 25,
        height: 25,
        marginTop: 40
        // marginLeft: 20,
    },
    backImgSort: {
        width: 25,
        height: 25,
        // marginLeft: 20,
        marginTop: -11,
    },
    quesImg: {
        width: 18,
        height: 20,

    },
    dragIcon: {
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -52,

    },
    dragIconFund: {
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        top: hp('7%'),
        zIndex: 9000,
        position: 'absolute',
        right: wp('-5%'),
    },
    dragIconSm: {
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -21,
    },
    mainView: {
        borderBottomWidth: 0,
        paddingLeft: 19,
        marginTop: 20,
        flexDirection: "row",
    },
    mainView2: {
        borderBottomWidth: 0,
        flexDirection: "row",
    },
    mainViewBackground: {
        backgroundColor: "#fff"
    },
    mainViewBackground2: {
        backgroundColor: "transparent"
    }

})
