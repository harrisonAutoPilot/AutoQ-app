import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        height: "100%",
        width: "100%",
    },
    header: {
        backgroundColor: "#E9EBF9",
        height: Platform.OS === "ios" ? null: 60,
        paddingLeft: 20,
        justifyContent: "center",
        paddingBottom: Platform.OS === "ios" ? 20 : 0
    },
    headerTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.1,
    },
    pricesView: {
        marginTop: 12,
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 24
    },
    listView: {
        borderWidth: 1,
        borderRadius: 15,
        flexDirection: 'row',
        borderColor: "#fafafa",
        backgroundColor: "#F5F5F5",
        paddingHorizontal: 15,
        paddingVertical: 7,
        marginRight: 10,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    column: {
        flexDirection: "row",
        paddingHorizontal: 16,
    },
    priceMainView: {
        borderWidth: 1,
        borderColor: "rgba(224, 224, 224, 1)",
        paddingBottom: 0,
        paddingTop: 5,
    },
    reset: {
        borderColor: "#FAF9F6",
        borderRadius: 100,
        borderWidth: 0,
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "#ffffff",
    },
    done: {
        borderColor: "rgba(124, 207, 36, 1)",
        borderRadius: 100,
        borderWidth: 0,
        paddingLeft: 45,
        paddingRight: 45,
        paddingTop: 12,
        paddingBottom: 12,
        backgroundColor: "rgba(124, 207, 36, 1)"
    },
    elevation: {
        elevation: 1,
        shadowColor: '#52006A',
    },
    resetText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "rgba(66, 66, 66, 1)",
        letterSpacing: 0.1,
    },
    btnCover: {
        flexDirection: "row",
        justifyContent: "space-between",
        // paddingHorizontal: 35,
        width: wp('98%'),
        marginLeft: wp('1%'),
        position: "absolute",
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        bottom: 0,
        backgroundColor: "rgba(238, 238, 238, 1)",
        top: Dimensions.get("window").height / 1.25,

    },
    activeView: {
        // backgroundColor: "rgba(233, 235, 249, 1)",
        backgroundColor: "#E9EBF9",
    },
    activeText: {
        color: "rgba(56, 88, 207, 1)"
    },
    color2: {
        color: "rgba(97, 97, 97, 1)"
    },
    iconView: {
        marginRight: 10
    }
})