import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({

    afterTop: {
        width: wp('70%'),
        marginLeft: wp('15%'),
        marginRight: wp('15%'),
        marginTop: 60,
    },
    topText: {
        fontSize: 24,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#ffffff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    downText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 18,
        color: "rgba(255, 255, 255, 0.6)",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    midCover: {
        width: wp('85%'),
        marginLeft: wp('7.5%'),
        marginRight: wp('7.5%'),
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: Platform.OS === "android" ? 'dashed' : 'solid',
        borderColor: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        padding: 20,

    },
    midItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },
    itemText: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "rgba(255, 255, 255, 0.6)",
        letterSpacing: 0.2,
        fontWeight: "700",
        textAlign: "center"

    },
    midItemColor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
        marginTop: 10,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255, 255, 255, 0.1)',
        borderStyle: 'solid',
    },
    itemTextColor: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#B1FF5C",
        letterSpacing: 0.2,
        fontWeight: "700",
        textAlign: "center"

    },
    orderItem: {
        width: wp('80%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        marginTop: 15,
    },

    addressBtn2: {
        width: wp('80%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: '#fff',
        marginTop: 75,
    },
    sucBtnText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.1,
        textAlign: "center"
    }

});

export default styles