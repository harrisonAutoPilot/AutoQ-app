import { StyleSheet, Dimensions, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const screenHeight = Dimensions.get('screen').height

export default styles = StyleSheet.create({
    main: {
        width:wp('100%'),
        flex:1,  

    },
   
    walletContainer:{
        width:wp("90%"),
        height:100,
        borderRadius:10,
        backgroundColor:'red',
        alignSelf:'center',
        alignItems:'center',
        marginVertical:20,
        justifyContent:'center'
    },
    amountText:{
        color: '#ffffff',
        fontSize: 22,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2, 
        marginTop:10
    },
    walletCaption:{
        color: '#ffffff',
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.2, 
    },
    waveImg:{
        width:wp("80%"),
        height:120,
        resizeMode:'contain',
        position:'absolute'
    },
    middleContainer:{
        width:wp("90%"),
        alignSelf:'center',
        paddingHorizontal:5,
        paddingVertical:5,
        flexDirection:"row",
        justifyContent:'space-between',
        alignSelf:'center'
    },
    historyText:{
        color: 'rgba(27, 27, 31, 1)',
        fontSize: 16,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.3,   
    },
    sortText:{
        color: 'rgba(69, 70, 79, 1)',
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        letterSpacing: 0.3,   
    },
    reverseContainer:{
    flexDirection:"row",
    justifyContent:'center',
    borderRadius:6,
    borderWidth:1,
    borderColor:"#E0E0E0",
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:"#fafafa"
    },
    reverseImg:{
        width:15,
        height:15,
        resizeMode:"contain",
        marginTop:5,
    },
    bottomContainer:{
        width:wp("100%"),
        height:hp("60%"),
        marginTop:10,
        alignSelf:'center',
     
    },
    arrowImg:{
        width:30,
        height:30,
        borderRadius:100,
        resizeMode:'contain'
    },
    cardCover:{
        width:wp('100%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
       alignItems:'center',
    },
    amountText:{
        color: "#106D34",
        fontSize: 14,
         fontFamily: "AnekLatin-Regular",
        lineHeight:20,
    },
    amountTextDebit:{
        color:"#BA1A1A",
        fontSize: 14,
         fontFamily: "AnekLatin-Regular",
        lineHeight:20,
    },
    leftCover:{
        flexDirection:'row',
        alignItems:'flex-start',
        width:wp('10%'),
        justifyContent:'flex-start',
    
    },
    rightCover:{
        width:wp('82%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:1,
        borderBottomColor:"rgba(121, 116, 126, 0.16)",
        paddingHorizontal:16,
        paddingVertical:15,
        paddingLeft:0,
        marginRight:20
    },
    typeText:{
        color: "#1B1B1F",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight:24,
    },
    dateText:{
        color: "#5A5D72",
        fontSize: 14,
         fontFamily: "AnekLatin-Regular",
        lineHeight:20,
    },
    arrowImg:{
        width:14,
        height:14,
        resizeMode:'contain'
    },
    // this is where the placeholder style starts
    imgCoverP:{
        width:30,
        height:30,
        backgroundColor:"#bfbfbf",
        borderRadius:100,
    },
    smLine:{
        width:90,
        height:15,
        backgroundColor:"#bfbfbf",
        borderRadius:20,
        marginVertical:5,
    },
    mdLine:{
        width:120,
        height:15,
        backgroundColor:"#bfbfbf",
        borderRadius:20,
        marginVertical:5,
    },
    tnLine:{
        width:30,
        height:15,
        backgroundColor:"#bfbfbf",
        borderRadius:20,
        marginVertical:5,
    },

    // this is for the empty screen
    emptyTransCover: {
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        width: wp('100%'),
        textAlign: 'center',
        justifyContent:'center',
    },
    imgCoverBg: {
        width:"100%",
        alignItems:'center',
        alignSelf:'center',
        marginTop: 40,
        marginBottom: 25,
    },
    emptyCartImg: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
        marginRight:20,
    },
    emptyTextBig: {
        fontFamily: "AnekLatin-SemiBold",
        fontSize: 22,
        lineHeight: 28,
        color: "#1B1B1F",
        letterSpacing: 0.1,
    },
    emptyTextSm: {
        fontFamily: "AnekLatin-Regular",
        fontSize: 14,
        lineHeight: 20,
        color: "#45464F",
        letterSpacing: 0.1,
    },
    emptyTransImg: {
        width: 85,
        height: 85,
        resizeMode: 'contain',
    },
    
    // this is for the placeholder
    holderCard:{
        width:wp('100%'),
        flexDirection:'row',
        marginVertical:10,
        alignSelf:'center',


     

    },
    leftCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        alignSelf:'center',

    },
    mdLine:{
        width:160,
        height:13,
        backgroundColor:"#e6e6e6",
        borderRadius:8,
        marginVertical:15,
        marginLeft:20,
            },
        smLine:{
            width:40,
            height:12,
            backgroundColor:"#e6e6e6",
            borderRadius:8,
            marginVertical:15,
            marginLeft:40,
        },
        imgLine:{
            width: 35,
            height: 35,
            borderRadius:100, 
            backgroundColor:"#f2f2f2",
            marginTop:4,
            marginBottom:2,
        },
        // this is for the Empty transaction
        emptyCoverOrder1: {
            alignItems: 'center',
            justifyContent: 'center',
            width: wp('100%'),
            textAlign: 'center',
            justifyContent:'center',
           alignSelf:'center'
    
        },
        imgCoverBigOrder: {
            marginTop: 40,
            marginBottom: 25,
        },
        emptyCartImg: {
            width: 85,
            height: 85,
            resizeMode: 'contain',
        },
        emptyTextBig: {
            fontFamily: "AnekLatin-SemiBold",
            fontSize: 20,
            lineHeight: 28,
            color: "#757575",
            letterSpacing: 0.1,
        },
})