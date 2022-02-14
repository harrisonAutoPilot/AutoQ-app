import { StyleSheet, Dimensions } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({
    // MODAL
    modalImgView: {
        marginTop: 56,
    },
    modalView: {
        backgroundColor: "#fff",
        width: "100%",
        // marginTop: 60,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // flex: 1,
        marginLeft: 0,
        marginRight: 0,
        // paddingHorizontal: 29.75,
        paddingTop: 10.25,
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
    modalMiniBody: {
        backgroundColor: "#FAFAFA",
        height: "100%",
        shadowColor: '#EEEEEE',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingHorizontal: 29.75,
        paddingTop: 25.5
    },
    modalPadding: {
        paddingHorizontal: 29.75,

    },
    modalTitleView: {
        backgroundColor: "#fff",
        marginTop: 20,
        paddingBottom: 10,
        paddingHorizontal: 35.75
    },
    modalminiTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600"
    },
    modalminiSecondTitle: {
        color: "#212121"
    },
    modalminiSecondView: {
        marginBottom: 8
    },
    modalDiscount: {
        flexDirection: "row",
        // justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#E9EBF9",
        paddingVertical: 10,
        borderRadius: 5,
        paddingLeft: 20
    },
    modalDiscountText: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#00319D",
        letterSpacing: 0.3,
        fontWeight: "400",
        textAlign: "right"
    },
    modalDiscountTextView: {
        paddingLeft: 11
    },
    increaseCartMainAmountView: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "space-between"
    },

    modalPadding: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('100%'),

    },
    modalTitle: {
        fontSize: 15,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "right"
    },
    backCover: {
        position: 'absolute',
        left: wp('8%'),


    },
    topPrompt: {
        flexDirection: 'row',
        backgroundColor: '#FAFAFA',
        justifyContent: 'space-around',
        borderRadius: 8,
        width: wp('90%'),
        margin: 18,
        padding: 15,
    },
    topPromptText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"

    },
    bottomPromptText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#3858CF",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "left",
        marginTop: 10,

    },
    downPromptTextLoan: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 17,
        color: "#3858CF",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    downInforCoverLoan: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#3858CF',
        justifyContent: 'center',
        marginTop: 15,
        marginLeft: 5,
        marginRight: 10,
    },
    downInforTextLoan: {
        color: '#00319D',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0,
        fontWeight: "600",
        textAlign: "center"
    },
    inforCover: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#469D00',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    downInforCover: {
        width: 25,
        height: 25,
        borderWidth: 1,
        borderRadius: 100,
        borderColor: '#00319D',
        justifyContent: 'center',
        marginTop: 0,
        marginLeft: 5,
        marginRight: 5,

    },
    downInforText: {
        color: '#00319D',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    topPromptTextCover: {
        width: 260,
        marginLeft: 5,
      

    },
    inforText: {
        color: '#469D00',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    smCardCover: {
        width: wp('90%'),
        height: 180,
        borderRadius: 15,
        margin: 18,
        marginTop: 7,
        padding: 28,

    },
    midCardCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',
    },
    nameText: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    wemaCover: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        textAlign: 'left',
        width: 100,
        margin: 3,

    },
    wemaImg: {
        width: 20,
        height: 20,
    },
    copyCover: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        width: 160,
        left: wp('18%'),
        borderRadius: 30,
        padding: 5,
        marginTop: 15,

    },
    copyText: {
        color: '#ffffff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center",
        marginLeft: 5,
    },
    downPrompt: {
        flexDirection: 'row',
        backgroundColor: '#E9EBF9',
        justifyContent: 'space-around',
        borderRadius: 8,
        width: wp('90%'),
        margin: 18,
        padding: 15,

    },
    downCover: {
        width: wp('60%'),
        marginLeft: wp('20%')
    },
    downPromptText: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.3,
        fontWeight: "600",
        textAlign: "center"
    },
    cover: {
        marginTop: -35,
    },

    pinView: {
        borderWidth: 1,
        borderColor: "#a1a1a1",
        paddingLeft:15,
        paddingRight:15,
        paddingVertical: Platform.OS === "android" ? 2: 8,
        borderRadius: 3
    },
    pinHolder: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 62,
        marginVertical: 80

    },
    body:{
        marginHorizontal: 29
    },
    inputF:{
        fontSize:25,
        fontFamily: "Urbanist-Regular",
        letterSpacing: 0.2,
        fontWeight: "400"

    },
    labelCover:{
       position:'absolute',
       top:hp('22%'),
       left:wp('16%')
    },
    label3:{
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
        fontWeight: "600"
    },



    inputHolder: {
        width: wp('87%'),
        borderWidth: 1,
        borderColor: "#3858CF",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 19,
        borderRadius: 5,
        marginLeft: 24,
    },
    inputHolderSelect: {
        width: wp('87%'),
        borderWidth: 1,
        borderColor: "#3858CF",
        paddingVertical: Platform.OS === "ios" ? 1 : 5,
        paddingHorizontal: 10,
        marginTop: Dimensions.get("window").height / 32,
        borderRadius: 5,
        marginLeft: 24,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#3858CF",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    label2: {
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 22,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    signedView: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    signedTextView: {
        marginLeft: 7
    },
    signedIcon: {
        borderWidth: 1,
        borderColor: "#7485FF",
        width: 14,
        height: 14,
        marginLeft: 1
    },
    errView: {
        marginTop: 5,
        alignItems: 'center',
    },
    errText: {
        color: "red",
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    noticeCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: wp('90%'),
        margin: 20,
        padding: 7,
        marginTop: 10,
    },
    leftNoticeCover: {
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: '#F5F5F5',
        padding: 5,
    },
    rightNoticeCover: {
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        backgroundColor: '#424242',
        padding: 5,
    },
    rightNoticeText: {
        color: '#ffffff',
        fontSize: 11.5,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    leftNoticeText: {
        fontSize: 11.5,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    addBtnCover: {
        justifyContent: 'center',
        width: wp('90%'),
        color: '#fff',
        marginBottom: 50,
        marginTop: 100,
        marginLeft:wp('7%'),
    },

    addressBtn2: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 50,
        backgroundColor: '#3858CF',
        marginTop: 2,
        marginRight: 15,
        color:'#fff',
    },

})