import { StyleSheet, Platform } from "react-native";

export default styles = StyleSheet.create({
    subTextView: {
        marginTop: 18,
        marginHorizontal: 32
    },
    pinView: {
        borderWidth: 1,
        borderColor: "#a1a1a1",
        paddingLeft:15,
        paddingRight:15,
        paddingVertical: Platform.OS === "android" ? 2: 8,
        borderRadius: 3
    },
    pinHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 62,
        marginVertical: 40

    },
    body:{
        marginHorizontal: 29
    },
    inputF:{
        fontSize:25,
        fontFamily: "Urbanist-Regular",
        letterSpacing: 0.2,
        fontWeight: "400"

    },
    body:{
        marginHorizontal: 29
    }
});