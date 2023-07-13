import {StyleSheet, Dimensions} from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#3858CF",
        height: hp('100%'),
        width: Dimensions.get("window").width
    },
    imageHolder:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100
    }
});

export default styles;