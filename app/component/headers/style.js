import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

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
        backgroundColor: '#00319D',
    },
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 40,
        paddingLeft: 19,
        marginTop: 10

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