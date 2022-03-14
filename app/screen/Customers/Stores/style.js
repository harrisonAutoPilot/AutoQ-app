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
        paddingTop: 24.25,
        alignSelf: "center",
        marginBottom:-12,
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
        fontSize: 18,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.2,
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
        flexDirection: 'row',
        justifyContent: 'center',
        width: wp('95%'),
        marginTop:10,

    },
    backCover: {
        position: 'absolute',
        left: wp('5%'),
    },
    topPrompt: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 18,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderWidth:1,
        borderStyle:'dashed',
        borderColor:'#469D00'
    },
    topPromptText1: {
        fontSize: 28,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 20,
        color: "#469D00",
        // letterSpacing: 0.3,
        // fontWeight: "600",
    },
    topPromptText2: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#469D00",
        letterSpacing: 0.3,
        marginTop:9,
        marginLeft:10,

    },
   
    bottomCover: {
        width: wp('100%'),
        height:hp('60%'),
        alignItems:'center',
    },
    cardDesCover:{
    width:200,
    alignItems:'flex-start',
    marginLeft:20,
 
    },
    greaterImg:{
        width:10,
        height:10,
        resizeMode:'contain',
        marginTop:3,
        marginLeft:5,
    },
    cardArrowCover:{
        flexDirection:'row',
        marginRight:0,
        },
    storeName: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    },
    storeView: {
        fontSize: 11,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center",
        textTransform:'uppercase',

    },
    storeAddress: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "600",
        textAlign: "left"
    },
    card:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:wp('90%'),
        padding:25,
        backgroundColor:'#fff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderRadius:10,
        elevation: 0.5,
        borderWidth:1,
        borderColor:'#f5f5f5',
        alignItems:'center',
        marginBottom:10,
    },
    formCover: {
        // height:hp('40%'),
        // flex: 1,
        width:wp('100%'),
        padding:20,
        marginTop:-40,
    },
    registerInputHolder: {
        // width:wp('90%'),
        borderWidth: 1,
        borderColor: "#BDBDBD",
        paddingVertical: Platform.OS === "ios" ? 20 : 5,
        paddingHorizontal: 10,
         marginTop: Dimensions.get("window").height / 20,
        borderRadius: 5,
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
       
        backgroundColor:'#ffffff',
        height:hp('100%'),
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f3f4f5",
        paddingHorizontal: 5
    },
    inputErrHolder: {
        borderColor: "red"
    },
    inputPinHolder: {
     marginTop: 25,
    },
    registerInputPinHolder: {
        // marginTop: 20,
    },
    labelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    label: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#616161",
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    label2: {
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        color: "#212121",
        letterSpacing: 0.2,
        fontWeight: "400",
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
    pinInputView: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        flexWrap: "wrap"
    },
    inputCover:{
        width:wp('100%'),
        padding:30,
        paddingTop:5,
        backgroundColor:'#fff'
        
        
    },
    inputPinCover:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    changeCover:{
        width:50,
        position:'absolute',
        right:2,
        marginTop:5,
    },
    pinView: {
        justifyContent: "flex-end",
      
    },
    showTextPin: {
        color: "#9E9E9E",
        fontSize: 11,
        marginTop: Platform.OS === "android" ? 16 : 5,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.2,
        fontWeight: "400"
    },
    failedResponseView: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 5,
        backgroundColor: "red"
    },
    createNewAccountView: {
         marginTop: Dimensions.get("window").height /4.5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 100,
        alignSelf: "center"
    },
    loginAccountView: {
        marginTop: Dimensions.get("window").height / 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // position: "absolute",
        // top: 70,
        alignSelf: "center"
    },
    createNewAccountText: {
        color: "#3858CF",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    },
    createAccountlabel: {
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        color: "#212121",
        letterSpacing: 0.25,
    },
    innerLabelPhone: {
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        // lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.3,
        fontWeight: "400",
        marginTop: 3,
        marginBottom: 5,
        // width: "70%",
        paddingLeft: 40,
    },
    flag: {
        marginTop: -22,
        paddingLeft: 5,
    },
    inputCoverr:{
        marginTop:-12
    },
    inputCover2:{
        marginTop:-25
    },
    selectCover:{
        position:'absolute',
        right:7,
        borderWidth:1,
        borderColor:'#7485FF',
        backgroundColor:'#E9EBF9',
        padding:5,
        borderRadius:50,
        marginTop:-23
    },
    selectText:{
      fontFamily: "Urbanist-Regular",
      fontSize: 11,
      lineHeight: 16,
      letterSpacing: 0.3,
      fontWeight: "500",
      color: "#3858CF",
      textTransform: "capitalize",
      
    },
    btnCover: {
        position: "absolute",
         borderTopColor: "#F5F5F5",
         borderTopWidth: 1,
         height: "15%",
         width: "100%",
         backgroundColor:'#f5f5f5',
         padding: 20,
         alignItems: "center",
         justifyContent:'center',
         top: hp("80%"),
       
     },
     submit: {
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#3858CF",
        borderRadius: 100,
        width: "100%",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },

})