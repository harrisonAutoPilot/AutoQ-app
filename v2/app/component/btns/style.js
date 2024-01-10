import {StyleSheet} from "react-native"

export default styles = StyleSheet.create({
    onBoardingBtnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 100,
        paddingVertical: 16,
        alignItems: "center",
    },
    onProceedBtnContainer:{
        width:'45%',
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 100,
        paddingVertical: 16,
        alignItems: "center",
    },
    homeDetailsBtnContainer:{
        flexDirection:'row',
        justifyContent:'center',
        borderRadius: 100,
        paddingVertical: 16,
        alignItems: "center",
        backgroundColor: "#3353CB"
    },
    onBoardingTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        
    },
    homeDetailsTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        marginLeft: 11
        
    },
    continueTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Medium",
        lineHeight: 20,
        marginBottom:2,
    },
    rightArrowImg:{
        width:10,
        height:10,
        resizeMode:'contain',
        marginLeft:10
    }

})