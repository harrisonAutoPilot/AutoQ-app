import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    mainBody: {
        paddingBottom: 12
    },
    headerTitle: {
        position: 'absolute',
        top: hp('2%'),
        right: wp('38%')
    },
    headerText: {
        fontSize: 16,
        paddingLeft: wp('5%'),
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "400",
        color: "#ffffff",
        letterSpacing: 0.1,
    },
    captionCover: {
        position: 'absolute',
        top: hp('9%')
    },
    captionText: {
        fontSize: 16,
        paddingLeft: wp('5%'),
        fontFamily: "Urbanist-Regular",
        fontWeight: "600",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.1,
    },

    bottomCover: {
        position: 'absolute',
        top: hp('15%'),
        padding: 1,
        paddingLeft: 12,
        width: wp('96%'),
        height: hp('80%'),
        borderRadius: 3,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: '#e6e6e6',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    subLogo: {
        width: 65,
        height: 65,
        alignItems: 'center',
        resizeMode: 'contain',
        margin: 7,
        borderRadius: 3,
        borderWidth: 0,
        borderColor: '#e6e6e6',
    },
    sub: {
        color: '#133052',
        fontSize: 17,
        textAlign: 'center'
    },
    //   header:{
    // height:60,
    //   }, 

    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        // marginBottom: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0, 0, 0, 0.1)"
    },
    headerSubIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingBottom: 16,
        paddingTop: 16,
    },
    headerSubIconMenuView: {
        paddingLeft: 16,
        paddingTop: 10,
    },
    headerSubLastIconView: {
        paddingLeft: 20
    },

    miniBody: {
        backgroundColor: "#DCDCDC",
        height: "100%",
        padding: 16,
        paddingTop: 20,
    },
    miniSecondHeadingTitle: {
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#3858CF",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    miniHeadingTitleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center"
    },

    iconView: {
        alignSelf: "flex-end",
        marginRight: 2
    },
    imgView: {
        marginTop: 6,
        marginBottom: 30,
        alignItems: "center"
    },
    img: {
        width: 74,
        height: 88
    },
    productTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.1,
        fontWeight: "600"
    },

    // categories styles
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    card: {
        width: wp('42%'),
        height: hp('22%'),
        margin: 8,
        borderRadius: 3,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: '#e6e6e6',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        textAlign: 'center',
        padding: 13
    },
    cardsDown: {

        resizeMode: 'contain',
        height: hp('30%'),
        flexWrap: 'wrap',
        borderRadius: 1.5,
        borderBottomWidth: 0,
        borderColor: '#f2f2f2',
        flexDirection: 'column',
        alignItems: 'center',
    },

    elevation: {
        elevation: 0,
        shadowColor: '#52006A',
    },
    mdCatImg: {
        width: 90,
        height: 90,
    },
    smAngleImg: {
        width: 15,
        height: 15,
        resizeMode: 'contain',

    },
    titleCover: {
        marginTop: hp('12%'),
    },

    catDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        paddingLeft: 14,
        paddingRight: 14,
        marginTop: 10,
        width: wp('42%'),
        borderTopWidth: 0.3,
        borderColor: '#a1a1a1',
        borderStyle: 'solid',

    },
    catText: {
        fontSize: 16,
        paddingLeft: wp('5%'),
        fontFamily: "Urbanist-Regular",
        fontWeight: "600",
        lineHeight: 20,
        color: "#424242",
        letterSpacing: 0.1,

    },




});

export default styles