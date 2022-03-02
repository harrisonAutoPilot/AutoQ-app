import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    header: {
        height: 150,
        borderRadius: 20,
    },
    container: {
        borderRadius: 20,
    },

    cardInnerCover: {
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 20,
    },
    cardTop: {
        width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    walletTilte: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "normal",
        textTransform: 'uppercase'

    },
    walletAmount: {
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "600",
        textTransform: 'uppercase',
        paddingTop: 15,
    },
    midBtn: {
        backgroundColor: '#000000',
        width: 150,
        padding: 10,
        position: 'absolute',
        left: Platform.OS === 'ios' ? wp('20%') : wp('18%'),
        top: Platform.OS === 'ios' ? hp('12%') : hp('13%'),
        borderRadius: 40,
        flexDirection: 'row',
        paddingLeft: 20,

    },
    plusTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
        fontWeight: "600",
        paddingLeft: 5,
    },
    waveImg: {
        position: 'absolute',
        marginTop: 4,
        width: 350,
        height: 150,
        marginLeft: 3,

    },
})