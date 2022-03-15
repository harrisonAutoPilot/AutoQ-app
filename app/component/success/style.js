import { Dimensions, StyleSheet, Platform } from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const styles = StyleSheet.create({
    main: {
        flex: 1,
        height: "100%",
        backgroundColor: '#469D00',
    },
    top: {
        alignItems: 'center',
        marginVertical: 30,

    },
    groupImg: {
        width: 200,
        height: 160,
    },
    topCircle: {
        width: 80,
        height: 80,
        borderWidth: 5,
        borderColor: '#6DAF3C',
        borderStyle: 'solid',
        borderRadius: 100,
        marginTop: -125,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        elevation: 4
    },
    frameImg: {
        width: 25,
        height: 25,
    },
 

});

export default styles