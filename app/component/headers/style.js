import { StyleSheet, Dimensions, Platform } from "react-native";

const styles = StyleSheet.create({

    mainBody: {
        paddingBottom: 12,
        paddingTop: 10,
    },
    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "ios" ? 10 : 10,
    },
    headerSubIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingBottom: 16
    },
    headerSubIconMenuView: {
        paddingLeft: 16
    },
    headerSubLastIconView: {
        paddingLeft: 20
    },
    navCover: {
        flexDirection: 'row',
        backgroundColor: '#3858CF',
    },
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    titleCover: {
        width: wp('79%'),
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: Platform.OS === "ios" ? "600" : "600",
        letterSpacing: 0.1,
        textAlign: "center"
    },

});

export default styles