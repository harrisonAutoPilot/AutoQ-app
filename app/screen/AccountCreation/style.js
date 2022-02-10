import {StyleSheet, Dimensions} from "react-native";

export default styles = StyleSheet.create({
    mainBody: {
        height: Dimensions.get("window").height,
        backgroundColor: "#3858CF",
        paddingHorizontal: 32,
        width: Dimensions.get("window").width
    },
    submit:{
        marginTop: 20,
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#7CCF24",
        borderRadius: 100
    },
    headerView: {
        marginTop: 176,
        marginBottom: 8
    },
    headerTitle:{
        color: "#FFFFFF",
        fontSize: 32,
        fontFamily: "Urbanist-Regular",
        lineHeight: 40,
        textAlign: "center"
    },
    headerSubTitle:{
        color: "rgba(255, 255, 255, 0.6)",
        fontSize: 14,
        fontFamily: "Urbanist-Regular",
        lineHeight: 20,
        textAlign: "center",
        fontWeight: "400",
        letterSpacing: 0.3
    },
    headerSubTitleView:{
      marginHorizontal: Dimensions.get("window").width /10
    },
    outerCircleView:{
        width: 176,
        height: 176,
        borderRadius: 176,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 16,
        borderColor:"rgba(255, 255, 255, 0.2)"
    },
    outerCircleMainView:{
        alignItems: "center",
        marginTop: Dimensions.get("window").height /10,
        marginBottom: Dimensions.get("window").height /7,
    },
    innerCircleMainView:{
        width: 144,
        height: 144,
        borderRadius: 144,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderWidth: 16,
        borderColor:"rgba(255, 255, 255, 0.3)",
        justifyContent: "center"
    },
    iconView: {
        alignSelf: "center",
    },
    btnText:{
        fontFamily:"Urbanist-Regular",
        fontSize: 16,
        lineHeight: 24,
        color: "rgba(33, 33, 33, 1)",
        letterSpacing: 0.1,
        fontWeight: "600",
        textAlign: "center"
    }
})