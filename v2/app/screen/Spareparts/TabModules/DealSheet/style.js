import {Platform, StyleSheet} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

       container:{
        flex: 1,
        flexGrow: 1,
        height: "100%",
        backgroundColor:'#fff'
    },

    navStyle: {
        backgroundColor: "#E9EBF9",
        marginBottom: 20,
       
    },
    headerText:{
        fontSize: 22,
        fontFamily: "Urbanist-Regular",
        lineHeight: 28,
        color: "#fff",
        letterSpacing: 0.2,
        textAlign: "center"
    },
    listItem:{
        width:wp('95%'),
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        alignSelf:"center",
        padding:20,
        marginBottom:10,
    },
    imgCard:{
        alignSelf:'center',
        width:120,
        height:80,
        backgroundColor:'#fff',
        borderRadius:4,
    },
    textCover:{
       alignSelf:'center',
       alignItems:'center',
       paddingVertical:15
    },
    redText:{
        fontSize: 14,
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        color: "#D32F2F",
        letterSpacing: 0.3,
        textAlign:'center'

    },
    bgText:{
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        color: "#212121",
        letterSpacing: 0.3,  
        textAlign:'center' 
    },

    btnStyle:{
        width:150,
        paddingVertical:10,
        borderRadius:20,
        backgroundColor:'#00319D',
        alignSelf:'center',
        alignItems:'center',

    },
    btnText:{
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.3,   
    },
    dealTagImg:{
        width:40,
        height:40,
        resizeMode:'contain',
        position: "absolute",
        top: 0
        
    },
    // this is for the placeholder
    imgCardP:{
        alignSelf:'center',
        width:120,
        height:80,
        backgroundColor:'#e6e6e6',
        borderRadius:4,
    },
    smLine:{
      width:180,
      height: 15,
      backgroundColor:"#e6e6e6",
      borderRadius:40,
      marginBottom:10,
    },
    mdLine:{
        width:240,
        height: 15,
        backgroundColor:"#e6e6e6",
        borderRadius:40, 

      },
      btnStyleP:{
        width:100,
        height:40,
        borderRadius:50,
        backgroundColor:"#e6e6e6",
        alignSelf:"center",

      },
      listItemP:{
        width:wp('95%'),
        height:220,
        borderRadius:10,
        backgroundColor:'#F5F5F5',
        alignSelf:"center",
        padding:10,
        alignItems:'center',
        marginBottom:10,
    },
    dealImg:{
        width: "100%",
        height: "100%",
        resizeMode:'contain',
    },
    toastStyle:{
        backgroundColor: "rgba(67, 160, 71, 1)",
        borderRadius: 8,
        paddingVertical: 18,
        flexDirection: "row",
        paddingHorizontal: 15,
        alignItems: "center",
        width: wp('90%'),
        elevation: 5,
        marginLeft: 20,
        position: "absolute",
        top: -70,
    },

    // Bottom sheet

    modalPaddingLayout: {
        paddingHorizontal: 29.75,
        marginLeft: 5,
        zIndex: 9000,
        marginTop: 5,

    },

    scrollStyle: {
        paddingBottom: 20,
    },
    mainBody:{
        paddingTop:20,
        paddingBottom:Platform.OS === "android" ? 50 : 50
    },

    addStoreBottomSheet: {
        borderRadius: 40,
        overflow: "hidden"
    },
    topModalImageView: {
        height: 190,
        alignItems: 'center',
        width: wp('100%'),
        justifyContent: 'center',
        marginTop:-10,
    },

    smallCardCover: {
        zIndex: 9000,
        backgroundColor: 'pink',
        width: 400,
        height: 400,
    },

    modalTitleView: {
        backgroundColor: "#fff",
        paddingHorizontal: 35.75,
        marginTop: -10
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
        fontFamily: "Urbanist-Medium",
        lineHeight: 20,
        color: "#fff",
        letterSpacing: 0.3,
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
        borderBottomWidth: 0,
        paddingBottom: 10
    },

    modalMiniBody2: {
        backgroundColor: "rgba(250, 250, 250, 1)",
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
        paddingBottom: 20,
    },

    modalminiSecondView: {
        marginBottom: 8
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

    modalBtnView: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "rgba(124, 207, 36, 1)",
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        alignSelf: 'center',
        justifyContent: "center",
        marginTop: 10
    },

    increaseCartMainAmountView: {
        flexDirection: "row",
        marginTop: 25,
        alignItems: "center",
        justifyContent: "space-between"
    },

    cartAmountView: {
        // flexDirection: "row",
        // alignItems: "center",
        // borderRadius: 30,
        // borderWidth: 1,
        // borderColor: "rgba(117, 117, 117, 1)",
        // shadowColor: '#EEEEEE',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
     
        // //height: 35,
        // width: 90,
        // justifyContent: "center",
        // alignItems: "center",

        width:105,
        borderWidth: 1,
        borderColor: "rgba(117, 117, 117, 1)",
        borderRadius: 100,
        alignSelf:'center',
        alignItems:'center',
        justifyContent: "center",
        height: 44
  
       
    },

    label2: {
        fontSize: 14,
        fontFamily: "Urbanist-SemiBold",
        color: "#000",
        letterSpacing: 0.1,
        textTransform: "capitalize",
        alignSelf:'center',
        textAlign: "center",
       
    },

    amountText: {
        fontSize: 22,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 30,
        color: "#469D00",
        letterSpacing: 0.3,
        textAlign: "right"
    },

    modalBtnOverlay: {
        paddingHorizontal: 10
    },

    modalBtnText: {
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.1
    },

    promoContainer: {
        backgroundColor: "#C44569",
        height: 36,
        marginBottom: 20,
        paddingHorizontal: 23,
        justifyContent: "center",
        alignItems:'center',
        elevation: 5,
        shadowColor: '#EEEEEE',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    aboutText:{
        fontFamily: "Urbanist-SemiBold",
        fontSize: 16,
        lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.1
    },

    aboutDesText:{
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "rgba(97, 97, 97, 1)",
        letterSpacing: 0.25,
        marginBottom: 10,
        marginTop: 8
    },
    toastCover:{
        position:'absolute',
        top:hp('8%'),
        alignSelf:'center',
         width:wp('100%'),
        zIndex:9000
    },
    activityInd:{
        paddingBottom: 20, 
        paddingTop: 20 
      },
    errInCoverNew:{
    width:wp("92%"),
    alignSelf:'center',
    marginTop:180,
    position:'absolute',
    zIndex:9000
    }

})