import { StyleSheet, Dimensions } from "react-native";


export default styles = StyleSheet.create({

    // ONBOARDING
    onboardingView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    onBoardingImg: {
        height: "100%",
    },
    onBoardingInnerContainer: {
        flex: 1
    },

    // ONBOARDING TITILE
    onBoardingTitleContainer: {
        flex: 0.3,
        paddingHorizontal: 25,

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
        flex: 0.5
    },
    onBoardingInnerImg: {
        height: "98%",
        width: 400 
    },

    // LOGO
    logo:{
        width: 70,
        height: 70
    },
    logoContainer: {
        position: "absolute",
        top: "13%",
        right: 0,
        paddingHorizontal: 25,
    },

    // PAGINATOR
    paginatorContainer:{
        flexDirection: "row",
        height: 64,
        position:"absolute",
        top: "10%",
        justifyContent: "space-evenly",
        width:"100%",
        paddingHorizontal: 25,
    },
    paginatorDot:{
        height: 5,
        backgroundColor: "#fff"
    }

})