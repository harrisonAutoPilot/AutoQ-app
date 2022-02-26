import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    mainBody: {
        paddingTop: 10,
        backgroundColor: "#00319D"
    },
    headerTitle:{
        color: "#fff", 
        textAlign: "center",
        fontFamily: "Urbanist-SemiBold",
        fontSize: 18,
        lineHeight: 24
    },
    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "ios" ? 10 : 10,
        // alignItems: "center",
        // justifyContent: "center"
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
        paddingHorizontal: 19,
        marginTop: 10,
        justifyContent: "space-between",
        width: "90%"
    },
    titleCover: {
        width: wp('75%'),
        alignItems: "center",
        alignSelf: "center",
        paddingHorizontal: 20
        // justifyContent: "space-between"
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        fontWeight: Platform.OS === "ios" ? "600" : "600",
        letterSpacing: 0.1,
        textAlign: "center",
        textTransform: "capitalize"
    },

});

export default styles