import {StyleSheet, Dimensions} from "react-native";

export default styles = StyleSheet.create({
    imageHolder:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100
    },
    body: {
        height: Dimensions.get("screen").height,
    },
    body2: {
        height: Dimensions.get("screen").height/ 2,
    },
    body3: {
        height: Dimensions.get("screen").height,
        backgroundColor: "rgba(255,255,255,1)",
    },

});