import { StyleSheet, Platform, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    tabLable: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",
        marginBottom: 15,
        // paddingBottom:20,
    },
    tabLableIOS: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        letterSpacing: 0.2,
        alignSelf: 'center',
        paddingBottom: 13,
    },
    tabBarStyle: {
        height: "10.2%",     
    },
    iconStyle: {
        alignItems: "center",
    },
    item:{
        borderTopColor: "#3858CF",
        borderTopWidth: 4,
        alignItems: "center",
        marginTop: -2,
    },
    toast: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        letterSpacing: 0.2,
        color: "#fff"
    },
    toastView: {
        position: "absolute",
        top: Platform.OS === "android"  ? 20 : 40,
        padding: 16,
        borderRadius: 6,
        width: wp('80%'),
        alignSelf: 'center',
        elevation: 2
    },


})