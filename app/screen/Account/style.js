import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    mainHeader: {
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(238, 238, 238, 1)",
        paddingLeft: 19

    },
    body: {
        backgroundColor: "#00319D",
        marginBottom: 16,
        paddingBottom: 5
    },
    headerText: {
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center"
    },
    mainBody: {
        paddingHorizontal: 20,
        // flex: 1,
    },
    view: {
        flex: 1,
        backgroundColor: "#f2f3f4",
        height: "100%"
    },
    subHeader: {
        borderRadius: 30,
        borderColor: "#3858CF",
        borderWidth: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: '#E9EBF9',
        paddingVertical: 3
        // padding:1,
    },
    activeSubHeader: {
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "45%",
        margin: 5,

    },
    inActiveSubHeader: {
        backgroundColor: "transparent",
        borderRadius: 20,
        width: "45%",
        margin: 5,
    },
    activeSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#00319D",
        letterSpacing: 0.1,
        textAlign: "center",

    },
    inActiveSubHeaderText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#00319D",
        letterSpacing: 0.1,
        textAlign: "center",
        opacity: 0.6,
    },
    miniSubHeader: {
        // paddingHorizontal: 46,
        paddingVertical: 10,
    },
    inputHolder: {
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 4,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 30,
        borderRadius: 5
    },
    inputMainHolder: {
        marginTop: Dimensions.get("window").height / 40,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 16,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.2,
    },
    innerLabel: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 5,
        width: "70%"
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    btnCover: {
        position: "absolute",
        borderTopColor: "rgba(238, 238, 238, 1)",
        borderTopWidth: 1,
        height: "100%",
        width: "100%",
        paddingVertical: 30,
        alignItems: "center",
        top: hp("62%"),
        paddingHorizontal: 20
    },
    btnCover2: {
        top: hp("54%")
    },
    submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "100%",
    },
    btnText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign: "center"
    },
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        // flexWrap: "wrap",
        alignItems: Platform.OS === "android" ? "center" : null
    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    showCover: {
        paddingTop: 0,
        marginRight: 5,

    },
    inputOuterView: {
        marginHorizontal: 20,


    },
    inputOuterViewRed: {
        marginHorizontal: 20,
        backgroundColor:'red'
       

    },
    inputOuterView2: {
        marginHorizontal: 20,
        position: "absolute",
        top: -54,

    },
    sucToastCover: {
        marginTop: hp('-12%'),
        zIndex: 9000,

    },
    changeCover: {
        width: 50,
        position: 'absolute',
        right: 2,
        marginTop: 22,
    },


    // For the new profile page
    container: {
        backgroundColor: '#f2f3f4',
        width: wp('100%'),
        // height: '100%',
        flex: 1

    },
    topCover: {
        flexDirection: 'column',
        width: wp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,

    },
    img: {
        width: 64,
        height: 64,
        borderRadius: 100,
        resizeMode: 'cover',
        // transform: [{ rotate: "-90deg" }]
    },
    imgCover: {
        width: 67,
        height: 67,
        borderWidth: 10,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        // marginRight:10,
    },
    cameraCover: {
        position: 'absolute',
        left: wp('10%'),
        top: 35,

    },
    camImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },

    topTextCover: {
        alignItems: 'center',
        paddingTop: 10
    },
    agentNameText: {
        color: "#424242",
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
        textTransform: "uppercase"
    },
    agentCodeText: {
        color: "#00319D",
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontStyle: 'normal',
        paddingTop: 3
    },
    bottomCover: {
        alignItems: 'center',
    },
    cardCover: {
        flexDirection: "row",
        width: wp('90%'),
        elevation: 0.2,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 7,
    },
    cardCover1: {
        flexDirection: "row",
        width: wp('90%'),
        elevation: 0.2,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 15,
    },
    locImgCover: {
        width: 25,
        height: 25,
    },
    locImg: {
        width: 18,
        height: 18,
        resizeMode: 'contain',



    },
    locCover: {
        flexDirection: 'row',
        width: 100,
    },
    locCoverD: {
        flexDirection: 'row',
        width: 180,
    },
    locTextTitle: {
        color: "#616161",
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,
        marginLeft: 5,
    },
    locText: {
        color: "#424242",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.25,
        fontWeight: "400"
    },
    bankCaption: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: wp('80%'),
        marginTop: 10
    },
    captionText: {
        color: "#424242",
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.2,
    },
    downCover: {
        marginTop: 20,
    },
    // This is for the toggle
    thumbOnStyle: {
        backgroundColor: '#fff',

    },
    labelCover: {
        width: wp('90%'),
        alignSelf: 'center',
        padding: 3,
    },
    thumbOffStyle: {
        backgroundColor: '#fff',

    },
    deleteCover:{
        flexDirection:'row',
        padding:20,
        marginTop:40,
        borderWidth:0,
        borderColor:'#bfbfbf',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:"center",
       
    },
    deleteText:{
        color: '#D32F2F',
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        letterSpacing: 0.2,
        textAlign: "center",
        marginLeft:5,
    },

})