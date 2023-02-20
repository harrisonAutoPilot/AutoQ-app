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
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 28,
        letterSpacing: 0.2, 
        marginTop:10
    },
    walletCaption:{
        color: '#ffffff',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
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
        flexDirection:"row",
        justifyContent:'space-between'
    },
    historyText:{
        color: '#212121',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        letterSpacing: 0.3,   
    },
    sortText:{
        color: '#424242',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 16,
        letterSpacing: 0.3,   
    },
    reverseContainer:{
    flexDirection:"row",
    justifyContent:'center',
    borderRadius:20,
    borderWidth:1,
    borderColor:"#E0E0E0",
    paddingHorizontal:10,
    paddingVertical:5,
    backgroundColor:"#fafafa"
    },
    reverseImg:{
        width:15,
        height:15,
        resizeMode:"contain"
    },
    bottomContainer:{
        width:wp("100%"),
        height:hp("60%"),
        // backgroundColor:'red',
        marginTop:10,
    },
    cardCover:{
        width:wp('95%'),
        padding:15,
        backgroundColor:"#FAFAFA",
        borderRadius:8,
        alignSelf:'center',
        marginVertical:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    arrowImg:{
        width:30,
        height:30,
        borderRadius:100,
        resizeMode:'contain'
    },
    creditText:{
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-SemiBold",
        lineHeight: 24,
        letterSpacing: 0.1, 
        width:140,
        marginLeft:10,
      
    },
    dateText:{
        color: '#757575',
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        marginLeft:10,
        letterSpacing: 0.3, 

    },
    priceText:{
        color: '#424242',
        fontSize: 16,
        fontFamily: "Urbanist-Regular",
        lineHeight: 24,
        letterSpacing: 0.1,  
        marginTop:10, 
        width:140,
        textAlign:'right',
      
    },
    nairaText:{
        color: '#9E9E9E',
        fontSize: 12,
        fontFamily: "Urbanist-Regular",
        lineHeight: 18,
        letterSpacing: 0.1,     
    },
    redSign:{
        color:"red",
        fontSize:16,
        fontFamily: "Urbanist-Regular",

    },
    blueSign:{
        color:"#469D00",
        fontSize:16,
        fontFamily: "Urbanist-Regular",

    },
    // this is for the placeholder
    holderCard:{
        flexDirection:'row',
        marginVertical:10,

    },
    leftCover: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,
        alignItems:'center',
        alignSelf:'center',

    },
    mdLine:{
        width:170,
        height:12,
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
            fontFamily: "Urbanist-SemiBold",
            fontSize: 20,
            lineHeight: 28,
            color: "#757575",
            letterSpacing: 0.1,
        },
})