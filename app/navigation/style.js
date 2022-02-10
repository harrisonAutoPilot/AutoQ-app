import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({
    tabLable: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",
        paddingBottom: 20,

    },
    iconStyle: {
        paddingTop: 15,
        alignItems: "center"
    },
    badgeStyle: {
        backgroundColor: "#D32F2F",
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        letterSpacing: 0.2,
        fontWeight: "500",
    },
    tabLableTop:{
        position: "absolute",
        top: Platform.OS === "android" ? -1 : -4,
        borderTopColor: "#3858CF",
        borderTopWidth: 4,
        width: 60,
        left: -20,
        alignItems: "center"
    }

})