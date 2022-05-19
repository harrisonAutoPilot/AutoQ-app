import { StyleSheet, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    // MODAL
    view: {
     height:hp('100%'),
    flexDirection: 'column',
     //flexGrow:1,       // all the available vertical space will be occupied by it
        justifyContent: 'space-between', // will create the gutter between body and footer
        backgroundColor: '#fff',
    },
    modalView: {
        backgroundColor: "#fff",
        width: "100%",
        // marginTop: 60,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // flex: 1,
        marginLeft: 0,
        marginRight: 0,
        // paddingHorizontal: 29.75,
        paddingTop: 24.25,
        alignSelf: "center",
        marginBottom: -12,
    },
    modalImg: {
        width: 130,
        height: 153.33,
        alignSelf: "center",
        resizeMode: 'contain',
        marginTop: -40,
        marginBottom: -30,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },


    modalPadding: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),
        marginTop: 10,

    },
    modalTitle: {
        fontSize: 18,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "right"
    },
    backCover: {
        position: 'absolute',
        left: wp('5%'),
    },

    listCover: {
        width: wp('100%'),
        padding: 20,
        marginTop: -15,
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    itemTitle: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#757575",
        textTransform: "capitalize",

    },

    itemMainTitle: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#757575",
        textTransform: "capitalize",

    },
    itemName: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: "#424242",
        textTransform: "capitalize",
        width: 200,
        textAlign: 'right',

    },
    btnCover: {
        // position: "absolute",
        borderTopColor: "#F5F5F5",
        borderTopWidth: 1,
        //height: "17%",
        width: "100%",
        backgroundColor: '#f5f5f5',
        padding: 10,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf:'center',
        // marginTop: 50

    },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "90%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:10,
    },
    imgCardCover: {
        width: wp('100%'),
        padding: 10,
        // alignItems: 'center',
        backgroundColor: '#fff'
    },
    smCardCover: {
        alignItems: 'center',
        marginRight: 15,
        borderRadius: 8
    },
    smCard: {
        height: 120,
        borderWidth: 0,
        borderColor: '#f2f2f2',
        borderRadius: 10,
        alignItems: 'center',

    },
    smImg: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 8
    },
    angleImg: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        marginLeft: 10,
    },
    imgName: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#212121",
        textTransform: "capitalize",
        marginHorizontal: 5
        // textAlign: 'center',
    },
    viewText: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.1,
        color: "#616161",
        textTransform: "capitalize",
        textAlign: 'center',
    },
    licenseView:{
        marginBottom: 5
    },
    licenseView2:{
        marginTop: 20,
        marginBottom: 5
    }

})