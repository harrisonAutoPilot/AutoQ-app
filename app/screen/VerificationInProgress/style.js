import {Dimensions, StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    mainBody: {
        backgroundColor: "#fff",
        height: "100%",
        paddingHorizontal: 28
    },
    modalView: {
        flex:1,
        
    },
    modalInnerView:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#E9EBF9",
        height: 208,
        borderRadius: 8,
        marginVertical: Dimensions.get("window").height /2.7,
        paddingHorizontal: 28
    },
    modalHeader:{
        fontFamily: "Urbanist-Regular",
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: "rgba(56, 88, 207, 1)",
        textAlign: "center"
    },
    modalHeaderView: {
        marginBottom:8
    },
    modalText:{
        fontFamily: "Urbanist-Regular",
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.25,
        color: "#424242",
        textAlign: "center"
    },
    innerTexts: {
        fontWeight: "600",
        color: "#212121"
    },
    iconView: {
        marginBottom: 25
    },
    btn:{
        marginTop: Dimensions.get("window").height / 21,
        paddingVertical: 16,
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#3858CF',
        marginBottom: 50,
        alignSelf: "center"
    },
    btnText:{
        color: "#3858CF",
        fontWeight: "600",
    },

})