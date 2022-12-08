import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        width: "90%",
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 6,
        elevation: 4,
        flexDirection: 'row'
    },
    imgCover: {
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: "space-around"
    },
    logoImg: {
        width: 50,
        height: 50,
        borderRadius: 100,
        resizeMode: 'contain'
    },
    titleText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
        marginLeft: 10,
    },
    bodyText: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#757575",
        letterSpacing: 0.2,
        flexWrap: 'wrap',
        width: 240,
        marginLeft: 10,
    }
})