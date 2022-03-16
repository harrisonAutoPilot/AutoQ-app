import { StyleSheet, Platform } from "react-native";

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
    tabLableTop:{
        position: "absolute",
        top: Platform.OS === "android" ? -8 : -9,
        borderTopColor: "#3858CF",
        borderTopWidth: 4,
        width: 60,
        left: -22,
        alignItems: "center"
    },
 


})