import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#fff",
        marginBottom: 20
    },
    headerText:{
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    iconView: {
        marginRight: 70
    },
    view:{
        flexGrow: 1,
        height: "100%"
    },

})