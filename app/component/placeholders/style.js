import {  StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    emptyCoverOrder: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('95%'),
        textAlign: 'center',
        justifyContent: "center",
        height: "80%"
    },
    imgCoverBigOrder: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 25,
    },

    emptyCartImg: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
    emptyTextBig: {
        fontFamily: "Urbanist-Regular",
        fontSize: 22,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600",
        paddingBottom: 10,
    },
});

export default styles