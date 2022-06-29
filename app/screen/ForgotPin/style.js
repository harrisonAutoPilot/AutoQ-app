import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 17,
        borderRadius: 5,
    },
    scrollStyle: {
        height: "100%",
        // top: hp('-0% '),
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
    inputHolder2: {
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
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2,
   
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
        textTransform: "uppercase"
    },
    label2: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2,
        width: "70%"
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
    btnCover: {
        zIndex: 9,
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
        marginTop: Dimensions.get("window").height / 20,
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
        marginLeft: wp('5%'),
        marginRight: wp('15%'),

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
    inputCoverr: {
        width: 300,
        backgroundColor: 'red',

    },
    inputPinCover: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeCover: {
        width: 40,
        position: 'absolute',
        right: 2,
        marginTop: -4,
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
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
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
        top: hp('68%'),
        // zIndex: 1,
    },
    afriImg: {
        width: 120,
        height: 170,
    },
    bottomCover: {
        // position: 'absolute',
        top: hp('3%'),
        height: hp('90%'),
        width: wp('95%'),
        alignItems: 'center',
        justifyContent: 'center',
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
    scrollStyle2: {
        // height: "100%",
        // top: hp('-0% '),
        paddingBottom: 50,

    },
});

export default styles