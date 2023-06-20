import { StyleSheet } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default styles = StyleSheet.create({

    // ONBOARDING
    onboardingView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    onBoardingImg: {
        width:wp('100%'),
        height: "100%",
    },
    onBoardingInnerContainer: {
        flex: 1
    },

    // ONBOARDING TITILE
    onBoardingTitleContainer: {
        flex: 0.3,
        paddingHorizontal: 25,
        position:'absolute',
        top:'53%',

    },
    onBoardingTitle: {
        color: "#fff",
        fontSize: 45,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 52,
        marginBottom: 16,
    },
    onBoardingDesc: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
    },

    // ONBOARDING BTNS
    onBoardingBtnView: {
        paddingHorizontal: 25,
        position: "absolute",
        top: "80%",
        width:"100%"
    },

    // ONBOARDINGINNERIMG
    onBoardingInnerImgContainer: {
        paddingTop:20,
        flex: 0.6
    },
    onBoardingInnerImg: {
        height: "90%",
        width: 400,
        resizeMode:'contain'
    },
    onBoardingBtnInnerView:{
        marginBottom: 16

    },

    // LOGO
    logo:{
        width: 65,
        height: 65,
    
    },
    logoContainer: {
        position: "absolute",
        top: "14%",
        right: 0,
        paddingHorizontal: 25,
        paddingBottom:0,
    },

    // PAGINATOR
    paginatorContainer:{
        flexDirection: "row",
        height: 64,
        position:"absolute",
        top: "7%",
        justifyContent: "space-evenly",
        width:"100%",
        paddingHorizontal: 25,
    },
    paginatorDot:{
        height: 4,
        backgroundColor: "#fff"
    },
    titleCover:{
        marginBottom:-10,
    },
    title:{
        color: "#fff",
        fontSize: 24,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 32,
        marginTop:-10,
       
    },
    bottomSheetCover:{
        width:wp('100%'),
        height:hp('30%'),
        backgroundColor:'#fff',
        position:'absolute',
        bottom:hp('-2%'),
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center'
    },
    btnOne:{
      width:wp('85%'),
      backgroundColor:'#88DC32',
      paddingVertical:16,  
      borderRadius:30,
      marginBottom:20,
      alignItems:'center'
    },
    btnTwo:{
        width:wp('85%'),
        backgroundColor:'#3353CB',
        paddingVertical:16,  
        borderRadius:30,
        alignItems:'center'
      },
      btnOneText:{
        color: "#0E2000",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
      
      },
      btnTwoText:{
        color: "#fff",
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
      
      },
      paginationStyleItem:{
        width:100,
        height:4,
        borderRadius:0, 
       
       
    },
    paginationStyleItemInactive:{
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        // opacity:0.6

    },
    paginationStyleItemActive:{ 
        backgroundColor:'#ffffff',
        // opacity:0.2
    }
})