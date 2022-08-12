import { StyleSheet, Platform, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("screen")

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
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",
        paddingBottom:10,
        alignSelf:'center'

    },
    iconStyle: {
        paddingTop: 5,
        alignItems: "center",
        // marginBottom: 5
    },
    tabLableTop: {
        position: "absolute",
        top: Platform.OS === "android" ? -8 : height / 103 - 17,
        borderTopColor: "#3858CF",
        borderTopWidth: 4,
        width: 60,
        left: -22,
        alignItems: "center"
    },
    // testTop: {
    //     borderTopColor: "#3858CF",
    //     borderTopWidth: 4,
    //     width: "10%",
    //     alignItems: "center",
    //     marginTop: -2
    // },
    toast:{
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        letterSpacing: 0.2,
        color: "#fff"
    },
    innerTabView:{
        // paddingBottom:10,
        // width:"25%"
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