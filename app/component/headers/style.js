import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    mainBody: {
         paddingTop: 5,
        backgroundColor: "#00319D",
        // paddingTop:10,
       
    },
    header:{
        // marginTop:10,
        // paddingTop:10,
    },
    headerTitle: {
        color: "#fff",
        textAlign: "center",
        fontFamily: "Urbanist-SemiBold",
        fontSize: 18,
        lineHeight: 24
    },
    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: Platform.OS === "ios" ? 10 : 15,
        borderTopWidth: 1,
        borderTopColor: "rgba(0,0,0,0.1)"
    },
    headerSubIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingTop:Platform.OS === "android" ? 1 : 5,
        paddingBottom: 16
    },
    headerSubIconMenuView: {
        paddingTop:Platform.OS === "android" ? 1 : 5,
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
    badge: {
        backgroundColor: "#D32F2F",
        borderRadius: 10,
        position: "absolute",
        top: -6,
        left: 33,
        width: 16,
        height: 16,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",

    },
    badgeN: {
        backgroundColor: "#43A047",
        borderRadius: 10,
        position: "absolute",
        top: -5,
        left: 12,
        width: 14,
        height: 14,
        justifyContent: "center",
    },
    badgeText: {
        color: '#fff',
        fontSize: 9,
        fontFamily: "Urbanist-Medium",
        lineHeight: 12,
        letterSpacing: 0.1,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
       

    },
    navCoverWhite: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderBottomWidth: 0.5,
        borderBottomColor: '#f5f5f5',

    },
    btnTextWhite: {
        color: '#212121',
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1,
        textAlign: "center"
      },

});

export default styles