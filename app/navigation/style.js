import { StyleSheet, Platform } from "react-native";
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
        paddingBottom: 15,

    },
    iconStyle: {
        paddingTop: 10,
        alignItems: "center",
        // marginBottom: 5
    },
    tabLableTop: {
        position: "absolute",
        top: Platform.OS === "android" ? -8 : -9,
        borderTopColor: "#3858CF",
        borderTopWidth: 4,
        width: 60,
        left: -22,
        alignItems: "center"
    },
    toast:{
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        letterSpacing: 0.2,
        color: "#fff"
    },

    toastView: {
        position: "absolute",
        top: 20,
        padding: 16,
        borderRadius: 6,
        width: wp('80%'),
        alignSelf: 'center',
        elevation: 2
    },


})