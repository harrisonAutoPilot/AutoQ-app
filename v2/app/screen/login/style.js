import { StyleSheet, Platform } from "react-native";


export default styles = StyleSheet.create({
    mainContainer:{
        backgroundColor: "#fff",
        flex: 1,
        paddingTop: Platform.OS == "android" ? 30 : 0,

    },

    loginTitleContainer:{
        paddingHorizontal: 28,
        height: "100%"
    },
    loginTitle:{
        color: "#171B2C",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        marginBottom: 4,
    },
    loginDesc:{
        color: "#5A5D72",
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        letterSpacing: 0.25
    },

    // FORM VALIDATOR
    formContainer:{
        marginTop: 20,
        flex: 1,
    },
    resetPinFormContainer:{
        marginTop: 16,
        flex: 1,
    },
    submitLoginBtnContainer:{
        marginTop: 24
    },
    inputFieldView:{
        flexDirection: "row",
        justifyContent:"space-between"
    },

    // COUNTRYCODE DROPDOWN OUTER BOX

    dropDownContainer:{
        borderWidth: 1.2,
        borderColor: '#5A5D72',
        borderRadius: 5,
        marginTop: 15,
        height: 60,   
        
    },
    dropDownLabelView: {
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#fff",
        paddingHorizontal: 5,
        zIndex: 2
    },
    dropDownLabelViewTeam:{
        position: "absolute",
        top: -10,
        left: 10,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 5,
        zIndex: 2
    },
    dropDownLabelText: {
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        color: "#45464F",
        letterSpacing: 0.2,
        textTransform: "capitalize"
    },
    formFlex:{
        flex: 1
    },
    formInputFieldFlex: {
        flex: 0.8
    },
    dropDownTextInput:{
        justifyContent: "space-between",
        alignItems: "center",
        // alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15

    },
    dropDownTextInputTeam:{
        justifyContent: "space-between",
        alignItems: "center",
        // alignSelf: "center",
        flex: 1,
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 15

    },
    dropDownTextInputTitle: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#424242",
        letterSpacing: 0.5,
        width: "80%"
    },
    dropDownTextInputTitleTeam: {
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        color: "#e6e6e6",
        letterSpacing: 0.5,
        // width: "80%"
    },

    // ForgotNumber
    forgotNumberTitle:{
        fontSize: 14,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 20,
        color: "#5A5D72",
        letterSpacing: 0.25
    },
    forgotNumberView:{
        alignSelf: "flex-end",
        marginTop: 8
    },

    // ERR HANDLING
    errLoginView:{
        alignSelf: "flex-end",
        marginTop: 2
    },
    inputErrText:{
        color: "#BA1A1A",
        fontSize: 12,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 16,
        letterSpacing: 0.4,
    },
    inputErrHolder: {
        borderColor: "#BA1A1A"
    },

    // RESETPINSUCCESS
    resetPinContainer:{
       paddingTop: "40%",
        backgroundColor:"#fff",
        flex: 1,
        paddingHorizontal: 30
    },
    resetPinImage:{
        width: 140,
        height: 126,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"

    },
    resetPinImageView:{
        alignSelf: "center",
        alignItems: "center"
    },
    resetPinTitleView:{
        marginTop: 100,
    },
    resetPinTitle:{
        color: "#171B2C",
        fontSize: 28,
        fontFamily: "AnekLatin-SemiBold",
        lineHeight: 36,
        textAlign: "center"
    },
    resetPinDesc:{
        color: "#5A5D72",
        fontSize: 16,
        fontFamily: "AnekLatin-Regular",
        lineHeight: 24,
        textAlign: "center",
        marginTop: 8
    },
    resetFlexUp:{
        flex: 0.85
    },
    resetFlexDown:{
        flex: 0.1
    },
    submitBtnContainer: {
        flex: 0.23
    },
    

})

