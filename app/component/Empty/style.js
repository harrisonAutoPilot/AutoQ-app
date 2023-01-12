import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        // backgroundColor :'#DCDCDC', 
    },
    mainBody: {
        paddingBottom: 12,
        paddingTop: 10,
    },
    header: {
        marginTop: 0,
    },
    innerMainHeader: {
        borderTopColor: "rgba(0, 0, 0, 0.1)",
        borderTopWidth: 1,
    },
    headerIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        // elevation: 2,
        // marginBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0, 0, 0, 0.1)",
        paddingTop: Platform.OS === "ios" ? 10 : 10,

    },
    headerSubIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight: 16,
        paddingBottom: 16
    },
    headerSubIconMenuView: {
        paddingLeft: 16
    },
    headerSubLastIconView: {
        paddingLeft: 20
    },
    searchIcon: {
        marginLeft: 20,

    },
    heartStyle: {
        opacity: 0.6,

    },

    inputHolder: {
        borderRadius: 8,
        backgroundColor: "#fff",
        paddingVertical: Platform.OS === "ios" ? 12 : 0,
        marginHorizontal: 16,
        alignItems: "center",
        flexDirection: "row",
        width: wp('94%'),
        marginLeft: wp('3%'),
        marginRight: wp('3%'),
        marginTop: 10,
        marginBottom: 10,
    },
    inputHolder2: {
        borderRadius: 8,
        backgroundColor: "#fff",
        marginHorizontal: 16,
        alignItems: "center",
        flexDirection: "row",
        width: wp('94%'),
        marginLeft: wp('3%'),
        marginRight: wp('3%'),
        marginTop: 10,
        marginBottom: 10,
    },
    inputText: {
        marginLeft: 10.15,

    },
    inputF: {
        //  position:'absolute',
        //  paddingTop:10,
        width: wp('90%'),
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400",
        //  alignItems: "center"

    },
    miniBody: {
        backgroundColor: "#DCDCDC",
        height: "100%",
        padding: 16,
        flexGrow: 1
    },
    miniMainBody: {
        height: "100%",
        flexGrow: 1
    },
    miniSecondHeadingTitle: {
        fontSize: 12,
        fontFamily: "Urbanist-Medium",
        lineHeight: 16,
        color: "#3858CF",
        letterSpacing: 0.2
    },
    miniHeadingTitleView: {
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center"
    },
    addtitleCover: {
        width: 145,
        flexShrink: 1,
        padding: 5,
    },
    miniHeadingIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 4,
    },
    miniSecondHeadingIconView: {
        marginLeft: 5
    },
    productCardView: {
        marginTop: 12,
        // alignItems: "center"
    },
    productCard: {
        // width: (Dimensions.get("window").width - 60) / 2,
        width: wp('44%'),
        backgroundColor: "#ffffff",
        borderRadius: 8,
        // height: Platform.OS === "ios" ? hp('34%'),
        marginBottom: 24,
        marginRight: 15,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#f2f3f4',
        borderStyle: 'solid',

    },
    productCard2: {
        width: wp('44%'),
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginRight: 15,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#f2f3f4',
        borderStyle: 'solid',

    },
    iconView: {
        alignSelf: "flex-end",
        marginRight: 2
    },
    captionCover: {

    },
    imgView: {
        marginTop: 5,
        alignItems: "center",
        height: 110,
    },
    img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    elevation: {
        elevation: 0,
        // shadowColor: '#52006A',
    },
    bottomCover: {
        // position: 'absolute',
        // top: hp('23%'),
        padding: 1,
        paddingLeft: 5,
        width: wp('100%'),
        height: hp('73%'),
        borderRadius: 3,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: '#e6e6e6',
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.1,
        textTransform: "capitalize"
    },
    priceView: {
        paddingTop: 8
    },
    priceTitle: {
        fontSize: 15,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#469D00",
        letterSpacing: 0.1,
    },
    secondView: {
        marginTop: 16,
        paddingHorizontal: 16,
    },
    inputTitle: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#9E9E9E",
        letterSpacing: 0.25,
        fontWeight: "400"
    },

    // MODAL
    modalImgView: {
        marginTop: 56,
    },
    modalView: {
        height: "60%",
        backgroundColor: "#fff",
        width: "110%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        flex: 1,
        marginLeft: 0,
        marginRight: 0,
        // paddingHorizontal: 29.75,
        paddingTop: 38.25,
        alignSelf: "center",
        marginTop: "0%"
    },
    modalImg: {
        width: 130,
        height: "90%",
        alignSelf: "center",
        // resizeMode:'contain',
        // marginTop:-40,
        // marginBottom:-30,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "center",
      
    },
    modalTitle2: {
        fontSize: 20,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        textAlign: "center",
        textTransform: "capitalize"
    },
    modalTitle3: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 22,
        color: "#757575",
        letterSpacing: 0.2,
        textAlign: "center",
        textTransform: "capitalize"
    },
    modalMiniBody: {
        backgroundColor: "#fff",
        shadowColor: '#EEEEEE',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingHorizontal: 29.75,
        paddingTop: 15.5,
        borderTopWidth: 1,
        borderColor: "#eee",
        borderBottomWidth: 1,
        paddingBottom: 10
    },
    modalMiniBody2: {
        backgroundColor: " #FAFAFA",
        shadowColor: '#EEEEEE',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        paddingHorizontal: 29.75,
        height: "100%",
        borderTopWidth: 1,
        borderColor: "#eee",
        paddingBottom: 20
    },
    modalPadding: {
        paddingHorizontal: 29.75,
        marginLeft: 5,
        zIndex: 9000,


    },
    modalPaddingLayout: {
        paddingHorizontal: 29.75,
        marginLeft: 5,
        zIndex: 9000,
        marginTop: 15,

    },
    modalTitleView: {
        backgroundColor: "#fff",
        paddingHorizontal: 35.75,
        marginTop: -10
    },
    modalminiTitle: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#757575",
        letterSpacing: 0.1,

    },
    modalminiSecondTitle: {
        color: "#212121",
        textTransform: "capitalize"
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
    cartAmountView: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 40,
        borderWidth: 1,
        borderColor: "#EEEEEE",
        shadowColor: '#EEEEEE',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    decreaseIconCartView: {
        flexDirection: "row",
        // marginTop: 54,
        alignItems: "center"
    },
    amountText: {
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 30,
        color: "#469D00",
        letterSpacing: 0.3,
        textAlign: "right"
    },
    increase: {
        paddingHorizontal: 11,
        paddingVertical: 16,
        backgroundColor: "#F5F5F5",
        borderTopLeftRadius: 40,
        borderBottomLeftRadius: 40
    },
    decrease: {
        paddingHorizontal: 11,
        paddingVertical: 16,
        backgroundColor: "#F5F5F5",
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40
    },
    increaseText: {
        paddingVertical: 11,
        paddingHorizontal: 14
    },
    browseView: {
        alignItems: "center",
        marginLeft: 20
    },
    modalHeartIconView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5
    },
    modalHeartInnerIconView: {
        flexDirection: "row",
        // justifyContent: "space-between",
        alignItems: "center"
    },
    modalHeartIcon: {
        marginRight: 6
    },
    modalBtnView: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "rgba(124, 207, 36, 1)",
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10,
    },
    modalBtn: {
        // paddingVertical: 16,
        // paddingHorizontal: 44,
        backgroundColor: "rgba(124, 207, 36, 1)",
        paddingHorizontal: 10
        // borderRadius: 100
    },
    modalBtnOverlay: {
        paddingHorizontal: 10
    },
    modalCover: {
        height: "90%",
        backgroundColor: "#fff",
        width: "100%",
        marginTop: 70,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        // flex: 1,
        marginLeft: 0,
        marginRight: 0,
        // paddingHorizontal: 29.75,
        paddingTop: 38.25,
        alignSelf: "center",
        marginBottom: -12,
    },
    modalBtnText: {
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.1,
        fontWeight: "600"
    },
    errModalView: {
        flex: 1,
        justifyContent: "center",
        // paddingVertical: 30,
        marginVertical: Dimensions.get("window").height / 2.3,
        zIndex: 9000,
    },
    emptyCover: {
        backgroundColor: '#f2f3f4',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
    },
    emptyCoverB: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
    },
    emptyCoverOrder: {
        // backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
        justifyContent:'center',
        // marginRight: wp('1%'),
        // marginLeft: wp('2%')

    },
    emptyCoverOrder1: {
        // backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
        justifyContent:'center',
        paddingRight:wp('8%'),
        // marginRight: wp('1%'),
        // marginLeft: wp('2%')

    },
    imgCover: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90,
        marginBottom: 30,
    },
    imgCoverBig: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 30,
    },
    imgCoverBigOrder: {
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 40,
        marginBottom: 25,
    },

    imgCoverBigDeal: {
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 120,
        marginBottom: 35,
    },
    imgCoverMd: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
    emptyImg: {
        width: 55,
        height: 55,
    },

    emptyCartImg: {
        width: 105,
        height: 105,
        resizeMode: 'contain',
    },

    emptyImgMd: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    emptyText: {
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600"
    },
    emptyTextSm: {
        fontFamily: "Urbanist-Regular",
        fontSize: 18,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600",
        paddingBottom: 10,
    },
    emptyTextSmDeal: {
        fontFamily: "Urbanist-Regular",
        fontSize: 18,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600",
        paddingBottom: 10,
        marginTop:10,
    },

    emptyTextBig: {
        fontFamily: "Urbanist-SemiBold",
        fontSize: 20,
        lineHeight: 28,
        color: "#757575",
        letterSpacing: 0.1,
        // paddingBottom: 10,
    },
    topModalView: {
        // height: "27%",
        paddingBottom: 15
    },
    topModalImageView: {
        height: 200,
        alignItems: 'center',
        width: wp('100%'),
        justifyContent:'center',
        // marginTop: -0,
    },
    smallCardCover:{
    zIndex:9000,
    backgroundColor:'pink',
    width:400,
    height:300,
    },
    scrollViewContainer: {
        // height: "100%",
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#EEEEEE"
    },
    scrollStyle: {
        paddingBottom: 20
    },

    check: {
        position: 'absolute',
        zIndex: 90000,
        width: wp('80%'),
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
        backgroundColor: 'rgba(124, 207, 36, 1)',
        marginTop: 2,
        marginRight: 12,
    },
    bookcardFlex: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
});

export default styles