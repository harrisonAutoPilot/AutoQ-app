import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    topCover: {
        width: wp('100%'),
        backgroundColor: '#00319D',
        paddingTop: 5,
        marginBottom: '9%'
    },
    agentFaceCover: {
        width: wp('100%'),
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: '3%',
    },
    agentImg: {
        width: 64,
        height: 64,
        resizeMode: 'cover',
        alignItems: 'center',
        borderRadius: 40,
        // transform:[{rotate: "-90deg"}]
    },
    welcomeCover: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '4%',

    },
    sunImg: {
        width: 20,
        height: 20,
        alignSelf: "center"
    },
    sunImg1: {
        width: 30,
        height: 30,
        alignSelf: "center",

    },
    burnImg:{
        width: wp('40%'),
        height: 150,
        resizeMode:'contain',
        zIndex:-20,
        position:'absolute'
    },
    welcomeText: {
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        marginLeft: 5,
    },
    scrollStyle:{
        backgroundColor: '#fff',
        marginTop:10,
    },
    smCover:{
        width: wp('100%')   
    },
    label2: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#616161",
        letterSpacing: 0.1,
        textTransform: "capitalize",
        // height: 30,
        textAlign: "center",
        flex: 1,
        width: 50,
        // paddingTop:Platform.OS === "android" ? 7 : -25,
    },
    labelCart: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        // lineHeight: 22,
        color: "#616161",
        letterSpacing: 0.1,
        textTransform: "capitalize",
        // height: 30,
        textAlign: "center",
        flex: 1,
        width: 50,
        paddingTop:Platform.OS === "android" ? 8 : -5,
    },

    bottomCover: {
        width: wp('100%'),
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35,
        alignItems: 'center',
        backgroundColor: '#fff',
        flexGrow: 1,
        flex: 1,
       
    },
    cardCover: {
        // padding: 10,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
     
    },
    cardOne: {
        width: wp('43%'),
        height: 170,
        backgroundColor: '#778BEB',
        borderRadius: 15,
        marginHorizontal: 8,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    cardTwo: {
        width: wp('43%'),
        height: 170,
        backgroundColor: '#079992',
        borderRadius: 15,
        marginHorizontal: 8,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    cardThree: {
        width: wp('43%'),
        height: 170,
        backgroundColor: '#F19066',
        borderRadius: 15,
        marginHorizontal: 8,
        marginBottom: 20,
        // paddingVertical: 20,
        // paddingHorizontal: 16
    },
    cardFour: {
        width: wp('43%'),
        height: 170,
        backgroundColor: '#C44569',
        borderRadius: 15,
        marginHorizontal: 8,
        marginBottom: 20,
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    cardTopInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardBgText: {
        fontSize: 28,
        fontFamily: "Urbanist-Regular",
        lineHeight: 36,
        color: "#fff",
        letterSpacing: 0.2,
    },
    cardSmText: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#fff",
        letterSpacing: 0.2,
    },
    cardDownInner: {
        marginTop: 45,
        width:100,
        // width: 90
    },

    sectorCover: {
        width: wp('100%'),
        padding: 20,
        paddingLeft:width / 10
    },
    titleCover: {
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#00319D",
        letterSpacing: 0.2,
        fontWeight: "600",
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
        backgroundColor: '#00319D',
    },
    miniSecondHeadingTitle: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#3858CF",
        letterSpacing: 0.2,
        fontWeight: "600"
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
    },

    productTitle: {
        fontSize: 14,
        fontFamily: "UrbanistMedium",
        lineHeight: 20,
        color: "gray",
        letterSpacing: 0.1,
    },
    priceView: {
        paddingTop: 8
    },
    priceTitle: {
        fontSize: 15,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#469D00",
        letterSpacing: 0.1,
        fontWeight: "600"
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
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        color: "#212121",
        letterSpacing: 0.2,
        textAlign: "center"
    },
    modalTitle2: {
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#757575",
        letterSpacing: 0.1,
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
        paddingTop: 25.5,
        paddingBottom: 20,
        marginTop: 5,
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
        marginTop: 8,

    },
    modalTitleView: {
        backgroundColor: "#fff",
        width:wp('90%'),
        alignSelf:'center',
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
        textTransform: "capitalize",
        fontFamily: "Urbanist-SemiBold"
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
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        color: "#00319D",
        letterSpacing: 0.3,
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
        height: 50
    },
    decreaseIconCartView: {
        flexDirection: "row",
        // marginTop: 54,
        alignItems: "center"
    },
    amountText: {
        fontSize: 22,
        fontFamily: "Urbanist-Medium",
        lineHeight: 30,
        color: "#469D00",
        letterSpacing: 0.3,
        textAlign: "right",
       
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
        // paddingVertical: 11,
        paddingHorizontal: 14
    },
    browseView: {
        alignItems: "center",
        marginLeft: 20
    },
    modalHeartIconView: {
        alignItems: "center",
        marginTop: 15,
        paddingBottom: 15
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
        paddingVertical: 16,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        flexDirection: "row",
        alignContent: "center",
        width: "100%",
        justifyContent: "center", 
        marginVertical: 20,
    },
    modalBtn: {
        backgroundColor: "rgba(124, 207, 36, 1)",
        paddingHorizontal: 10
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
        fontFamily: "Urbanist-SemiBold",
        fontSize: 14,
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.1,
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
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: wp('90%'),
        textAlign: 'center',
        marginRight: wp('1%'),
        marginLeft: wp('2%')

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
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 25,
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
        width: 85,
        height: 85,
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

    emptyTextBig: {
        fontFamily: "Urbanist-Regular",
        fontSize: 22,
        lineHeight: 20,
        color: "#757575",
        letterSpacing: 0.1,
        fontWeight: "600",
        paddingBottom: 10,
    },
    topModalView: {
        // height: "24%",
        marginTop:10,
        paddingTop:20,
        paddingBottom:20,
    },
    topModalImageView: {
        height: 170,
        alignItems: 'center',
        width: wp('100%'),
        marginTop: -7,
    },
    scrollViewContainer: {
        // height: "100%",
        backgroundColor: "#fff"
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
    },
    sunImg2:{
        width:"100%",
        height:"100%",
    },
    suninner:{
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    addStoreBottomSheet: {
        borderRadius: 50,
        overflow: "hidden"
    },

  //THIS IS FOR THE HOSPITAL TYPE CHECK

  crossCover:{
    flexDirection:'row',
    justifyContent:'space-between',
    position:'absolute',
    right:wp('18%'),
    height:22,
    paddingLeft:10,
    paddingRight:10,
    borderWidth:1,
    borderColor:'rgba(211, 47, 47, 0.24)',
    borderRadius:30,
    alignItems:'center',
    marginRight:10 
},
smCrossImg:{
    width:13,
    height:13,
    resizeMode:'contain',
    marginBottom:2,
},
listPercent: {
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 16,
    color: "#D32F2F",
    letterSpacing: 0.25,
    textTransform: "capitalize",
    marginLeft:5,
},
notifyMeBtn:{
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#3858CF",
    borderRadius: 100,
    marginBottom: 20
},
notifyMeBtn2:{
    marginTop: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: "#cdcdcd",
    borderRadius: 100,
    marginBottom: 20
},
descriptionCover:{
    width:wp('100%'),
    paddingHorizontal:20,
    paddingVertical:10,
    alignSelf:'center'
  },
  descriptionTitle:{
    fontSize: 16,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
  },
  descriptionContent:{
    fontSize: 14,
    fontFamily: "Urbanist-SemiBold",
    lineHeight: 28,
    color: "#212121",
    letterSpacing: 0.2,
  },
  cashCover:{
    width:"100%",
    alignItems:'center',
    justifyContent:'center',
  },
  cashImg:{
    width:90,
    height:40,
     
},
infoStyle:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    borderRadius:6,
    backgroundColor:'#BA1A1A',
    alignSelf:'center',
    alignItems:'center'
      },
      infoText:{
        color: '#fff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        fontWeight: "600",
        letterSpacing: 0.1,
        textAlign:'center'
      }
    

});

export default styles