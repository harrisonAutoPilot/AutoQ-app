import { StyleSheet } from "react-native";
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
        fontFamily: "Urbanist-SemiBold",
        fontSize: 22,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        paddingBottom: 10,
    },
    emptyCover: {
        // backgroundColor: '#f2f3f4',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
        height: "100%"
    },
    imgCoverBig: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 30,
    },
    // emptyCartImg: {
    //     width: 85,
    //     height: 85,
    //     resizeMode: 'contain',
    // },
    emptyText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
    },
    addBtnCoverCart: {
        justifyContent: 'space-between',
        width: wp('90%'),
        color: '#454545',
        marginLeft: wp('7%'),
        marginRight: wp('4%'),
        marginTop: 130,

    },

    addressBtn2: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: '#3858CF',
        marginTop: 2,
        marginRight: 12,
    },
});

export default styles