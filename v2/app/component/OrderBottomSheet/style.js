import { StyleSheet, Dimensions, Platform } from "react-native";


const styles = StyleSheet.create({
    filterHeader:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(121, 116, 126, 0.16)",
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    filterHeaderText:{
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        color: "rgba(27, 27, 31, 1)"
    },
    filterResetText:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(51, 83, 203, 1)",
        letterSpacing: 0.25
    },
    filterPriceTitle:{
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        color: "#1B1B1F",
        letterSpacing: 0.1,
        lineHeight: 24
    },
    filterPriceView:{
        paddingHorizontal: 16,
        marginTop: 8
    },
    filterPriceList:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        marginVertical: 10
    },
    filterPriceListTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        color: "rgba(90, 93, 114, 1)",
        letterSpacing: 0.25
    },
    filterPriceActiveListTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        color: "rgba(27, 27, 31, 1)",
        letterSpacing: 0.25
    },
    divider:{
        borderWidth: 1,
        borderColor: "rgba(121, 116, 126, 0.16)",
        marginTop: 8
    },
    filterBtn:{
        paddingHorizontal: 16,
        marginTop: 26,
        marginBottom: 26
    }

    
});

export default styles