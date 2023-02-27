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
        // width: wp('80%'),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingVertical: 20,
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
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.2,
        paddingTop: 3,
    },
    midBtn: {
        backgroundColor: '#000000',
        width: 150,
        padding: 10,
        position: 'absolute',
        top: Platform.OS === 'ios' ? hp('12%') : hp('13%'),
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"

    },
    plusTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
        paddingLeft: 5,
    },
    waveImg: {
        position: 'absolute',
        marginTop: 4,
        width: 350,
        height: 150,
        marginLeft: 3,

    },
    waveImgNew: {
        position: 'absolute',
        marginTop: 4,
        width: 350,
        height: 150,
        marginLeft: 3,

    },
    smNaira: {
        fontSize: 16,
    },
})