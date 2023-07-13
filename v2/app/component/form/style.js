import { Dimensions, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({

    inputPinHolder: {
        marginTop: 2,
    },
    inputErrHolder: {
        borderColor: "#BA1A1A"
    },
    inputErrView: {
        marginVertical: 5
    },
    inputErrText: {
        color: "#BA1A1A",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        letterSpacing: 0.4,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    label: {
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        color: "#45464F",
        letterSpacing: 0.2,
    },
    labelViewTeam: {
        backgroundColor:'#f5f5f5',
        position: "absolute",
        top: -10,
        left: 10,
        paddingHorizontal: 5,
        zIndex: 2
    },
    labelTitle: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#424242",
        letterSpacing: 0.5,
        paddingVertical: Platform.OS === "ios" ? 5 : 10,
    },

    // PIN
    pinPlaceHolder: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#424242",
        letterSpacing: 0.5,
        textAlign: "center"
    },
    pinPlaceHolderLoan: {
        fontSize: 20,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        color: "#424242",
        letterSpacing: 0.5,
        textAlign: "center"
    },
    pinLabel: {
        fontSize: 14,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 20,
        color: "#424242",
        letterSpacing: 0.2,
        width: "70%"
    },
    inputHolder: {
        paddingVertical: Platform.OS === "ios" ? 14 : 5,
        paddingHorizontal: 10,
        marginTop: 15,
        borderRadius: 5,
        width: "100%",
        alignSelf: 'center',
    },
    pinInputHolder: {
        paddingVertical: Platform.OS === "ios" ? 25 : 5,
        paddingHorizontal: 10,
        marginTop: 15,
        borderRadius: 5,
        width: "100%",
        alignSelf: 'center',
    },
    inputHolderLoan: {
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginTop: 15,
        borderRadius: 5,
        width: "100%"
    },
    placeholderStyle: {
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        color: "#424242",
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: "center"
    },
    showTextPin: {
        color: "#616161",
        fontSize: 11,
        marginTop: Platform.OS === "android" ? 16 : 5,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
    },
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap"
    },
    inputFieldView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },


});

export default styles
