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
    mainBody: {
        paddingHorizontal: 20,
        // flex: 1,
    },
    view: {
        flex: 1,
        backgroundColor: "#fff",
    },
    subHeader: {
        borderRadius: 20,
        borderColor: "#000",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // padding:1,
    },
    activeSubHeader: {
        backgroundColor: "#000",
        borderRadius: 20,
        width: "50%",

    },
    inActiveSubHeader: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "50%"
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
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
        marginTop: Dimensions.get("window").height / 50,
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
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop:5,
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
        backgroundColor: "rgba(124, 207, 36, 1)",
        borderRadius: 100,
        width: "100%",
    },
    btnText: {
        color: 'rgba(33, 33, 33, 1)',
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
        alignItems: Platform.OS === "android" ? "center": null
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
    showCover:{
        paddingTop:0,
        marginRight:5,
    },
    inputOuterView:{
        marginHorizontal: 20,
        
    },
    sucToastCover:{
        marginTop:hp('-12%'),
        zIndex:9000,
       
    },
    changeCover:{
        width:50,
        position:'absolute',
        right:2,
        marginTop:22,
    },
})