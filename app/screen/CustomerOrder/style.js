import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
    headerTitle: {
        position: 'absolute',
        top: hp('2%'),
        right: wp('38%')
    },
    searchSection: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        marginHorizontal: 16,
        borderRadius: 8,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderWidth: 1,
        alignItems: "center",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginVertical: 10
    },
    searchIcon: {
        paddingHorizontal: 10,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    errView: {
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        zIndex: 20,


    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400",

    },
    inputField: {
        width: wp('92%'),
        color: '#424242',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400",

    },
    btnText: {
        color: '#fff',
    },
    exchangeCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingRight: 15,
        backgroundColor: '#00319D',
    },
    exchangeImg: {
        width: 13,
        height: 13,
        marginTop: 3,
    },
    exchangeClickk: {
        flexDirection: 'row',
        backgroundColor: '#00319D',
        borderRadius: 50,
        paddingRight: 10,
        borderWidth: 0.3,
        borderColor: '#ffffff',
        zIndex: 3,
        paddingVertical: 3,
        alignItems: "center"
    },
    exchangeText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        letterSpacing: 0.2,
        marginRight: 5,

    },
    allOrderText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
        marginLeft: 10,
        alignSelf: "center"
    },

    bottomCover: {
        // position: 'absolute',
        // top: hp('23%'),
        padding: 1,
        paddingLeft: 12,
        width: wp('96%'),
        height: hp('70%'),
        borderRadius: 3,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: '#e6e6e6',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    mainContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    card: {
        width: wp('97%'),
        // height: hp('28%'),
        margin: 4,
        borderRadius: 1,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: '#e6e6e6',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        textAlign: 'center',
        padding: 13,
        paddingTop: 3,
        paddingBottom: 20,
        marginTop: 0,
        marginBottom: 20,

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
    cardUpDown:{
        marginTop: 4
    },

    cardUpTop: {
        width: wp('85%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
    },
    upTextOne: {
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    upTextTwo: {
        color: '#3858CF',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,

    },
    downTextOne: {
        color: '#757575',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "400",
        letterSpacing: 0.1,
    },
    cardMidTop: {
        width: wp('85%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
        marginTop: 12
    },
    midTextOne: {
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.1,
    },
    cardMidDown: {
        width: wp('75%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 30,
        marginTop: 10,
    },
    midTextTwo: {
        color: '#9E9E9E',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "400",
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    cardDownCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('85%'),
        marginRight: 30,
        marginTop: 7,

    },
    StatusCover: {

        backgroundColor: '#E3F6CF',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 20,
        height: 30,
    },
    statusText: {
        color: '#469D00',
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textTransform: 'capitalize',
    },
    statusTextB: {
        color: '#00319D',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textTransform: 'capitalize',
    },
    reorderCover: {
        flexDirection: 'row',

    },
    reOrderText: {
        color: '#757575',
        fontSize: 11,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.1,
        textTransform: 'uppercase',
    },
    refreshImg: {
        width: 12,
        height: 12,
        marginTop: 3,
        marginLeft: 3,
    },
    blueColor: {
        backgroundColor: '#00319D',
    },
    body: {
        backgroundColor: "#fff",
        height: Platform.OS === "android" ? "40%" : "35%",
        width: "110%",
        // alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        bottom: "-3%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 20
    },
    body2: {
        backgroundColor: "#fff",
        height: Platform.OS === "android" ? "70%" : "44%",
        width: "100%",
        // alignItems: "center",
        alignSelf: "center",
        //  position: "absolute",
        bottom: "-5%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 20
    },
    mainView: {
        paddingVertical: 20,
        borderTopColor: "#f2f3f4",
        borderTopWidth: 1,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        width: wp('80%'),
        marginLeft: wp('10%'),
        marginRight: wp('10%'),
    },
    modaltitle: {
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,

    },
    modaltitleP: {
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textTransform: 'uppercase',

    },
    modalPadding: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),
        marginBottom: 20
    },
    backCover: {
        position: 'absolute',
        left: wp('5%'),
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center",
        marginLeft: 20,
    },
    emptyCover: {
        backgroundColor: '#f2f3f4',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
    },
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